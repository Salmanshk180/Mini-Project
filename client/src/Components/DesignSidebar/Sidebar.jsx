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
        <Nav className="flex-lg-column mx-1 px-3 flex-lg-wrap flex-nowrap flex-row text-light align-items-baseline align-items-lg-center">
          <Nav.Item className="my-2 mt-4 mx-3 mx-lg-0 d-flex  flex-column align-items-center">
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center">
            <BsGrid1X2 style={{fontSize:"24px"}}></BsGrid1X2>
            <p>Design</p>
          </Nav.Item>
          <FaShapes style={{fontSize:"24px"}}></FaShapes>
            <p>Shapes</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center">
            <RxText style={{fontSize:"24px"}}></RxText>
            <p>Text</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center">
            <BsCloudUploadFill style={{fontSize:"24px",color:"white"}}></BsCloudUploadFill>
            <p>Upload</p>
          </Nav.Item>
          <Nav.Item className="my-2 mt-2  mx-3 mx-lg-0 d-flex  flex-column align-items-center">
            <BsImages style={{fontSize:"24px"}}></BsImages>
            <p>Images</p>
          </Nav.Item>
         
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
