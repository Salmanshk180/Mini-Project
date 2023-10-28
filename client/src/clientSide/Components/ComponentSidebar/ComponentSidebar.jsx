import React, { useState } from "react";
import { Form, Button, Nav, Collapse } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import TextModule from "../Text/TextModule";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarAction";
import "./Sidebar.css";
import ShapeModule from "../ShapeModule/ShapeModule";
import UploadModule from "../UploadModule/UploadModule";
import ImageModule from "../ImageModule/ImageModule";
import DesignModule from "../DesignModule/DesignModule";
import Background from "../BackgroundModule/Background";
const ComponentSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const selectedModule = useSelector((state) => state.module.selectedModule);

  const toggle = () => {
    dispatch(toggleSidebar()); // Close the login modal
  };

  let componentToRender = <TextModule></TextModule>;

  switch (selectedModule) {
    case "Text":
      componentToRender = <TextModule></TextModule>;
      break;
    case "Design":
      componentToRender = <DesignModule></DesignModule>;
      break;
    case "Shapes":
      componentToRender = <ShapeModule></ShapeModule>;
      break;
    case "Upload":
      componentToRender = <UploadModule></UploadModule>;
      break;
    case "Images":
      componentToRender = <ImageModule></ImageModule>;
      break;
      case "Background":
      componentToRender = <Background></Background>;
      break;

    default:
      break;
  }

  return (
    <>
      <div className="d-flex flex-lg-row flex-column-reverse"  >
        <div style={{width:"100%"}}>{componentToRender}</div>
        <div>
          {/* <Button
            onClick={toggle}
            className="h-100 my-auto bg-light rounded-0 border-0 shadow-none p-0"
          >
            {isOpen ? (
              <MdKeyboardDoubleArrowLeft className="bg-dark"></MdKeyboardDoubleArrowLeft>
            ) : (
              <MdKeyboardDoubleArrowRight className="bg-dark"></MdKeyboardDoubleArrowRight>
            )}
          </Button> */}
        </div>
      </div>
     
    </>
  );
};

export default ComponentSidebar;
