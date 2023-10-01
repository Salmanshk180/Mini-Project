import React, { useState } from "react";
import { Container, Nav, NavItem } from "react-bootstrap";
import "./Sidebar.css";
import { BsGrid1X2,BsCloudUploadFill,BsImages} from "react-icons/bs";
import {FaShapes} from "react-icons/fa"
import {RxText} from 'react-icons/rx'
import {GrCloudUpload} from "react-icons/gr"
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Nav className="flex-lg-column mx-1 px-2 flex-lg-wrap flex-nowrap flex-row text-light align-items-baseline align-items-lg-center fw-bold">
          <Nav.Item className="my-2 mt-4  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary" style={{fontSize:"16px"}}>
            <BsGrid1X2 style={{fontSize:"20px"}}></BsGrid1X2>
            <p>DESIGN</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"style={{fontSize:"16px"}}>
          <FaShapes style={{fontSize:"20px"}}></FaShapes>
            <p>SHAPES</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"style={{fontSize:"16px"}}>
            <RxText style={{fontSize:"20px"}}></RxText>
            <p>TEXT</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"style={{fontSize:"16px"}}>
            <BsCloudUploadFill style={{fontSize:"20px"}}></BsCloudUploadFill>
            <p>UPLOAD</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center text-secondary"style={{fontSize:"16px"}}>
            <BsImages style={{fontSize:"20px"}}></BsImages>
            <p>IMAGES</p>
          </Nav.Item>
         
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
