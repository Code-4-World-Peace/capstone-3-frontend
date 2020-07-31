import React, { Fragment, useState } from 'react';

function Search({ products, setProducts, showSearch }) {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      // If nothing is entered
      products.forEach((product, i) => {
        // Searching the products list for exact text match, or partial match

        document.getElementById(i).style.display = 'flex';
      });
      document.getElementById('invalidSearch').style.display = 'none';
    } else {
      products.forEach((product, i) => {
        // Searching the products list for exact text match, or partial match

        document.getElementById(i).style.display = 'flex';
      });
      document.getElementById('invalidSearch').style.display = 'none';
      document.getElementById('clearSearch').style.display = 'flex';
      console.log('Searched for ' + text);
      let matchedItems = 0;
      products.forEach((product, i) => {
        // Searching the products list for exact text match, or partial match
        if (
          product.name.toLowerCase() === text.toLowerCase() ||
          product.name.toLowerCase().search(text.toLowerCase()) !== -1
        ) {
          console.log('Matched item: ' + product.name);
          matchedItems++;
        } else {
          document.getElementById(i).style.display = 'none';
        }
      });
      if (matchedItems === 0) {
        document.getElementById('invalidSearch').style.display = 'flex';
      }

      // TODO search by tags, other attributes
      //   products.forEach((product, i) => {
      //     product.tag.forEach((tag, i) => {
      //       console.log(tag);
      //     });
      //   });
    }
  };

  const onChange = (e) => setText(e.target.value);

  function resetSearch() {
    // Reset the styling on the search results, then hide the clear search button
    setText('');
    document.getElementById('clearSearch').style.display = 'none';
  }

  if (showSearch) {
    // If we're allowed to show the search bar, display it
    return (
      <Fragment>
        <form
          id='searchForm'
          onSubmit={onSubmit}
          className='form-inline mx-auto my-lg-0'
        >
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search Products'
            aria-label='Search Products'
            id='inputField'
            value={text}
            onChange={onChange}
          />
          <button className='btn btn-outline-light my-2 my-sm-0' type='submit'>
            Search
          </button>
          <button
            className='btn btn-outline-danger my-2 my-sm-0'
            style={{ marginLeft: '5px', display: 'none' }}
            id='clearSearch'
            onClick={() => {
              resetSearch();
            }}
          >
            Clear Search
          </button>
        </form>
      </Fragment>
    );
  } else {
    // Otherwise, return nothing
    return <Fragment></Fragment>;
  }
}

export default Search;
