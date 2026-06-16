import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import FloatingWhatsApp from './floating/FloatingWhatsApp.jsx';
import ScrollToTop from './utils/ScrollToTop.jsx';
import Footer from './Footer.jsx';
import LoadingOverlay from './utils/LoadingOverlay.jsx';


export default function SiteLayout() {
  return (
    <>
      <LoadingOverlay />
      <Navbar bg="white" expand="lg" sticky="top" className="site-navbar border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            <span className="brand-mark" />
            Sri Andal Cartons
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-lg-3">
              <Nav.Link as={Link} to="/admin" className="admin-link">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
}

