import React, { useState, useEffect } from 'react';

function Cart({
  products,
  cartItems,
  setCartItems,
  cartTotal,
  setCartTotal,
  stock,
  setStock,
  setShowSearch,
  stripeToken,
}) {
  // Stripe (taken from their API)
  const [stripe, setStripe] = useState(null);
  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe(stripeToken));
    }
  }, [stripeToken]);
  function checkout() {
    stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: cartItems.map((item, i) => ({
        price: item.stripePrice,
        quantity: item.quantity,
      })),
      successUrl: 'http://localhost:3000/thanks',
      cancelUrl: 'http://localhost:3000/',
    });
  }
  // Stripe

  function deleteItem(i) {
    // Splice out the item from the cart array
    let newCart = [...cartItems];
    newCart.splice(i, 1);
    setCartItems(newCart);
  }

  function clearCart() {
    // Since this is not actually updating a db anywhere, this has to be thought of as a 'single-session' ecommerce site, instead of 'multi-session'
    // Therefore we are just setting back the stock to the original numbers
    setStock([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
    setCartItems([]);
  }

  function updateStock(i, n) {
    // Take in the stock array, then add 1 to the stock for whichever item was removed from the cart
    const updatedStock = [...stock];
    updatedStock[i] = updatedStock[i] + cartItems[n].quantity;
    console.log(updatedStock);
    setStock(updatedStock);
  }

  setShowSearch(false);

  console.log(cartItems.length);
  if (cartItems.length === 0) {
    // If cartItems is empty, display custom page
    return (
      <div className='cartContainer'>
        <div className='card'>
          <div className='card-header' id='cartHeader'>
            Your Cart
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item' id='emptyCartNotif'>
              Your cart is empty! No items to display.
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    // Otherwise display the items in the cart
    return (
      <div className='cartContainer'>
        <div className='card'>
          <div className='card-header' id='cartHeader'>
            Your Cart
          </div>
          <ul className='list-group list-group-flush'>
            {cartItems.map((item, i) => {
              return (
                <li className='list-group-item' key={i}>
                  <p>{cartItems[i].name}</p>
                  <p>Quantity: {cartItems[i].quantity}</p>
                  <p>${cartItems[i].price} (each)</p>
                  <button
                    className='btn btn-link'
                    id='deleteItem'
                    onClick={() => {
                      // Call some functions when item is deleted
                      deleteItem(i);
                      updateStock(cartItems[i].sku, i);
                      setCartTotal(
                        cartTotal - cartItems[i].price * cartItems[i].quantity
                      );
                    }}
                  >
                    <svg
                      className='bi bi-x-circle'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
            <li className='list-group-item' id='cartTotal'>
              <strong>Total: ${cartTotal}</strong>
            </li>
            <div className='card-footer'>
              <button
                className='btn btn-danger'
                onClick={() => {
                  // Clear the cart and reset the total
                  clearCart();
                  setCartTotal(0);
                }}
              >
                Clear Cart
              </button>
              <button
                className='btn btn-success'
                onClick={() => {
                  // Go to stripe checkout
                  checkout();
                }}
              >
                Checkout
              </button>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
