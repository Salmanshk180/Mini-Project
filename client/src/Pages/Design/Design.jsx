import React, { Component } from "react";
import DesignNavbar from "../../Components/DesignMav/designNavbar";
import Sidebar from "../../Components/DesignSidebar/Sidebar";
import ComponentSidebar from "../../Components/ComponentSidebar/ComponentSidebar";
import { Col, Row } from "react-bootstrap";
import Canvas from "../../Components/Canvas/Canvas";

const Design = () => {
  return (
    <>
      <div style={{ backgroundColor: "gray"}}>
        <DesignNavbar></DesignNavbar>
        <div className="m-0 d-flex flex-column-reverse flex-lg-row" >
          <div className="px-0">
            <div className="d-flex flex-column-reverse flex-lg-row">
              <Sidebar></Sidebar>
              <ComponentSidebar></ComponentSidebar>
            </div>
          </div>
          <div className="mx-md-auto my-md-auto p-2">
            <div>
            <Canvas></Canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
