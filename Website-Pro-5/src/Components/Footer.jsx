import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import MangoPassion from "../assets/asset 61.png";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white pt-5">
      {/* Newsletter Section */}
      <Container className="mb-5 d-flex flex-column flex-md-row justify-content-between" style={{padding:"0px 0px 90px 0px"}}>
        <div>
          <h2 className="footer-title">Join Our Mailing List</h2>
          <p className="footer-subtitle">our newsletter</p>
        </div>
        <div>
          <p className="footer-desc">
            Sign up to our newsletter today and get 10% off your very first online<br />
            order with Lebagol.
          </p>
          <Form className="sucribe d-flex justify-content-center rounded-pill mt-3 position-relative flex-nowrap h-25">
            <Form.Control
              type="email"
              placeholder="Enter your email..."
              className="footer-input rounded-pill"
            />
            <Button className="sucribe-btn footer-subscribe-btn position-absolute bg-danger rounded-pill h-100">
              → Subscribe
            </Button>
          </Form>
        </div>
      </Container>

      <hr className="footer-divider m-auto" style={{maxWidth:"80%"}} />

      {/* Contact Info Section */}
      <Container className="Contact-Info pb-4">
        <Row className="text-center text-md-start">
          <Col md={3} className="mb-4 mb-md-0">
            <h3 className="footer-brand">Lebagol</h3>
            <div className="d-flex align-items-center">
              <p className="mt-3">Follow Us:</p>
              <div className="social-icons ms-2 mt-0">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaPinterestP />
                <FaYoutube />
              </div>
            </div>
          </Col>

          <Col md={3} className="mb-4 mb-md-0 footer-divider-col">
            <h5 className="footer-heading">Call Us Now!</h5>
            <p className="footer-bold">+1834 123 456 789</p>
            <p>support1@example.com</p>
          </Col>

          <Col md={3} className="mb-4 mb-md-0 footer-divider-col">
            <h5 className="footer-heading">Find Our Store</h5>
            <p>
              5609 E Sprague Ave, Spokane<br />
              Valley, WA 99212, USA
            </p>
          </Col>

          <Col md={3}>
            <h5 className="footer-heading align-aitems-center">Opening Hours</h5>
            <p>
              Monday – Sunday<br />
              9:00 am to 11:30pm
            </p>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <Container className="footer-bottom mt-4 pt-4 d-flex justify-content-between flex-column flex-md-row align-items-center">
        <p>© 2024 <strong>Lebagol</strong>. All Rights Reserved</p>
        <div className="payment-icons">
          <img src={MangoPassion} alt="Amex" />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
