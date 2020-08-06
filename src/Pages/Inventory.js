import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductAddView from '../Components/ProductAddView';

const Inventory = (props) => {
  const [products, setProducts] = useState([]);
  const [productView, setProductView] = useState(false);

  useEffect(() => {
    getProducts();
  });

  const addProduct = (name) => {
    const params = {
      name: name,
    };

    axios
      .post('http://localhost:8080/products', params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getProducts = () => {
    axios
      .get('http://localhost:8080/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateProduct = (name, stock) => {
    const params = {
      stock: stock,
    };

    axios
      .put(`http://localhost:8080/products/${name}`, params)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={() => setProductView(!productView)}>Add Product</button>
      {productView ? (
        <div>
          <ProductAddView addProduct={addProduct} />
        </div>
      ) : null}
      <br />
      <br />
      <div className='productContainer'>
        <div id='invalidSearch' style={{ display: 'none' }}>
          No Search results found!
        </div>
        {products.map((product, i) => {
          // Map thru all the products and create a card for each of them
          return (
            <div className='card' key={products[i].sku} id={products[i].sku}>
              <h5 className='card-header'>{products[i].name}</h5>
              <img
                src={products[i].image}
                className='card-img-top'
                alt={products[i].name}
                style={{ maxWidth: '200px', margin: 'auto' }}
              />
              <div className='card-body'>
                <h5 className='card-title'>${products[i].price}</h5>
                <p className='card-text'>
                  {products[i].description}
                  <br />
                  {products[i].heat}
                  <br />
                  {products[i].flavor}
                </p>
                <p className='card-text'>Stock: {products[i].stock}</p>
                <p className='card-text'>
                  <small>SKU: 00{products[i].sku}</small>
                </p>
                <button className='btn btn-primary' onClick={() => {}}>
                  Update Product
                </button>
                <p className='card-text'>
                  <small>Tags: {products[i].tag} </small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;
