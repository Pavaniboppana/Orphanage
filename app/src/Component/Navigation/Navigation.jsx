import React from 'react';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navigation = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // // Sample data to search through
  // const data = [
  //   "John Doe",
  //   "Jane Smith",
  //   "Alice Johnson",
  //   "Bob Williams",
  //   "Michael Brown",
  //   "Emily Davis"
  // ];

  // // Filter data based on search term
  // const filteredData = data.filter(item =>
  //   item.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <Navbar expand="lg" variant="light"  sticky="top" className="px-5 m-auto " style ={{backgroundColor:"violet",color:"black",fontSize:"20px",fontWeight:"600"}}>
 
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src="/Images/lonelyhome.jpeg" alt="Lonely Home"  width="150" height="80" />
        </Navbar.Brand>
        {/* 🕊️ Golden Nest */}
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
       
             <NavDropdown title="Facilities" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/food">Food</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donate">Clothes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events">Daily things</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donate">Medical</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/career">Career</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/admissions">Admissions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/donate">Donate</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
            </NavDropdown>

              {/* <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}

            {/* <Container className="mt-4">
      <Form className="d-flex mb-3">
        <Form.Control
          type="search"
          placeholder="Search names..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <ListGroup>
        {filteredData.map((name, index) => (
          <ListGroup.Item key={index}>{name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container> */}


          </Nav>
            <Nav>
               <NavDropdown title={<FaUser />} id="user-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/changepassword">Changepassword</NavDropdown.Item>
            </NavDropdown>

            {/* Additional Dropdown
  <NavDropdown title="More" id="nav-dropdown">
    <NavDropdown.Item as={Link} to="/admissions">Admissions</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/donate">Donate</NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
  </NavDropdown> */}
          </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;




   
         
        
