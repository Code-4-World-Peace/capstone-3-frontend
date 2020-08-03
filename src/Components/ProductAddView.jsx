import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductAddView = (props) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [heat, setHeat] = useState('');
  const [flavor, setFlavor] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [tag, setTag] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stripePrice, setStripePrice] = useState('');

  return (
    <Form>
      <Form.Group controlId='formGridName'>
        <Form.Label>Product Name:</Form.Label>
        <Form.Control
          placeholder='Peppers!'
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridPassword'>
        <Form.Label>Description:</Form.Label>
        <Form.Control
          placeholder='What is it'
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridHeat'>
        <Form.Label>Heat:</Form.Label>
        <Form.Control
          placeholder='Scoville units'
          onChange={(e) => setHeat(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridFlavor'>
        <Form.Label>Flavor:</Form.Label>
        <Form.Control
          placeholder='Carolina reapers?'
          onChange={(e) => setFlavor(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridPrice'>
        <Form.Label>Price:</Form.Label>
        <Form.Control
          placeholder='$$'
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridImage'>
        <Form.Label>Image URL:</Form.Label>
        <Form.Control
          placeholder='this ones obvious'
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridImage'>
        <Form.Label>Tag:</Form.Label>
        <Form.Control
          placeholder="you're it"
          onChange={(e) => setTag(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridStock'>
        <Form.Label>Stock Quantity:</Form.Label>
        <Form.Control
          placeholder='Cuantos'
          onChange={(e) => setStockQuantity(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='formGridStripePrice'>
        <Form.Label>Stripe Price:</Form.Label>
        <Form.Control
          placeholder='Stripe price key thing'
          onChange={(e) => setStripePrice(e.target.value)}
        />
      </Form.Group>

      <Button
        variant='primary'
        type='submit'
        onClick={() => {
          console.log(
            productName,
            description,
            heat,
            flavor,
            price,
            image,
            tag,
            stockQuantity,
            stripePrice
          );

          props.addProduct(
            productName,
            description,
            heat,
            flavor,
            price,
            image,
            tag,
            stockQuantity,
            stripePrice
          );
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ProductAddView;
