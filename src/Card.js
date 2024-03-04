import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const myCard = () => {
  return (
    <CardDeck>
      <Card bg="primary" text="white">
        <Card.Body>
          <Card.Title>Card 01</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="danger" text="white">
        <Card.Body>
          <Card.Title>Card 02</Card.Title>
          <Card.Text>
            Placeholder
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg="success" text="white"> 
        <Card.Body>
          <Card.Title>Card 03</Card.Title>
          <Card.Text>
            Placeholder
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default myCard;