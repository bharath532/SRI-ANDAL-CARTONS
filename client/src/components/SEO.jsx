import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={title || 'Sri Andal Cartons'} />
      <meta property="og:description" content={description || 'Quality Corrugated Packaging Solutions'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

