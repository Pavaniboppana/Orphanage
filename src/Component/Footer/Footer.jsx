import React from 'react';
import './Footer.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutube, FaLinkedin, FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Card className='footer text-white bg-dark pt-4' style={{ minHeight: "25rem" }}>
        <Card.Header className="text-center bg-secondary text-white">
          <h4>Footer</h4>
        </Card.Header>

        <Container className="mt-4">
          <Row className="text-start">
            <Col md={3}>
              <h5>Lonely Home</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Providing care with dignity and love.</p>
            </Col>

            <Col md={2}>
              <h5>Products</h5>
              <ul className="list-unstyled">
                <li><Link to="#">Your Account</Link></li>
                <li><Link to="#">Become an Affiliate</Link></li>
                <li><Link to="#">Shopping Rates</Link></li>
                <li><Link to="#">Help</Link></li>
              </ul>
            </Col>

            <Col md={2}>
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="#">Help</Link></li>
                <li><Link to="#">FAQ</Link></li>
              </ul>
            </Col>

            <Col md={3}>
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li><FaHome /> New York, NY 10012, US</li>
                <li><IoMail /> info@example.com</li>
                <li><FaPhoneAlt /> +01 234 567 89</li>
              </ul>
            </Col>

            <Col md={2}>
              <h5>Download Now</h5>
              <a href="https://play.google.com/">
                <img src="https://static.licdn.com/aero-v1/sc/h/142qudwblp58zwmc9vkqfplug" alt="Play Store" width="120" className="mb-2" />
              </a>
              <br />
              <a href="https://www.apple.com/">
                <img src="https://static.licdn.com/aero-v1/sc/h/76yzkd0h5kiv27lrd4yaenylk" alt="App Store" width="120" />
              </a>
            </Col>
          </Row>

          <hr className="bg-light" />

          <Row className="justify-content-between align-items-center text-center mt-3">
            <Col md={6} className="mb-2 mb-md-0">
              <p className="mb-0">&copy; 2025 lonelyhome@gmail.com. All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="https://www.facebook.com"><FaFacebook /></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com"><FaInstagramSquare /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com"><FaTwitterSquare /></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com"><FaYoutube /></a></li>
                <li className="list-inline-item"><a href="https://in.linkedin.com"><FaLinkedin /></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default Footer;
