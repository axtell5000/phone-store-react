import React, { Component } from 'react';

import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    products: [],
    detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }

  // Here we are copying the array of onjects deeply, not just referencing them, keeping in mind normally when you assign object normally you are referencing it, so when we want to work with object in future its best to make a copy
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      products = [...products, singleItem];
    });
    this.setState(() => {
      return {products}
    });
  }

  handleDetail = () => {
    console.log('Hello from detail');
  };

  addToCart = () => {
    console.log('adding to cart');
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };