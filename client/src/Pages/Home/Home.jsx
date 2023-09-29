import React from "react";
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
