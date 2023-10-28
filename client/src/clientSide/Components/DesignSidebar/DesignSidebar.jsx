import React, { useState } from "react";
import { Button, Col, Container, Nav, NavItem, Row } from "react-bootstrap";
import "./DesignSidebar.css";
import { BsGrid1X2, BsCloudUploadFill, BsImages } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import { RxText } from "react-icons/rx";
import { GrCloudUpload } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { selectModule } from "../../redux/actions/moduleAction";
import { toggleSidebar } from "../../redux/actions/sidebarAction";
import ComponentSidebar from "../ComponentSidebar/ComponentSidebar";
import {PiSelectionBackground} from "react-icons/pi"
import {HiSquare3Stack3D} from "react-icons/hi2"

const DesignSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const selectedModule = useSelector((state) => state.module.selectModule);
  const [activeModule, setActiveModule] = useState("Text");
  const toggle = () => {
    dispatch(toggleSidebar()); // Close the login modal
  };
  const handleSelectModule = (module) => {
    dispatch(selectModule(module));
    setActiveModule(module);
  };
  const moduleButtonClass = (module) => {
    // Add a CSS class conditionally for the selected module
    return activeModule === module ? "text-selected" : "text-secondary";
  };

;
  return (
    <>
      <div className="sidebar d-flex flex-column-reverse flex-md-row">
        <Nav className="flex-lg-column mx-1 px-2 flex-lg-wrap flex-nowrap flex-row text-light align-items-baseline align-items-lg-center fw-bold">
          <Nav.Item
            className="my-2 mt-4  mx-3 mx-lg-0 d-flex  flex-column align-items-center"
          >
            <Button
             className={`bg-white p-1 border-0 shadow-none d-flex flex-column align-items-center`}
              onClick={() =>{handleSelectModule("Design")}}
              style={activeModule === "Design" ? { color: "#fa7b05" } : { color: "#777777"}}
            >
              <HiSquare3Stack3D style={{ fontSize: "20px" }}></HiSquare3Stack3D>
              <p style={{fontSize:"12px",fontWeight:"500"}} >TEMPLATES</p>
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
          >
            <Button
             className={`bg-white p-1 border-0 shadow-none d-flex flex-column align-items-center`}
             style={activeModule === "Shapes" ? { color: "#fa7b05" } : { color: "#777777"}}
             onClick={() => {handleSelectModule("Shapes")}}
            >
              <FaShapes style={{ fontSize: "20px" }} ></FaShapes>
              <p style={{fontSize:"12px",fontWeight:"500"}}>SHAPES</p>
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
             className={`bg-white p-1 border-0 shadow-none d-flex flex-column align-items-center`}
             onClick={() => handleSelectModule("Text")}
             style={activeModule === "Text" ? { color: "#fa7b05" } : { color: "#777777"}}

            >
              <RxText style={{ fontSize: "20px" }} ></RxText>
              <p style={{fontSize:"12px",fontWeight:"500"}}>TEXT</p>
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
             className={`bg-white p-1 border-0 shadow-none d-flex flex-column align-items-center`}
             style={activeModule === "Upload" ? { color: "#fa7b05" } : { color: "#777777"}}
             onClick={() => handleSelectModule("Upload")}
            >
              <BsCloudUploadFill
               style={{ fontSize: "20px" }} 
              ></BsCloudUploadFill>
              <p style={{fontSize:"12px",fontWeight:"500"}} >UPLOAD</p>
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
             className={`bg-white p-1 border-0 shadow-none d-flex flex-column align-items-center `}
             style={activeModule === "Images" ? { color: "#fa7b05" } : { color: "#777777"}}
             onClick={() => handleSelectModule("Images")}
            >
              <BsImages style={{ fontSize: "20px" }} ></BsImages>
              <p style={{fontSize:"12px",fontWeight:"500"}} >IMAGES</p>
            </Button>
          </Nav.Item>
          <Nav.Item
            className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"
            style={{ fontSize: "16px" }}
          >
            <Button
             className={`bg-white p-1 border-0 shadow-none d-flex flex-column align-items-center `}
             style={activeModule === "Background" ? { color: "#fa7b05" } : { color: "#777777"}}
             onClick={() => handleSelectModule("Background")}
            >
              <PiSelectionBackground style={{ fontSize: "22px" }}></PiSelectionBackground>
              <p style={{fontSize:"12px",fontWeight:"500"}}>BACKGROUND</p>
            </Button>
          </Nav.Item>
        </Nav>
      {/* <ComponentSidebar></ComponentSidebar> */}
      </div>
      
    </>
  );
};

export default DesignSidebar;
