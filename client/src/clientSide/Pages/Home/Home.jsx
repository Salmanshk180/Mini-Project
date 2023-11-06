import React from "react";
import { About } from "../About/About";
import { Footer } from "../../Components/Footer/Footer";
import { Contact } from "../Contact/Contact";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import "./Home.css";
import image from "../../images/homeimage.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <MainNavbar></MainNavbar>
      <Login></Login>
      <SignUp></SignUp>
      <div className="container-fluid d-flex align-items-center justify-content-center px-5 py-5 bg-primary-subtle ">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="fw-bold custom-font-size-h1 fst-italic ">
              Create Youtube Thumbnail easily
            </h1>
            <span
              className="custom-font-size-span"
              style={{ textAign: "justify" }}
            >
              Speed up your creative process to make striking YouTube thumbnails
              for your YouTube channel.
            </span>
            <div className="d-flex mt-4">
              <button
                type="button"
                className="btn  fs-5 custom-small-btn ms-0 border-0 rounded-pill p-3"
                style={{ background: "rgb(255,123,0)" }}
              >
                <NavLink to={"/app"} className={"text-decoration-none text-white"}>Get Started now</NavLink>
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 mx-auto">
            <img
              src={image}
              className="img-fluid custom-image-size"
              alt="Graphic Design"
            />
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 pb-5">
            <div className="card h-100 pt-4 m-3 shadow">
              <div style={{ position: "relative" }}>
                <div
                  className="circle-img position-absolute  translate-middle-x"
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(90deg, #A6CBF2 0%, #918df2 100%)",
                    borderRadius: "50%",
                    zIndex: 0,
                    top: 0,
                    left: "43%",
                    transform: "translateX(-50%)",
                    opacity: "100%",
                  }}
                ></div>
              </div>
              <img
                src="https://www.designcap.com/media/pages/images/home/templates.svg?v=1602654254"
                className="card-img-top mt-1"
                alt="Templates"
                style={{ zIndex: 1 }}
              />
              <div className="card-body text-dark">
                <h5 className="card-title fw-bold">Templates & Resources</h5>
                <div
                  className="my-1"
                  style={{
                    width: "30px",
                    height: "3px",
                    backgroundColor: "#fa7b05",
                  }}
                ></div>
                <p className="card-text">
                  Access countless templates and resources to boost your
                  creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-5">
            <div className="card h-100 pt-4 m-3 shadow">
              <div style={{ position: "relative" }}>
                <div
                  className="circle-img position-absolute  translate-middle-x mt-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(90deg, #A6CBF2 0%, #918df2 100%)",
                    borderRadius: "50%",
                    zIndex: 0,
                    top: 0,
                    left: "43%",
                    transform: "translateX(-50%)",
                    opacity: "100%",
                  }}
                ></div>
              </div>
              <img
                src="https://www.designcap.com/media/pages/images/home/time.svg?v=1602654254"
                className="card-img-top mt-1"
                alt="Save Time & Money"
                style={{ zIndex: 1 }}
              />
              <div className="card-body text-dark">
                <h5 className="card-title fw-bold">Save Time & Money</h5>
                <div
                  className="my-1"
                  style={{
                    width: "30px",
                    height: "3px",
                    backgroundColor: "#fa7b05",
                  }}
                ></div>
                <p className="card-text">
                  Create standout designs in minutes at no cost.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-5">
            <div className="card h-100 pt-4 m-3 shadow">
              <div style={{ position: "relative" }}>
                <div
                  className="circle-img position-absolute  translate-middle-x mt-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(90deg, #A6CBF2 0%, #918df2 100%)",
                    borderRadius: "50%",
                    zIndex: 0,
                    top: 0,
                    left: "43%",
                    transform: "translateX(-50%)",
                    opacity: "100%",
                  }}
                ></div>
              </div>
              <img
                src="https://www.designcap.com/media/pages/images/home/easy.svg?v=1602654254"
                className="card-img-top mt-1"
                alt="No Skill Needed"
                style={{ zIndex: 1 }}
              />
              <div className="card-body text-dark">
                <h5 className="card-title fw-bold">No Skill Needed</h5>
                <div
                  className="my-1"
                  style={{
                    width: "30px",
                    height: "3px",
                    backgroundColor: "#fa7b05",
                  }}
                ></div>
                <p className="card-text">
                  Design like a pro without a steep learning curve.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-5">
            <div className="card h-100 pt-4 m-3 shadow">
              <div style={{ position: "relative" }}>
                <div
                  className="circle-img position-absolute  translate-middle-x mt-0"
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(90deg, #A6CBF2 0%, #918df2 100%)",
                    borderRadius: "50%",
                    zIndex: 0,
                    top: 0,
                    left: "43%",
                    transform: "translateX(-50%)",
                    opacity: "100%",
                  }}
                ></div>
              </div>
              <img
                src="https://www.designcap.com/media/pages/images/home/tools.svg?v=1602654254"
                className="card-img-top mt-1"
                alt="Powerful Tools"
                style={{ zIndex: 1 }}
              />
              <div className="card-body text-dark">
                <h5 className="card-title fw-bold">Powerful Tools</h5>
                <div
                  className="my-1"
                  style={{
                    width: "30px",
                    height: "3px",
                    backgroundColor: "#fa7b05",
                  }}
                ></div>
                <p className="card-text">
                  Simple yet powerful editing tools to customize your designs
                  your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
