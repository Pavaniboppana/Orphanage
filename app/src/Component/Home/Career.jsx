import React from 'react'
import {  Container, Row, Col , Card , Button} from "react-bootstrap";
import { cardData } from "./Component/Home/Career.json";

const Career = () => {
//    const cardData = data.cards;
  return (
   <>

<Container className="mt-4">
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} xs={12} sm={6} md={4} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={card.image} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button
                  variant="primary"
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  
 
   </>
  )
}

export default Career