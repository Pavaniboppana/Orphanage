import React from 'react';
import { Card, Form, Button, Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <Container className="my-4">
        {/* Headings */}
        <h1 className="text-center mb-3">CONTACT US</h1>
        <h4 className="text-center mb-4">OUR CONTACT DETAILS</h4>

        {/* Contact Details Card */}
        <Card className="p-4 mb-5">
          <Row className="mb-3">
            <Col md={1}>📞</Col>
            <Col>
              +91 91213 33523, +91 96768 16044 <br />
              +91 91213 33542, +91 91213 33543
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={1}>📧</Col>
            <Col>
              ppreddytrust@gmail.com <br />
              www.ppreddyretirementhomes.org
            </Col>
          </Row>

          <Row>
            <Col md={1}>📍</Col>
            <Col>
              RCI Road, Mallapur (V), Near Balapur, Balapur (M), R.R. Dist,<br />
              Greater Hyderabad, TS, India. 500005
            </Col>
          </Row>
        </Card>

        {/* Form Section */}
        <h3 className="text-center mb-4">Send Us a Message</h3>
        <Card style={{ maxWidth: '500px' }} className="mx-auto p-3">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message..." />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Contact;
