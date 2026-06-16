import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const products = [
    {
        title: 'Corrugated Boxes',
        key: 'corrugated-boxes',
        image: '/Products/corrugated-boxes.jpg',
        desc: 'Durable corrugated packaging for safe transit and strong stacking.'
    },
    {
        title: 'Corrugated Boards',
        key: 'corrugated-boards',
        image: '/Products/corrugated-2-boxes.jpg',
        desc: 'Quality boards manufactured for consistent performance and strength.'
    },
    {
        title: 'Corrugated Rolls',
        key: 'corrugated-rolls',
        image: '/Products/corrugated-rolls.jpg',
        desc: 'Roll formats for efficient production workflows and flexible packaging needs.'
    },
    {
        title: 'Printed Cartons',
        key: 'printed-cartons',
        image: '/Products/Packageing.jpg',
        desc: 'Printed cartons designed to enhance brand visibility and customer experience.'
    },
    {
        title: 'Offset Printing Boxes',
        key: 'offset-printing-boxes',
        image: '/Products/Offset Printing Boxes.jpg',
        desc: 'Offset printed packaging with premium finishing and clear branding.'
    }
];

export default function ProductsPage() {
    return (
        <>
            <Helmet>
                <title>Products | Sri Andal Cartons</title>
                <meta
                    name="description"
                    content="Corrugated boxes, corrugated boards, corrugated rolls, printed cartons and offset printed boxes by Sri Andal Cartons."
                />
            </Helmet>

            <Container className="py-5">
                <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
                    <div>
                        <h1 className="section-title fw-bold mb-2">Products</h1>
                        <div className="text-muted">Manufacturers of corrugated packaging and printing solutions</div>
                    </div>
                </div>

                <Row className="g-4 mt-2">
                    {products.map((p) => (
                        <Col key={p.key} md={6} lg={4}>
                            <Card className="h-100 shadow-sm border-0" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                                <Card.Img
                                    variant="top"
                                    src={p.image}
                                    alt={p.title}
                                    style={{
                                        height: 220,
                                        objectFit: 'cover'
                                    }}
                                />
                                <Card.Body>
                                    <Card.Text style={{ opacity: 0.95, lineHeight: 1.7 }}>{p.desc}</Card.Text>
                                    <div className="d-flex gap-2 mt-3 flex-wrap">
                                        <Button as="a" href="/contact" className="btn-brand px-3">
                                            Inquiry
                                        </Button>
                                        <Button
                                            as="a"
                                            href="https://wa.me/918807371680"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-brand-yellow btn px-3"
                                        >
                                            WhatsApp
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

