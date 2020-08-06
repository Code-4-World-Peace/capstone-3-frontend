import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductAddView = (props) => {
  const [productName, setProductName] = useState('');

  return (
    <Form>
      <Form.Group controlId='formGridName'>
        <br />
        <Form.Label>Product Name:</Form.Label>
        <Form.Control
          placeholder='Peppers!'
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>

      <Button
        variant='primary'
        type='submit'
        onClick={() => {
          props.addProduct(productName);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default ProductAddView;
