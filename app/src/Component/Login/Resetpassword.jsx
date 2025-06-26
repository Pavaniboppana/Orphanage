import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Resetpassword = () => {
  return (
     <div className="d-flex justify-content-center align-items-center my-5">
      <Card style={{ width: '22rem' }} className="p-3 shadow">
        <Card.Body>
          <Card.Title className="text-center mb-3">Reset Your Password?</Card.Title>
          <Card.Text className="text-center mb-4">
Strong passwords include numbers,letters, and punctuation marks.
          </Card.Text>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter new password</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm new password</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
         Reset password
            </Button>
             <div className="text-center mt-3">
              <p>
                  <Link to="/login">Back to Login</Link>
                </p>
                </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Resetpassword