import React from "react";
import ProductCardDisplay from "../Components/ProductCardDisplay";

function Home({
  products,
  cartItems,
  setCartItems,
  cartTotal,
  setCartTotal,
  show,
  setShow,
  toastBody,
  setToastBody,
  stock,
  setStock,
  setShowSearch,
}) {
  function updateStock(i) {
    // Decrease the stock when an item is added to the cart
    const updatedStock = [...stock];
    updatedStock[i] = updatedStock[i] - 1;
    console.log(updatedStock);
    setStock(updatedStock);
  }

  function addToCart(i) {
    let searchCounter = 0;

    if (cartItems.length === 0) {
      // If no items in cart, add item like normal

      // console.log('product ' + products[i].name);
      // console.log('no items in cart');
      setCartItems(cartItems.concat(products[i]));
    }

    cartItems.forEach((item, n) => {
      // Iterate thru the cartItems array and see if a duplicate is added, if we're adding a duplicate, increase a search counter and the quantity
      if (item.name === products[i].name) {
        // console.log('item ' + item.name);
        // console.log('product ' + products[i].name);
        // console.log(products[i].name + ' is already in cart');
        item.quantity += 1;
        searchCounter += 1;
      } else {
        // console.log(products[i].name + ' is not already in cart');
        // setCartItems(cartItems.concat(products[i]));
      }
    });

    if (searchCounter === 0) {
      // If this is the first instance of an item getting added, add it to cart
      // console.log(products[i].name + ' is not already in cart');
      setCartItems(cartItems.concat(products[i]));
    }

    // setCartItems(cartItems.concat(tempProduct));
    setCartTotal(cartTotal + products[i].price);
  }

  setShowSearch(true); // Allow the search bar to be shown on this screen

  return (
    <div>
      <ProductCardDisplay
        products={products}
        setToastBody={setToastBody}
        addToCart={addToCart}
        setShow={setShow}
      />
    </div>
  );
}

export default Home;
