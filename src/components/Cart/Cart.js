import React, { Component } from 'react';

import Title from '../Title';
import CartCols from './CartCols';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <Title name="your" title="cart" />
        <CartCols />
      </section>
    );
  }
}
