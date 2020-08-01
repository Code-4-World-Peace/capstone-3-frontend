import React, { useState } from "react";
import axios from "axios";
import ProductAddView from "../Components/ProductAddView";

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
    axios
      .post("/api/product", {
        name,
        description,
        heat,
        flavor,
        price,
        image,
        tag,
        stockQty,
        stripePrice,
      })
      .then((res) => {
        console.log(res);
        alert("Product added successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
        <button onClick={()=> setProductView(!productView)} >Add Product</button>
      {productView ? (
        <div>
          <ProductAddView addProduct={addProduct}/>
        </div>
      ) : null}
    </div>
  );
};

export default Inventory;
