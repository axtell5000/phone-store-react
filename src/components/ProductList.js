import React, { Component, Fragment } from 'react';

import { storeProducts } from '../data';
import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {

  state={
    products: storeProducts
  };

  render() {
    console.log(this.state.storeProducts);
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
          </div>
        </div>
      </Fragment>
    );
  }
}
