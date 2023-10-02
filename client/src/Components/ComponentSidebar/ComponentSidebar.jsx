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
const ComponentSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const selectedModule = useSelector((state) => state.module.selectedModule);

  const toggle = () => {
    dispatch(toggleSidebar()); // Close the login modal
  };

  let componentToRender = null;

  switch (selectedModule) {
    case "Text":
      componentToRender = <TextModule></TextModule>;
      break;
    case "Design":
      componentToRender = "Design";
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

    default:
      break;
  }

  return (
    <>
      <div className="bg-light d-flex flex-lg-row flex-column-reverse csidebar">
        <div>{isOpen && componentToRender}</div>
        <div>
          <Button
            onClick={toggle}
            className="h-100 my-auto bg-light rounded-0 border-0 shadow-none p-0"
          >
            {isOpen ? (
              <MdKeyboardDoubleArrowLeft className="bg-dark"></MdKeyboardDoubleArrowLeft>
            ) : (
              <MdKeyboardDoubleArrowRight className="bg-dark"></MdKeyboardDoubleArrowRight>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ComponentSidebar;
