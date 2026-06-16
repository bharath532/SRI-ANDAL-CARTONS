import React from 'react';

export default function WhatsAppButtonInline({ className = '', message = '' }) {
  const phone = '918807371680';
  const link = message
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phone}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={{ textDecoration: 'none', display: 'inline-flex' }}
    >
      WhatsApp
    </a>
  );
}

