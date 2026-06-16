import React from 'react';
import { Button } from 'react-bootstrap';

export default function ProductsInquiryCard({ title }) {
  const waMsg = `Hello Sri Andal Cartons,\n\nI am interested in: ${title}.\n\nPlease share pricing and lead time.`;
  const waLink = `https://wa.me/918807371680?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="d-flex gap-2 mt-3 flex-wrap">
      <Button as="a" href="/contact" className="btn-brand px-3">
        Inquiry
      </Button>
      <Button as="a" href={waLink} target="_blank" rel="noreferrer" className="btn-brand-yellow px-3">
        WhatsApp
      </Button>
    </div>
  );
}

