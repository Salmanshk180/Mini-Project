import React, { useState } from "react";
import { Form, Button, Nav, Collapse } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { FaGreaterThan,FaLessThan} from "react-icons/fa";
const ComponentSidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <div className="bg-secondary d-flex flex-column-reverse flex-md-row">
    

        {
            open?<Form className="p-2">
            <div className="d-flex align-items-center bg-light rounded px-2">
              <BsSearch style={{ fontSize: "18px" }}></BsSearch>
              <Form.Control
                type="searchbox"
                placeholder="Search Templates"
                className="fw-bold border-0 shadow-none me-auto"
              ></Form.Control>
            </div>
          </Form>:""
        }
        <Button onClick={toggleSidebar} className="h-100 my-auto bg-secondary border-0 ">
        {open?<FaLessThan></FaLessThan>:
          <FaGreaterThan></FaGreaterThan>}
        </Button>
      </div>
    </>
  );
};

export default ComponentSidebar;
