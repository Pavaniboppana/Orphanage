import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardInfo from '../Footer/Blog.json';


const Home = () => {

  // Inside the component
const navigate = useNavigate();// ✅ Required for navigation

const handleGoToBlog = () => {
  navigate('/blog');  // ✅ Navigates to /blog
};


const handleReadMore = () => {
  navigate('link');  // ✅ Navigates to /link
};


  return (
<>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://media.istockphoto.com/id/1180917270/photo/male-nurse-home-caregiver-helping-senior-woman-relaxing-on-bed.jpg?s=612x612&w=0&k=20&c=FJFHxxCOUABYD8X45TRnFvIUgKyGTSNF3y7odagbTuI="
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE57qhzWx1E8GAxSEQPn8REndhOum6SJ7zog&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkphRaXkNPVHEadameyCNiLFctHvBfmvegqw&s"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<p>hello</p>



<h1 className='text-center'>Our Blogs</h1>
<Container className="my-4">
      <Row className="g-4">
        {cardInfo.map((info) => (
          <Col key={info.id} md={4}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={info.image} />
              <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                 <Row>
                    <Col><small>{info.leftText}</small></Col>
                    <Col className="text-end"><small>{info.rightText}</small></Col>
                  </Row>
                   <div className="text-center mt-4">
        <Button variant="primary" onClick={() => handleReadMore(info.link)}>
          Readmore
        </Button>
      </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>



      {/* Button Below Cards */}
      <div className="text-center mt-4">
        <Button variant="success" onClick={handleGoToBlog}>
          Go to Blog Page
        </Button>
      </div>
    </Container>
</>
  )
}

export default Home

