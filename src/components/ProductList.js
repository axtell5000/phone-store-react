import React, { Component, Fragment } from 'react';

import { ProductConsumer } from '../context'; // use the Consumer to use context in your app
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
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {shakeandbake => {
                  return <h1>{shakeandbake}</h1>
                }
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
