import React, { Component } from 'react';

import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product]
      };
    });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    console.log('Increment method');
  };

  decrement = id => {
    console.log('Decrement method');
  };

  removeItem = id => {
    console.log('Remove item method');
  };

  clearCart = () => {
    console.log('Clear cart method');
  };

  render() {
    // for methods we must pass each one individually
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };