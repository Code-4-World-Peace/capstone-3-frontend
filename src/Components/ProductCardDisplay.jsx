import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductCardDisplay = (props) => {
    const { stock, products, addToCart, setShow, setToastBody } = props;
    const [displayBody] = useState([])

    useEffect(() => {
        setDisplayProduct(products)
    },[])

    const setDisplayProduct = (products) => {
        products.map((product) => {
            displayBody.push(<h5 className='card-header'>{product.name}</h5>
            <p className='card-text'>Stock: {product.stock}</p>
            <p className='card-text'><small>SKU: 00{product.sku}</small></p>
            )
        });
    }

    const displayProduct = () => {
        displayBody.map((productHTML, i) => {
            return (
                <div className='card' key={products[i].sku} id={products[i].sku}>
                    <div>{productHTML}</div>
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
            )
        })
    }



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
