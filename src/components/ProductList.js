import React, { Component, Fragment } from 'react';

import { ProductConsumer } from '../context'; // use the Consumer to use context in your app
import Product from './Product';

import Title from './Title';

export default class ProductList extends Component {

  render() {    
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(item => {
                    return <Product key={item.id} product={item} />
                  });
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
