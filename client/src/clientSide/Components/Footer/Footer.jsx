import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className="Footer  text-light" style={{background:"#1d2643"}}>
  <div className="container p-4">
    <div className="row">
      <div className="col-md-6 col-lg-4">
      <NavLink to={"/"} className="text-decoration-none text-light fw-bold fs-4">
              DESIGN<span style={{ color: "#fa7b05" }}>WORLD</span>
            </NavLink>
        <p className="mt-3">
          Come to Design World and create the best designs.
        </p>
        <div className="footer-icon">
          <a href="#" className="text-decoration-none text-light m-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-decoration-none text-light m-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-decoration-none text-light m-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-decoration-none text-light m-2">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <h3 className="fw-bold" style={{color:"#fa7b05"}}>Quick Links</h3>
        <ul className="list-unstyled mt-3">
          <li>
            <a className="text-decoration-none text-light" href="/">
              Services
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-light" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="text-decoration-none text-light" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-4">
        <h3 className="fw-bold" style={{color:"#fa7b05"}}>Contact Info</h3>
        <p className="mt-3">
          <i className="fas fa-phone text-light"></i> +91 9638504805
        </p>
        <p>
          <i className="fas fa-envelope text-light"></i> dhrutandel508@gmail.com
        </p>
        <p>
          <i className="fas fa-map-marker text-light"></i> Bardoli, Gujarat
        </p>
      </div>
    </div>


    <div className="row">
      <div className="col-12 text-center mt-4">
        <p className="text-capitalize">
          <i className="far fa-copyright"></i> Copyright All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};
