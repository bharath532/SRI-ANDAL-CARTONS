import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function load() {
            try {
                const res = await axios.get(`${API_BASE}/api/gallery/images`);
                if (mounted) setImages(res.data.images || []);
            } catch {
                // ignore
            } finally {
                if (mounted) setLoading(false);
            }
        }
        load();
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Gallery | Sri Andal Cartons</title>
                <meta name="description" content="Sri Andal Cartons gallery of corrugated packaging and printing work." />
            </Helmet>

            <Container className="py-5">
                <h1 className="section-title fw-bold mb-4">Gallery</h1>

                {loading ? (
                    <div className="d-flex justify-content-center py-5">
                        <Spinner animation="border" variant="warning" />
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-muted" style={{ lineHeight: 1.8 }}>
                        Gallery images will appear here after admin uploads.
                    </div>
                ) : (
                    <Row className="g-3">
                        {images.map((img) => (
                            <Col key={img._id} xs={6} md={4} lg={3}>
                                <div className="rounded-4 overflow-hidden" style={{ border: '1px solid rgba(11,58,99,.12)' }}>
                                    <img
                                        className="img-cover"
                                        src={img.imageUrl}

                                        alt="Gallery"
                                        style={{ width: '100%', height: 180, objectFit: 'cover' }}
                                        loading="lazy"
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    );
}

