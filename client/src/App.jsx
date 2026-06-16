import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';



export default function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

