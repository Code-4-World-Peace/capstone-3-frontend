import React, { Fragment } from 'react';

function Footer() {
  return (
    <Fragment>
      <nav className='navbar fixed-bottom navbar-secondary bg-secondary'>
        <h6 style={{ margin: 'auto' }}>
          All images are intellectual property of Tyler Clements and may not be
          used without permission.
        </h6>
      </nav>
    </Fragment>
  );
}

export default Footer;
