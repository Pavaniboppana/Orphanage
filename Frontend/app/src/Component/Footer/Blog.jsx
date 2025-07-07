import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardData from './Blog.json';

const Blog = () => {
  return (
    <>
      <h1 className='text-center'>This is Blog Page</h1>

      <Container className="my-4">
        <Row className="g-4">
          {cardData.map((item) => (
            <Col key={item.id} md={6} lg={4}>
              <Card style={{ width: '100%', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                <Card.Img variant="top" src={item.image} style={{ padding: '10px', borderRadius: '10px' }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Row>
                    <Col><small>{item.leftText}</small></Col>
                    <Col className="text-end"><small>{item.rightText}</small></Col>
                  </Row>
                  <Card.Text className="mt-2">
                    {item.description}
                  </Card.Text>
                  <Button variant="primary" href={item.link}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>



    </>
  );
};

export default Blog;
