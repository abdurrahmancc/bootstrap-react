import React from "react";
import ReactModal from "../ReactModal/ReactModal";

const SingleProduct = ({ setCartCount, product }) => {
  const { id, image, title } = product;
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="col-md-4"
    >
      <div className="card p-2 m-2">
        <img className="w-50 m-auto" src={image} alt="" />
        <h1>{title.slice(0, 10)}</h1>
        <div className="d-flex justify-content-around">
          <button onClick={setCartCount} className="btn btn-success">
            add to cart
          </button>
          <button className="btn btn-danger ">Delete</button>
          {/* <button className="btn btn-info">Details</button> */}
          <ReactModal product={product}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
