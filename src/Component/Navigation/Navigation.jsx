import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="px-5 m-auto">
      <Container fluid>
        {/* Logo or brand */}
        <Navbar.Brand href="/Home">Lonely Home</Navbar.Brand>

        {/* Toggle for small screens */}
        <Navbar.Toggle aria-controls="navbarResponsive" />

        {/* Collapsible content */}
        <Navbar.Collapse id="navbarResponsive">
          {/* Left-side navigation */}
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
         

        

            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
