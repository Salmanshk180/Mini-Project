import React from "react";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";

import { Footer } from "../../Components/Footer/Footer";
import "./About.css";
export const About = () => {
  return (
    <>
      <MainNavbar />
      <Login></Login>
      <SignUp></SignUp>
      <div className="maintxt d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="text-dark fw-bold">Who are we?</h1>
        <div>
          <p className="text-dark fw-medium w-75 mx-auto">
            We're on a mission to democratize professional YouTube thumbnail
            design, ensuring that everyone can create stunning thumbnails
            effortlessly. Join us to unlock your creative potential and make
            your channel stand out!
          </p>
        </div>
      </div>
      <div className="p-5 m-5 text-center">
        <h1 className="text-danger text-dark fw-bold">
          Why Did We Develop ThumbCraft?
        </h1>
        <div>
          <p className="text-danger fw-medium text-dark">
            An excellent design will not only help speak your message out, but
            will also draw more attention and get great results as well.
            However, creating a striking youtube thumbnail is not easy and it often
            requires a great deal of time, talent and money. But the good news
            is that ThumbCraft is here to give you a hand, since it is engineered
            to simplify the cumbersome process of creating youtube thumbnail and reduce cost
            dramatically.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
