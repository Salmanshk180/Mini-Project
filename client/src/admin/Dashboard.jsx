import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import UserProfile from "./UserProfile";
import { useSelector, useDispatch } from "react-redux";
import DesignTools from "./DesignTools";
import AddTemplates from "./AddTemplates";
import MyAccount from "./MyAccount";
import { Col, Container, Row } from "react-bootstrap";
const Dashboard = () => {
  const activeComponent = useSelector(
    (state) => state.setActiveComponent.activeComponent
  );
  const dispatch = useDispatch();
  let componentToRender = <Home></Home>;

  switch (activeComponent) {
    case "Dashboard":
      componentToRender = <Home></Home>;
      break;
    case "User Profile":
      componentToRender = <UserProfile></UserProfile>;
      break;
    case "Design Tools":
      componentToRender = <DesignTools></DesignTools>;
      break;
    case "Add Templates":
      componentToRender = <AddTemplates></AddTemplates>;
      break;
      case "My Account":
        componentToRender = <MyAccount></MyAccount>;
        break;
    default:
      break;
  }

  return (
    <div>
      <Navbar></Navbar>
      <Container fluid className="p-0">
  <Row className="m-0">
    <Col lg={2} className="p-0">
      <Sidebar />
    </Col>
    <Col lg={10} className="p-0">
      {componentToRender}
    </Col>
  </Row>
</Container>
   </div>
  );
};

export default Dashboard;
