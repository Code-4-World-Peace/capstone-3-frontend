import React, { useState } from 'react';
import axios from 'axios';
import ProductAddView from '../Components/ProductAddView';

const Inventory = (props) => {
  const [products, setProducts] = useState([]);
  const [productView, setProductView] = useState(false);

  const addProduct = (
    name,
    description,
    heat,
    flavor,
    price,
    image,
    tag,
    stockQty,
    stripePrice
  ) => {
    const params = {
      name: name,
      description: description,
      heat: heat,
      flavor: flavor,
      price: price,
      image: image,
      tag: tag,
      stockQty: stockQty,
      stripePrice: stripePrice,
    };

    axios
      .post('http://Capstone3-env-1.eba-zhpmpeyi.us-east-2.elasticbeanstalk.com/products', params)
      .then((res) => {
        console.log(res);
        alert('Product added successfully');
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <button onClick={() => setProductView(!productView)}>Add Product</button>
      {productView ? (
        <div>
          <ProductAddView addProduct={addProduct} />
        </div>
      ) : null}
    </div>
  );
};

export default Inventory;
