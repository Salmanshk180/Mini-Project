import React, { useState } from "react";
import { Button, Container, Nav, NavItem } from "react-bootstrap";
import "./Sidebar.css";
import { BsGrid1X2, BsCloudUploadFill, BsImages } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { RxText } from "react-icons/rx";
import { GrCloudUpload } from "react-icons/gr";
import { useDispatch,useSelector } from "react-redux";
import { selectModule } from "../../redux/actions/moduleAction";
import { toggleSidebar } from "../../redux/actions/sidebarAction";


const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const toggle = () => {
    dispatch(toggleSidebar()); // Close the login modal
  };
  const handleSelectModule = (module) => {
    dispatch(selectModule(module));
  };

  return (
    <>
      <div className="sidebar">
        <Nav className="flex-lg-column mx-1 px-2 flex-lg-wrap flex-nowrap flex-row text-light align-items-baseline align-items-lg-center fw-bold">
          <Nav.Item
            className="my-2 mt-4  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
              className="bg-white text-dark p-1 border-0 shadow-none d-flex flex-column align-items-center"
              onClick={() =>{handleSelectModule("Design")}}
            >
              <BsGrid1X2 style={{ fontSize: "20px" }}></BsGrid1X2>
              DESIGN
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
              className="bg-white text-dark p-1 border-0 shadow-none d-flex flex-column align-items-center"
              onClick={() => {handleSelectModule("Shapes")}}
            >
              <FaShapes style={{ fontSize: "20px" }}></FaShapes>
              SHAPES
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
              className="bg-white text-dark p-1 border-0 shadow-none d-flex flex-column align-items-center"
              onClick={() => handleSelectModule("Text")}
            >
              <RxText style={{ fontSize: "20px" }}></RxText>
              TEXT
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
              className="bg-white text-dark p-1 border-0 shadow-none d-flex flex-column align-items-center"
              onClick={() => handleSelectModule("Upload")}
            >
              <BsCloudUploadFill
                style={{ fontSize: "20px" }}
              ></BsCloudUploadFill>
              UPLOAD
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
              className="bg-white text-dark p-1 border-0 shadow-none d-flex flex-column align-items-center"
              onClick={() => handleSelectModule("Images")}
            >
              <BsImages style={{ fontSize: "20px" }}></BsImages>
              IMAGES
            </Button>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
