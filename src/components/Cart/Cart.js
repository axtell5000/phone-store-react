import React, { Component, Fragment } from 'react';

import { ProductConsumer } from '../../context';

import Title from '../Title';
import CartCols from './CartCols';
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {
            value => {
              const {cart} = value;
              if (cart.length > 0) {
                return (
                  <Fragment>
                    <Title name="your" title="cart" />
                    <CartCols />
                  </Fragment>
                );
              } else {
                return ( <EmptyCart />)
              }
            }
          }
        </ProductConsumer>
      </section>
    );
  }
}
