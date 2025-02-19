import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Typography, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import './Footer.css'; // Optional: Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          {/* Company Info */}
          <Col md={4}>
            <div className="footer-about">
              <Typography variant="h6" className="text-uppercase mb-4">
                Busitron
              </Typography>
              <Typography variant="body1">
                We are a global tech company offering cutting-edge solutions to
                help you excel in your career.
              </Typography>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <div className="footer-links">
              <Typography variant="h6" className="text-uppercase mb-4">
                Quick Links
              </Typography>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="footer-link">Home</a>
                </li>
                <li>
                  <a href="#about" className="footer-link">About</a>
                </li>
                <li>
                  <a href="#services" className="footer-link">Services</a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">Contact</a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Newsletter Subscription */}
          <Col md={4}>
            <div className="footer-subscribe">
              <Typography variant="h6" className="text-uppercase mb-4">
                Subscribe to our Newsletter
              </Typography>
              <Form>
                <Form.Group controlId="formNewsletter" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-pill"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="rounded-pill"
                  type="submit"
                >
                  Subscribe
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <Typography variant="body2" className="text-white-50">
              © {new Date().getFullYear()} Busitron. All Rights Reserved.
            </Typography>
          </Col>

          <Col md={6} className="text-md-end">
            <div className="social-links">
              <IconButton href="#" aria-label="Facebook" className="text-white">
                <Facebook />
              </IconButton>
              <IconButton href="#" aria-label="Twitter" className="text-white">
                <Twitter />
              </IconButton>
              <IconButton href="#" aria-label="LinkedIn" className="text-white">
                <LinkedIn />
              </IconButton>
              <IconButton href="#" aria-label="Instagram" className="text-white">
                <Instagram />
              </IconButton>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
