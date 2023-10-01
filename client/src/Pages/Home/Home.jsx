import React from "react";
import {About} from '../About/About';
// import {Footer} from '../../Components/Footer/Footer';
import {Contact} from '../../Components/Contact/Contact';
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";

const Home = () => {
  return (
    <>
    <div>
      <MainNavbar></MainNavbar>
      <Login></Login>
      <SignUp></SignUp>
    </div>
    </>
  );
};

export default Home;
