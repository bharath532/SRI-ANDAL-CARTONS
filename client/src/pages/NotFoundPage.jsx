import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Not Found | Sri Andal Cartons</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Container className="py-5">
        <h1 className="section-title fw-bold">404</h1>
        <p className="text-muted">Page not found.</p>
      </Container>
    </>
  );
}

