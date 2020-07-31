import React from 'react';

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
              <p className='card-text'>Stock: {stock[i]}</p>
              <p className='card-text'>
                <small>SKU: 00{products[i].sku}</small>
              </p>
              <button
                className='btn btn-primary'
                onClick={() => {
                  if (stock[i] >= 1) {
                    // Won't let user add item to cart if no stock is left
                    addToCart(i);
                    updateStock(i);
                    setToastBody(products[i].name);
                    setShow(true);
                  }
                }}
              >
                Add to Cart
              </button>
              <p className='card-text'>
                <small>Tags: {products[i].tag} </small>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
