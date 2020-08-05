import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductCardDisplay = (props) => {
    const { stock, products, addToCart, setShow, setToastBody } = props;
    return (
        <div className='productContainer'>
            <div id='invalidSearch' style={{ display: 'none' }}>
                No Search results found!
        </div>
            {products.map((products, i) => {
                // Map thru all the products and create a card for each of them
                return (
                    <div className='card' key={products.sku} id={products.sku}>
                        <h5 className='card-header'>{products.name}</h5>
                        <img
                            src={products.image}
                            className='card-img-top'
                            alt={products.name}
                            style={{ maxWidth: '200px', margin: 'auto' }}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>${products.price}</h5>
                            <p className='card-text'>
                                {products.description}
                                <br />
                                {products.heat}
                                <br />
                                {products.flavor}
                            </p>
                            <p className='card-text'>Stock: {stock}</p>
                            <p className='card-text'>
                                <small>SKU: 00{products.sku}</small>
                            </p>
                            <button
                                className='btn btn-primary'
                                onClick={() => {
                                    if (stock >= 1) {
                                        // Won't let user add item to cart if no stock is left
                                        addToCart(i);
                                        setToastBody(products.name);
                                        setShow(true);
                                    }
                                }}
                            >
                                Add to Cart
                            </button>
                            <p className='card-text'>
                                <small>Tags: {products.tag} </small>
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductCardDisplay;
