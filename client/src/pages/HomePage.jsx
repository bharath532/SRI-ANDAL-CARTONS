import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BootstrapHomeCarousel from '../components/home/BootstrapHomeCarousel.jsx';


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sri Andal Cartons | Quality Corrugated Packaging Solutions</title>
        <meta
          name="description"
          content="Manufacturers of corrugated boxes, boards, rolls, printing boxes and offset printed boxes. Quality packaging solutions by Sri Andal Cartons, Erode."
        />
      </Helmet>

      <BootstrapHomeCarousel />

      <section className="py-5 bg-white">
        <Container>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-3 flex-wrap">
                <div className="badge rounded-pill badge-brand px-3 py-2">Sri Andal Cartons</div>
                <div className="text-muted" style={{ fontWeight: 800 }}>
                  Quality Corrugated Packaging Solutions
                </div>
              </div>

              <h1 className="mt-3" style={{ color: '#0b3a63', fontWeight: 1000 }}>
                Sri Andal Cartons
              </h1>

              <p className="mt-3" style={{ color: '#223', maxWidth: 680, lineHeight: 1.8 }}>
                Quality Corrugated Packaging Solutions for Corrugated Boxes, Corrugated Boards, Corrugated Rolls,
                Printing Boxes, and Offset Printing Boxes—built to protect products and strengthen your brand.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button as={Link} to="/contact" className="btn-brand-yellow px-4 py-2">
                  Contact Us
                </Button>
                <a
                  href="https://wa.me/918807371680"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-brand px-4 py-2"
                >
                  WhatsApp Now
                </a>
              </div>

              <div className="mt-5">
                <h3 className="section-title">Company Overview</h3>
                <p className="text-muted mb-0">
                  We manufacture corrugated packaging with consistent quality, on-time delivery, and reliable printing support.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="p-4" style={{ border: '1px solid rgba(11,58,99,.15)', borderRadius: 14 }}>
                <h3 className="section-title mb-3">Why Choose Us</h3>
                <ul className="list-unstyled text-muted" style={{ lineHeight: 1.9 }}>
                  <li>✔ Quality control at each stage</li>
                  <li>✔ Custom packaging solutions</li>
                  <li>✔ Strong and safe corrugated protection</li>
                  <li>✔ Bulk & timely supply</li>
                </ul>

                <div className="mt-4">
                  <h3 className="section-title">Manufacturing Excellence</h3>
                  <p className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
                    Process-focused production for consistent output, clean printing, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="py-5"
        style={{ background: 'linear-gradient(180deg, rgba(255,216,77,.20), rgba(11,58,99,.04))' }}
      >
        <Container>
          <Row className="g-4">
            {[
              { label: 'Quality Manufacturing', value: 'Strong Control' },
              { label: 'Custom Packaging Solutions', value: 'Tailored Output' },
              { label: 'Timely Delivery', value: 'On-Time Dispatch' },
              { label: 'Customer Satisfaction', value: 'Long-Term Trust' }
            ].map((s, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{ background: '#fff', borderRadius: 16, border: '1px solid rgba(11,58,99,.10)' }}
                >
                  <Card.Body>
                    <div className="badge badge-brand rounded-pill px-3 py-2">{s.label}</div>
                    <div className="mt-3" style={{ fontWeight: 1000, color: '#0b3a63', fontSize: 22 }}>
                      {s.value}
                    </div>
                    <div className="text-muted mt-1">Packaging excellence you can rely on</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light bg-gradient">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="section-title">Ready for Corrugated Solutions?</h2>
              <p className="text-muted">Send your requirements and we’ll respond quickly.</p>
            </Col>
            <Col lg={6} className="text-lg-end">
              <div className="d-flex justify-content-lg-end gap-3 flex-wrap">
                <Button as={Link} to="/products" className="btn-brand px-4 py-2">
                  Explore Products
                </Button>
                <a
                  href="https://wa.me/918807371680"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-brand-yellow px-4 py-2"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

