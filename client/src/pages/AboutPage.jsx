import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Sri Andal Cartons</title>
        <meta name="description" content="Learn about Sri Andal Cartons — mission, vision and owner details." />
      </Helmet>

      <Container className="py-5">
        <h1 className="section-title">About Sri Andal Cartons</h1>
        <p className="text-muted mt-3" style={{ maxWidth: 820 }}>
          Sri Andal Cartons manufactures high-quality corrugated packaging solutions designed for strength,
          reliability and excellent printing.
        </p>

        <Row className="g-4 mt-4">
          <Col lg={7}>
            <Card className="border-0 shadow-sm" style={{ borderRadius: 16 }}>
              <Card.Body className="p-4">
                <h3 className="section-title">Company Story</h3>
                <p className="text-muted">
                  Our focus is on consistent production and customer satisfaction—delivering corrugated boxes, boards,
                  rolls, printing cartons and offset printed packaging for businesses across the region.
                </p>

                <div className="mt-4">
                  <h4 className="section-title">Mission</h4>
                  <p className="text-muted mb-0">Provide quality corrugated packaging solutions with reliable supply and strong performance.</p>
                </div>

                <div className="mt-4">
                  <h4 className="section-title">Vision</h4>
                  <p className="text-muted mb-0">Become a trusted name in industrial packaging by combining excellence in manufacturing and printing.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="border-0 shadow-sm" style={{ borderRadius: 16 }}>
              <Card.Body className="p-4">
                <h3 className="section-title">Owner Information</h3>
                <ListGroup variant="flush" className="mt-3">
                  <ListGroup.Item className="border-0 px-0">
                    <strong>Owner:</strong> M. Sankarsanthosh B.E.
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 px-0">
                    <strong>Business:</strong> Manufacturers of corrugated packaging
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 px-0">
                    <strong>GSTIN:</strong> 33AHPPL0132N1ZA
                  </ListGroup.Item>
                </ListGroup>

                <div className="mt-4">
                  <div className="badge badge-brand rounded-pill px-3 py-2">Quality • Strength • Printing</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

