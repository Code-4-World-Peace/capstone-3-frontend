import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import ThankYou from './Pages/ThankYou';
import Products from './Assets/Products.json';
import { Toast } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState(Products.products);

  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [toastBody, setToastBody] = useState('something');
  const [stock, setStock] = useState([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
  const [showSearch, setShowSearch] = useState(true);

  return (
    <Router>
      <div className='App'>
        <Navbar
          cartItems={cartItems}
          products={products}
          setProducts={setProducts}
          showSearch={showSearch}
        />
        <Toast
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
          }}
          onClose={() => setShow(false)}
          show={show}
          delay={1250}
          autohide
        >
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded mr-2'
              alt=''
            />
            <strong className='mr-auto'>Item added to cart</strong>
          </Toast.Header>
          <Toast.Body>Added {toastBody} to the cart!</Toast.Body>
        </Toast>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <Home
                  products={products}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  cartTotal={cartTotal}
                  setCartTotal={setCartTotal}
                  show={show}
                  setShow={setShow}
                  toastBody={toastBody}
                  setToastBody={setToastBody}
                  stock={stock}
                  setStock={setStock}
                  setShowSearch={setShowSearch}
                />
              )}
            />
            <Route
              exact
              path='/cart'
              render={() => (
                <Cart
                  products={products}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  cartTotal={cartTotal}
                  setCartTotal={setCartTotal}
                  stock={stock}
                  setStock={setStock}
                  setShowSearch={setShowSearch}
                  stripeToken='pk_test_l9KprKRIzCQio6b6bjTjHiFR00wLCYUJLU'
                />
              )}
            />
            <Route exact path='/thanks' component={ThankYou} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
