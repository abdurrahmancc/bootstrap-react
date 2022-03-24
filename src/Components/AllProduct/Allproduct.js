import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Allproduct = ({ setCartCount }) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="row">
      {products.map((pd) => (
        <SingleProduct key={pd.id} setCartCount={setCartCount} product={pd}></SingleProduct>
      ))}
    </div>
  );
};

export default Allproduct;
