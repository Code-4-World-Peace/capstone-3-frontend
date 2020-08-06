import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductCardDisplay = (props) => {
  const { stock, products, addToCart, setShow, setToastBody } = props;
  const [displayBody] = useState([]);

  //   const setDisplayProduct = () => {
  //     products.map((product) => {
  //       console.log(product);
  //       displayBody.push(
  //         <>
  //           <h5 className='card-header'>{product.name}</h5>
  //           <p className='card-text'>Stock: {product.stock}</p>
  //           <p className='card-text'>
  //             <small>SKU: 00{product.sku}</small>
  //           </p>
  //         </>
  //       );

  //       return '';
  //     });
  //   };

  useEffect(() => {
    setDisplayProduct();
  }, []);

  const displayProduct = () => {
    products.map((product) => {
      console.log(product);
      return (
        <div className='card' key={products[i].sku} id={products[i].sku}>
          {product.map((productProp) => {
            switch (productProp) {
              case name:
                console.log(productProp);
                console.log(productProp.key);
                <h5 className='card-header'>{name}</h5>;
                break;
              case stock:
                <p className='card-text'>Stock: {stock[i]}</p>;
                break;
              case sku:
                <p className='card-text'>
                  <small>SKU: 00{products[i].sku}</small>
                </p>;
                break;
            }
          })}
          <button
            className='btn btn-primary'
            onClick={() => {
              if (stock[i] >= 1) {
                // Won't let user add item to cart if no stock is left
                addToCart(i);
                setToastBody(products[i].name);
                setShow(true);
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      );
    });
  };

  //   setDisplayProduct();

  return (
    <div className='productContainer'>
      <div id='invalidSearch' style={{ display: 'none' }}>
        No Search results found!
      </div>

      {displayProduct()}
    </div>
  );
};

export default ProductCardDisplay;
