import React from 'react';
import {  Card, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Signup Page</h2>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={6} lg={5}>
          <Card className="p-4 shadow">
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter password" />
              </Form.Group>

              {/* Phone number with no space between country code and number */}
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                  <Form.Select style={{ maxWidth: '110px' }} defaultValue="+91">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+81">+81</option>
                  </Form.Select>
                  <Form.Control type="tel" placeholder="Enter mobile number" />
                </InputGroup>
              </Form.Group> 


   <div className="d-flex align-items-center mb-3">
                <Form.Check type="checkbox" label=" I accept the  " />
                <Link to="/forgot-password" className="text-decoration-none">
                Terms of use
                  {/*  or terms & Conditions */}
                </Link>
                and
                 <Link to="/forgot-password" className="text-decoration-none">
                  Privacy Policy
                </Link>
              </div>

               <div className="d-grid gap-2">
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>
              </div>

            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
