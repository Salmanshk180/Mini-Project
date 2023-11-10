import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsTelephoneFill,BsEnvelopeFill,BsMapFill} from "react-icons/bs";
import { MdLocationCity } from "react-icons/md";
export const Footer = () => {
  return (
    <>
      <div className="Footer  text-light" style={{background:"#1d2643"}}>
  <div className="container p-4">
    <div className="row">
      <div className="col-md-6 col-lg-4">
      <NavLink to={"/"} className="text-decoration-none text-light fw-bold fs-4">
              THUMB<span style={{ color: "#fa7b05" }}>CRAFT</span>
            </NavLink>
        <p className="mt-3">
          Come to Design World and create the best youtube thumbnails.
        </p>
        <div className="footer-icon">
          <NavLink to="/" className="text-decoration-none text-light me-2">
            <FaFacebook></FaFacebook>
          </NavLink>
          <NavLink to="/" className="text-decoration-none text-light me-2">
            <FaTwitter></FaTwitter>
          </NavLink>
          <NavLink to="/" className="text-decoration-none text-light me-2">
            <FaInstagram></FaInstagram>
          </NavLink>
          <NavLink to="/" className="text-decoration-none text-light me-2">
            <FaLinkedin></FaLinkedin>
          </NavLink>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <h3 className="fw-bold" style={{color:"#fa7b05"}}>Quick Links</h3>
        <ul className="list-unstyled mt-3">
          <li>
            <NavLink className="text-decoration-none text-light" to="/">
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink className="text-decoration-none text-light" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="text-decoration-none text-light" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="col-md-6 col-lg-4">
        <h3 className="fw-bold" style={{color:"#fa7b05"}}>Contact Info</h3>
        <p className="mt-3">
      <BsTelephoneFill></BsTelephoneFill> +91 9638504805
        </p>
        <p>
          <BsEnvelopeFill></BsEnvelopeFill> dhrutandel508@gmail.com
        </p>
        <p>
         <MdLocationCity></MdLocationCity> Bardoli, Gujarat
        </p>
      </div>
    </div>


    <div className="row">
      <div className="col-12 text-center mt-4">
        <p className="text-capitalize">
          <i className="far fa-copyright"></i> @Copyright All Rights Reserved By ThumbCraft
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};
