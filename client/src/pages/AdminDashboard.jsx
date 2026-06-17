import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
console.log(import.meta.env.VITE_API_URL);
export default function AdminDashboard() {
  const [token, setToken] = useState(localStorage.getItem('admin_jwt') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [inquiries, setInquiries] = useState([]);
  const [totalLeads, setTotalLeads] = useState(0);

  const [fileList, setFileList] = useState(null);

  const api = axios.create({ baseURL: API_BASE });

  useEffect(() => {
    if (!token) return;

    let mounted = true;
    async function load() {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [inqRes, statsRes] = await Promise.all([
          api.get('/api/admin/inquiries', { headers }),
          api.get('/api/admin/stats/leads', { headers })
        ]);

        if (!mounted) return;
        setInquiries(inqRes.data.inquiries || []);
        setTotalLeads(statsRes.data.totalLeads || 0);
      } catch {
        if (mounted) {
          setToken('');
          localStorage.removeItem('admin_jwt');
        }
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [token]);

  async function login(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/api/auth/admin/login`, { email, password });
      localStorage.setItem('admin_jwt', res.data.token);
      setToken(res.data.token);
    } finally {
      setLoading(false);
    }
  }

  async function removeInquiry(id) {
    if (!token) return;
    await api.delete(`/api/admin/inquiries/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setInquiries((prev) => prev.filter((x) => String(x._id) !== String(id)));
  }

  async function uploadImages(e) {
    e.preventDefault();
    if (!token || !fileList || fileList.length === 0) return;

    const form = new FormData();
    for (const f of Array.from(fileList)) form.append('images', f);

    setLoading(true);
    try {
      await api.post('/api/admin/gallery/upload', form, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' }
      });
      setFileList(null);
      alert('Images uploaded successfully');
    } catch (err) {
      alert(err?.response?.data?.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Sri Andal Cartons</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Container className="py-5">
        <h1 className="section-title fw-bold mb-4">Admin Dashboard</h1>

        {!token ? (
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="shadow-sm border-0 p-4" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                <Card.Title className="fw-bold" style={{ color: '#0b3a63' }}>
                  Login
                </Card.Title>
                <Form onSubmit={login} className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                  </Form.Group>
                  <Button type="submit" className="btn-brand" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
                  </Button>
                </Form>

                <div className="mt-3 text-muted" style={{ lineHeight: 1.6 }}>
                  Default admin can be created via server env: <br />
                  <code>ADMIN_EMAIL</code> and <code>ADMIN_PASSWORD</code>
                </div>
              </Card>
            </Col>
          </Row>
        ) : (
          <>
            <Row className="g-4">
              <Col lg={8}>
                <Card className="shadow-sm border-0 p-4" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <Card.Title className="fw-bold" style={{ color: '#0b3a63' }}>
                        Leads / Inquiries
                      </Card.Title>
                      <div className="text-muted">
                        Total leads: <strong>{totalLeads}</strong>
                      </div>
                    </div>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        localStorage.removeItem('admin_jwt');
                        setToken('');
                        setInquiries([]);
                      }}
                    >
                      Logout
                    </Button>
                  </div>

                  <Table hover responsive className="mt-3">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Company</th>
                        <th>Requirement</th>
                        <th>Received</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {inquiries.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center text-muted">
                            No inquiries yet
                          </td>
                        </tr>
                      ) : (
                        inquiries.map((q) => (
                          <tr key={q._id}>
                            <td>{q.name}</td>
                            <td>{q.mobile}</td>
                            <td style={{ maxWidth: 180, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {q.company}
                            </td>
                            <td style={{ maxWidth: 260, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {q.requirement}
                            </td>
                            <td>{new Date(q.createdAt).toLocaleString()}</td>
                            <td className="text-end">
                              <Button size="sm" variant="outline-danger" onClick={() => removeInquiry(q._id)}>
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="shadow-sm border-0 p-4" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                  <Card.Title className="fw-bold" style={{ color: '#0b3a63' }}>
                    Upload Gallery Images
                  </Card.Title>
                  <Form onSubmit={uploadImages} className="mt-3">
                    <Form.Group className="mb-3" controlId="images">
                      <Form.Label>Select images</Form.Label>
                      <Form.Control type="file" multiple accept="image/*" onChange={(e) => setFileList(e.target.files)} required />
                    </Form.Group>
                    <Button type="submit" className="btn-brand-yellow" disabled={loading}>
                      {loading ? <Spinner animation="border" size="sm" /> : 'Upload'}
                    </Button>
                    <div className="text-muted mt-3" style={{ lineHeight: 1.6 }}>
                      After upload, open the Gallery page to see images.
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

