import React, { Component } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value; // pulling methods
          const { img, title, price } = value.modalProduct; // pulling properties
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  align-items: center;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;  
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;  
  right: 0;

  #modal {
    background: var(--mainWhite);
  }
`;