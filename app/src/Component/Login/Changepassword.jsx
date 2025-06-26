import React from 'react'

const Changepassword = () => {
  return (
   <>
      <div className="d-flex justify-content-center align-items-center my-5">
      <Card style={{ width: '22rem' }} className="p-3 shadow">
        <Card.Body>
          <Card.Title className="text-center mb-3">Change Password?</Card.Title>
          <Card.Text className="text-center mb-4">
            Enter your email address and we will send you instructions to reset your password.
          </Card.Text>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Reset Link
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
   </>
  )
}

export default Changepassword