import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Changepassword = () => {
  return (
   <>
      <div className="d-flex justify-content-center align-items-center my-5">
      <Card style={{ width: '22rem' }} className="p-3 shadow">
        <Card.Body>
          <Card.Title className="text-center mb-3">Change Password?</Card.Title>
          <Card.Text className="text-center mb-4">
            Enter your current password and your new password.
          </Card.Text>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="Current password" placeholder="Current password" />
            </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="New password" placeholder="New password" />
            </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="New password" placeholder="Enter New password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
             Change Password
            </Button>
             <div className="text-center mt-3">
              <p>
                  <Link to="/resetpassword">Reset password</Link>
                </p>
                </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
   </>
  )
}

export default Changepassword