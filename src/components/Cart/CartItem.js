import React from 'react';

export default function CartItem({item, value}) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-3 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", heigth: "5rem" }}
          className="img-fluid"
          alt={title}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <span className="d-lg-none">product :</span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 ">
        <strong>
          <span className="d-lg-none">price :</span> ${price}
        </strong>
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              title="Decrease quantity"
              onClick={() => {
                return decrement(id);
              }}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              title="Increase quantity"
              onClick={() => {
                return increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 ">
        <div title="Remove item" className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 ">
        <strong>item total : ${total} </strong>
      </div>
    </div>
  );
}
