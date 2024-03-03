import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const myCard = () => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>
            Placeholder
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card 2</Card.Title>
          <Card.Text>
            Placeholder
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Card 3</Card.Title>
          <Card.Text>
            Placeholder
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default myCard;