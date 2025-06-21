import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const About = () => {
  const experts = [
    {
      name: "Dr. Gaurav Thukral",
      image: "https://www.hcah.in/media/multiDisciplinaryTeam/dr-gaurav-thukral.webp",
      description: "Expert in Cardiology with 15 years of experience.",
      role: "Chief Cardiologist"
    },
    {
      name: "Dr. Vijay J",
      image: "https://www.hcah.in/media/multiDisciplinaryTeam/dr-vijay-j.webp",
      description: "Specialist in Neurology and Brain Disorders.",
      role: "Senior Neurologist"
    },
    {
      name: "Dr. Ranjith R",
      image: "https://www.hcah.in/media/multiDisciplinaryTeam/dr-ranjith-r.webp",
      description: "Orthopedic surgeon with expertise in joint replacements.",
      role: "Lead Orthopedic Surgeon"
    },
    {
      name: "Shweta Sharma",
      image: "https://www.hcah.in/media/multiDisciplinaryTeam/shweta-sharma.webp",
      description: "Nutritionist and wellness coach.",
      role: "Head of Nutrition"
    }
  ];

  return (
    <Container className="my-5">
      <h1 className='text-center mb-3'>Meet Our Experts</h1>
      <p className='text-center mb-5'>With you, at every step of the way.</p>
      
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
        {experts.map((expert, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img 
                variant="top" 
                src={expert.image} 
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{expert.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{expert.role}</Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  {expert.description}
                </Card.Text>
                <Button variant="primary" className="mt-auto">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;