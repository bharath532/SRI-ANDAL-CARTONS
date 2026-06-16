import React, { useEffect, useState } from 'react';

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;
  return (
    <div className="loading-overlay" aria-live="polite" aria-busy="true">
      <div className="spinner-border text-warning" role="status" />
      <div className="mt-3 text-center text-white fw-bold">Loading…</div>
    </div>
  );
}

