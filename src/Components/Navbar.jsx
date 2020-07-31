import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Navbar({ cartItems, products, setProducts, showSearch }) {
  function getTotalCartItems() {
    let counter = 0;
    cartItems.forEach((item, n) => {
      counter += item.quantity;
    });
    return counter;
  }

  return (
    <Fragment>
      <nav
        className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'
        style={{ zIndex: 1 }}
      >
        <span className='navbar-brand mb-0 h1' id='navHeader'>
          <Link to='/' id='homeLink'>
            Badger's Pepper Products
          </Link>
        </span>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <Search
            products={products}
            setProducts={setProducts}
            showSearch={showSearch}
          />
          <Link to='/cart' id='cartLink'>
            <button className='btn btn-outline-info my-2 my-sm-0'>
              Shopping Cart{' '}
              <span className='badge badge-dark'>({cartItems.length})</span>
            </button>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
