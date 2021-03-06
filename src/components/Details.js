import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value) => {
            // destructuring from the object from the context
            const {id, company, img, info, price, title, inCart} = value.detailProduct;

            return (
              <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* end of title */}
                {/* product info - starts */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt={title} />
                  </div>
                  {/* product text - starts */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h1>model : {title}</h1>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by : <span className="text-uppercase">{company}</span>
                    </h4>

                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product :
                    </p>
                    <p className="text-muted lead">{info}</p>

                    {/* buttons - start */}
                    <div>
                      <Link to="/" title="Back to Products">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        title={inCart ? "In Cart" : "Add to Cart"}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "in cart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                    {/* buttons - ends */}
                  </div>
                  {/* product text - ends */}
                </div>
                {/* product info - ends */}
              </div>
            );
          }
        }
      </ProductConsumer>
    );
  }
}
