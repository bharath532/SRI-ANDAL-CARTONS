import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  const phone = '8807371680';
  return (
    <footer className="mt-5" style={{ background: '#0b3a63', color: '#fff' }}>
      <Container className="py-5">
        <Row className="g-4">
          <Col md={4}>
            <div style={{ fontWeight: 900, fontSize: 18 }}>Sri Andal Cartons</div>
            <div className="mt-2" style={{ opacity: 0.95 }}>
              Quality Corrugated Packaging Solutions.
            </div>
            <div className="mt-3" style={{ opacity: 0.95 }}>
              <strong>Phone/WhatsApp:</strong> <a href={`https://wa.me/918807371680`} style={{ color: '#ffd84d' }}>+91 {phone}</a>
            </div>
            <div style={{ opacity: 0.95 }}>
              <strong>Email:</strong> <a href="mailto:sriandalcartonserode@gmail.com" style={{ color: '#ffd84d' }}>sriandalcartonserode@gmail.com</a>
            </div>
          </Col>

          <Col md={4}>
            <div style={{ fontWeight: 900, fontSize: 16 }}>Quick Links</div>
            <div className="mt-3 d-flex flex-column gap-2">
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
              <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
              <Link to="/gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</Link>
              <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
            </div>
          </Col>

          <Col md={4}>
            <div style={{ fontWeight: 900, fontSize: 16 }}>Address</div>
            <div className="mt-3" style={{ opacity: 0.95, lineHeight: 1.55 }}>
              625/2B, Mangattu Valasu,<br />
              Kavundichi Palayam (PO),<br />
              Vellode (Via),<br />
              Near The Indian Public School Back Side,<br />
              Erode - 638112
            </div>
            <div className="mt-3" style={{ opacity: 0.95 }}>
              <strong>GSTIN:</strong> 33AHPPL0132N1ZA
            </div>
          </Col>
        </Row>

        <Row className="mt-4 pt-4 border-top border-white border-opacity-25 align-items-center">
          <Col md={6}>
            <div style={{ opacity: 0.9 }}>© {new Date().getFullYear()} Sri Andal Cartons. All rights reserved.</div>
          </Col>
          {/* <Col md={6} className="text-md-end mt-3 mt-md-0">
            <div style={{ opacity: 0.9 }}>Built for industrial packaging excellence.</div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}


