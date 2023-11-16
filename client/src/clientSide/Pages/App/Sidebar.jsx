import React, { useState } from "react";
import "./Sidebar.css";
import Profile from "../App/Profile";
import Templates from "../App/Templates";
import { YourDesign } from "../App/YourDesign";
import { BsFillPersonFill } from "react-icons/bs";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsPersonFillGear } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { SlLogout } from "react-icons/sl";
export const Sidebar = () => {
  const [activePage, setActivePage] = useState("Templates");

  const renderPage = () => {
    if (activePage === "Templates") {
      return <Templates />;
    } else if (activePage === "YourDesign") {
      return <YourDesign />;
    } else if (activePage === "Profile") {
      return <Profile />;
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
          <div
            className="col-sm-2 bg-light d-flex flex-column justify-content-between min-vh-100"
            role="button"
          >
            <div className="mt-2">
              <div className="my-2 w-100 text-center">
                <NavLink
                  to={"/"}
                  className="text-decoration-none  text-dark fw-bold fs-4"
                >
                  THUMB<span style={{ color: "#fa7b05" }}>CRAFT</span>
                </NavLink>
              </div>
              {/* <a className="text text-decoration-none ms-4 align-items-center text-white d-none d-sm-inline">
                <button className='' style={{ color: "#fa7b05" }}>Create new</button>
              </a> */}
              <div className="parent-container">
                <button
                  className="button fs-6 p-1 m-3 text-center fw-bold border-0 p-2 w-100 mx-auto"
                  style={{ backgroundColor: "#fa7b05", color: "white" }}
                >
                  <NavLink to={"/design"} className={"text-decoration-none text-light"}>
                  Create new
                  </NavLink>
                </button>
              </div>
              <hr className="text-dark d-none d-sm-block"></hr>
              <div className="d-flex flex-column justify-content-between h-100">
                <ul
                  className="nav nav-pills flex-column mt-2 mt-sm-0 "
                  id="parentM"
                >
                  <li className="nav-item my-1 py-2 py-sm-0">
                    <a
                      onClick={() => setActivePage("Templates")}
                      className="nav-link text-dark text-center text-sm-start"
                    >
                      <HiSquare3Stack3D
                        className="me-1"
                        style={{ "fontSize": "22px" }}
                      />
                      <span className="ms-2 d-none d-sm-inline">Templates</span>
                    </a>
                  </li>
                  <li className="nav-item my-1 py-2 py-sm-0">
                    <a
                      onClick={() => setActivePage("YourDesign")}
                      className="nav-link text-dark text-center text-sm-start"
                    >
                      <MdDesignServices
                        className="me-1"
                        style={{ "fontSize": "22px" }}
                      />
                      <span className="ms-2 d-none d-sm-inline">
                        Your Design
                      </span>
                    </a>
                  </li>
                  <li className="nav-item my-1 py-2 py-sm-0">
                    <a
                      onClick={() => setActivePage("Profile")}
                      className="nav-link text-dark text-center text-sm-start"
                    >
                      <BsPersonFillGear
                        className="me-1"
                        style={{ "fontSize": "22px" }}
                      />
                      <span className="ms-2 d-none d-sm-inline">Profile</span>
                    </a>
                  </li>
                </ul>
                <NavDropdown
                  title={
                    <div className="d-flex align-items-center">
                      <span
                        className="me-1 text-dark"
                        style={{ fontSize: "14px" }}
                      >
                        salmanshaikh7118
                      </span>
                      <img
                        src="https://www.designcap.com/media/users/images/avatar.png"
                        style={{
                          height: "30px",
                          borderRadius: "50%",
                          border: "1px solid rgb(255,123,0)",
                        }}
                      ></img>
                    </div>
                  }
                  className="text-light p-2 mt-5"
                >
                  <NavDropdown.Item>My Profile</NavDropdown.Item>
                  <NavDropdown.Item>
                    <SlLogout
                      style={{ color: "#fa7b05" }}
                      className="me-1"
                    ></SlLogout>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </div>
          {/* <div className="dropdown open mb-3 text-center">
              <a className="btn btn-secondary border-0 dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <BsFillPersonFill className='me-1' style={{"font-size":"25px"}}/>
              <span className="fs-5 sm-3 d-none d-sm-inline">Dhru Tandel</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="triggerId">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Setting</a>
              </div>
            </div> */}
          <div className="col">{renderPage()}</div>
        </div>
      </div>
    </>
  );
};
