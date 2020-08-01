import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const ProductAddView = (props) => {
  return (
    <Form>
      <Form.Group controlId="formGridName">
        <Form.Label>Product Name:</Form.Label>
        <Form.Control placeholder="Peppers!" />
      </Form.Group>

      <Form.Group  controlId="formGridPassword">
        <Form.Label>Description:</Form.Label>
        <Form.Control placeholder="What is it" />
      </Form.Group>

      <Form.Group controlId="formGridHeat">
        <Form.Label>Heat:</Form.Label>
        <Form.Control placeholder="Scoville units" />
      </Form.Group>

      <Form.Group controlId="formGridFlavor">
        <Form.Label>Flavor:</Form.Label>
        <Form.Control placeholder="Carolina reapers?" />
      </Form.Group>

      <Form.Group controlId="formGridPrice">
        <Form.Label>Price:</Form.Label>
        <Form.Control placeholder="$$" />
      </Form.Group>

      <Form.Group controlId="formGridImage">
        <Form.Label>Image URL:</Form.Label>
        <Form.Control placeholder="this ones obvious" />
      </Form.Group>

      <Form.Group controlId="formGridStock">
        <Form.Label>Stock Quantity:</Form.Label>
        <Form.Control placeholder="Cuantos" />
      </Form.Group>

      <Form.Group controlId="formGridStripePrice">
        <Form.Label>Stripe Price:</Form.Label>
        <Form.Control placeholder="Stripe price key thing" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProductAddView;
