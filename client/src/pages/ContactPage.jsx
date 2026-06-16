import React, { useMemo, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const PHONE_WA = '919566716659';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [company, setCompany] = useState('');
    const [requirement, setRequirement] = useState('');
    const [status, setStatus] = useState(null);

    const whatsappMessage = useMemo(() => {
        return `Hello Sri Andal Cartons,\n\nName: ${name}\nMobile: ${mobile}\nCompany: ${company}\nRequirement: ${requirement}\n\nI would like to know more about your products.`;
    }, [name, mobile, company, requirement]);

    const whatsappLink = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(whatsappMessage)}`;

    async function sendInquiry(e) {
        e.preventDefault();

        try {
            setStatus({ type: 'loading', message: 'Sending inquiry...' });
            await axios.post(`${API_BASE}/api/contact`, { name, mobile, company, requirement });
            setStatus({ type: 'success', message: 'Inquiry saved. Our team will contact you soon.' });
            setName('');
            setMobile('');
            setCompany('');
            setRequirement('');
        } catch (err) {
            setStatus({
                type: 'error',
                message: err?.response?.data?.message || 'Failed to save inquiry.'
            });
        }
    }

    return (
        <>
            <Helmet>
                <title>Contact Us | Sri Andal Cartons</title>
                <meta name="description" content="Send inquiry to Sri Andal Cartons via WhatsApp or email. Save requirements to MongoDB." />
            </Helmet>

            <Container className="py-5">
                <h1 className="section-title fw-bold mb-4">Contact</h1>

                <Row className="g-4">
                    <Col lg={7}>
                        <Card className="shadow-sm border-0 p-4" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                            <Form onSubmit={sendInquiry}>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your name"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="mobile">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control
                                                value={mobile}
                                                onChange={(e) => setMobile(e.target.value)}
                                                placeholder="Phone number"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="company">
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                placeholder="Company name (optional)"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group controlId="requirement">
                                            <Form.Label>Requirement</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                value={requirement}
                                                onChange={(e) => setRequirement(e.target.value)}
                                                placeholder="Tell us about product type, sizes, quantity, printing needs..."
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="d-flex flex-wrap gap-3 mt-4">
                                    <Button
                                        type="button"
                                        as="a"
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-brand-yellow px-4"
                                    >
                                        Send via WhatsApp
                                    </Button>
                                    <Button type="submit" className="btn-brand px-4">
                                        Send Inquiry
                                    </Button>
                                    <Button
                                        type="button"
                                        as="a"
                                        href={`mailto:bharath978930@gmail.com?subject=${encodeURIComponent('Inquiry - Sri Andal Cartons')}&body=${encodeURIComponent(`Name: ${name}\nMobile: ${mobile}\nCompany: ${company}\nRequirement: ${requirement}`)}`}
                                        className="btn btn-outline-warning px-4"
                                    >
                                        Send Email
                                    </Button>
                                </div>

                                {status && (
                                    <div
                                        className={`mt-3 p-3 rounded-3 ${status.type === 'success'
                                            ? 'bg-success bg-opacity-10'
                                            : status.type === 'error'
                                                ? 'bg-danger bg-opacity-10'
                                                : 'bg-warning bg-opacity-10'
                                            }`}
                                    >
                                        {status.message}
                                    </div>
                                )}
                            </Form>
                        </Card>
                    </Col>

                    <Col lg={5}>
                        <Card className="shadow-sm border-0 p-4" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                            <div className="fw-bold" style={{ color: '#0b3a63' }}>
                                Sri Andal Cartons
                            </div>
                            <div className="mt-3" style={{ lineHeight: 1.8 }}>
                                <div>625/2B, Mangattu Valasu,</div>
                                <div>Kavundichi Palayam (PO),</div>
                                <div>Vellode (Via),</div>
                                <div>Near The Indian Public School Back Side,</div>
                                <div>
                                    <strong>Erode - 638112</strong>
                                </div>
                            </div>

                            <div className="mt-3">
                                <strong>GSTIN:</strong> 33AHPPL0132N1ZA
                            </div>
                            <div className="mt-3">
                                <strong>Phone/WhatsApp:</strong>{' '}
                                <a href="https://wa.me/918807371680" target="_blank" rel="noreferrer">
                                    8807371680
                                </a>
                            </div>
                            <div className="mt-2">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:sriandalcartonserode@gmail.com">sriandalcartonserode@gmail.com</a>
                            </div>

                            <div className="mt-4">
                                <iframe
                                    title="Sri Andal Cartons Location"
                                    style={{
                                        width: '100%',
                                        height: 260,
                                        border: 0,
                                        borderRadius: 16
                                    }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps?q=11.2850336,77.6920486&z=17&output=embed"
                                    allowFullScreen
                                />
                            </div>
                            <div className="mt-3">
                                <a
                                    href="https://www.google.com/maps/place/Sri+Andal+Cartons/@11.2850388,77.6894737,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96f004a5da4fb:0x13b5de543c02e8c!8m2!3d11.2850336!4d77.6920486!16s%2Fg%2F11vwp1v4r5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success mt-2"
                                >
                                    📍 Open in Google Maps
                                </a>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

