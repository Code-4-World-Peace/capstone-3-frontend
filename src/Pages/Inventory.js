import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductAddView from '../Components/ProductAddView';

const Inventory = (props) => {
  const [products, setProducts] = useState([]);
  const [productView, setProductView] = useState(false);
  const [input, setInput] = useState('');

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

  const updateProduct = (name, input) => {
    const params = {
      name: name,
      stock: input,
    };

    axios
      .put(`http://localhost:8080/products/${name}`, params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => setProductView(!productView)}
      >
        Add Product
      </button>
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
              {/* <img
                src={products[i].image}
                className="card-img-top"
                alt={products[i].name}
                style={{ maxWidth: "200px", margin: "auto" }}
              /> */}
              <div className='card-body'>
                {/* <h5 className="card-title">${products[i].price}</h5> */}
                <p className='card-text'>
                  {products[i].description}
                  <br />
                  {products[i].heat}
                  <br />
                  {products[i].flavor}
                </p>
                <p className='card-text'>Current Stock: {products[i].stock}</p>
                <input
                  className='card-text'
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  id={products[i].name}
                  type='number'
                  min='0'
                  max='500'
                />
                <p className='card-text'>
                  <small>Serial No: {products[i].sku}</small>
                </p>
                <button
                  className='btn btn-primary'
                  onClick={() => {
                    if (Number(input) >= 0) {
                      updateProduct(
                        products[i].name,
                        Number(input) + Number(products[i].stock)
                      );
                    }

                    document.getElementById(`${products[i].name}`).value = '';
                  }}
                >
                  Update Product
                </button>
                <p className='card-text'>
                  {/* <small>Tags: {products[i].tag} </small> */}
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
