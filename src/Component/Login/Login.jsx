import React from 'react';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Login Page</h2>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="p-4 shadow">
            <Form>

            
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Remember me" />
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot password?
                </Link>
              </div>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>

              <div className="text-center mb-2">or login with</div>

              <div className="d-grid gap-2 mb-3">
                <Button variant="danger" type="button">Google</Button>
                <Button variant="primary" type="button">Facebook</Button>
                <Button variant="info" type="button" className="text-white">LinkedIn</Button>
              </div>

              <div className="text-center">
                <p>
                  Don't have an account? <Link to="/signup">Signup</Link>
                </p>
                <p>
                  <Link to="/home">Back to Home</Link>
                </p>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
