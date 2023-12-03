import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DesignNavbar from "../../Components/DesignMav/DesignNavbar";
import DesignSidebar from "../../Components/DesignSidebar/DesignSidebar";
import Canvas from "../../Components/Canvas/Canvas";
import ComponentSidebar from "../../Components/componentSidebar/componentSidebar";
const Design = () => {
  return (
    <Container fluid className="p-0 overflow-hidden vh-100">
      <Row>
        <Col lg={12}>
          <DesignNavbar></DesignNavbar>
        </Col>
        <Col lg={4}>
          <div className="d-flex flex-md-row flex-column-reverse">
            <DesignSidebar></DesignSidebar>
            <div style={{ width: "100%", backgroundColor: "#eeeeee" }}>
              <ComponentSidebar></ComponentSidebar>
            </div>
          </div>
        </Col>
        <Col lg={8} className="my-auto p-0 bg-light">
          <Canvas></Canvas>
        </Col>
      </Row>
    </Container>
  );
};

export default Design;
