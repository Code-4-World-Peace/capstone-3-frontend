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

    // useEffect(() => {
    //   setDisplayProduct();
    // }, []);

    const displayProduct = () => {
        return products.map((product) => {
            console.log(product);
            return (
                <div className='card' key={product.sku} id={product.sku}>
                    {Object.keys(product).map((productProp) => {
                        console.log(productProp)
                        switch (productProp) {
                            case "name":
                                console.log(productProp);
                                console.log(productProp.name);
                                return <h5 className='card-header'>{product.name}</h5>;

                            case "stock":
                                return <p className='card-text'>Stock: {product.stock}</p>;

                            case "sku":
                                return <p className='card-text'>
                                    <small>SKU: 00{product.sku}</small>
                                </p>;

                            default:
                                return '';
                        }
                    }).join()}
                    <button
                        className='btn btn-primary'
                        onClick={() => {
                            if (product.stock > 0) {
                                // Won't let user add item to cart if no stock is left
                                addToCart(product);
                                setToastBody(product.name);
                                setShow(true);
                            }
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            );
        }).join();
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
