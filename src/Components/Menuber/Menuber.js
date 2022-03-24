import React from "react";
import "./Menuber.css";
const Menuber = (props) => {
  return (
    <div>
      <div className="bg-primary fixed-top">
        <div className="container text-white align-content-center">
          <div className="row">
            <div className="col-md-2 p-2 fs-5">logo</div>
            <div className="col-lg-10 menu-container d-flex justify-content-end">
              <li className="me-4 p-2 menu">Home</li>
              <li className="me-4 p-2 menu">Contact</li>
              <li className="me-4 p-2 menu">
                Cart <sup>{props.count}</sup>
              </li>
              <li className="me-4 p-2 menu">Login</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuber;
