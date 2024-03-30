import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Property({ data }) {
  const { Title, Text, Image } = data.Body;

  console.log(data);
  return (
    <Card style={{ width: '90%', background: 'transparent' }}>
      <Card.Img variant="top" src={Image} style={{ height: 200 }} className="img-fluid" />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text style={{ color: 'white' }}>
          {Text}
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Property;
