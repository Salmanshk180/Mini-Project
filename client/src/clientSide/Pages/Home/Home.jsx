import React from "react";
import { About } from '../About/About';
import { Footer } from '../../Components/Footer/Footer';
import { Contact } from '../Contact/Contact';
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import './Home.css'

  const Home = () => {
    return (
      <>


        <MainNavbar></MainNavbar>
        <Login></Login>
        <SignUp></SignUp>
        <div className="container-fluid d-flex align-items-center justify-content-center p-5 mt-5 bg-primary-subtle">
          <div className="row">
            <div className="col-md-6">
              <h1 className="fw-bold custom-font-size-h1">Make Graphic Design much easier</h1>
              <span className="custom-font-size-span">Speed up your creative process to make striking graphic designs for your business, event, social media, and more.</span>
              <div className="d-flex mt-4">
                <button type="button" className="btn btn-danger fs-4 custom-small-btn ms-0 rounded-pill">Get Started now</button>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4VECPZ8qAIqmO4FpWDXMHMcZCSMHz9l5iA&usqp=CAU" className="img-fluid custom-image-size" alt="Graphic Design" />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 pb-5">
              <div className="card h-100 pt-4 m-3" style={{ width: '18rem' }}>
                <img src="https://www.designcap.com/media/pages/images/home/templates.svg?v=1602654254" className="card-img-top" alt="..." />
                <div className="card-body text-white">
                  <h5 className="card-title fw-bold">Templates & Resources</h5>
                  <p className="card-text">Get access to countless templates and resources to boost your creativity.</p>

                </div>
              </div>
              {/* Additional card elements go here */}
            </div>
            <div className="col-md-3 pb-5">
              <div className="card h-100 pt-4 m-3" style={{ width: '18rem' }}>
                <img src="https://www.designcap.com/media/pages/images/home/time.svg?v=1602654254" className="card-img-top" alt="..." />
                <div className="card-body text-white">
                  <h5 className="card-title fw-bold">Save Time & Money</h5>
                  <p className="card-text">Create designs that stand out from the crowd in minutes at no cost.</p>

                </div>
              </div>
              {/* Additional card elements go here */}
            </div>
            <div className="col-md-3 pb-5">
              <div className="card h-100 pt-4 m-3" style={{ width: '18rem' }}>
                <img src="https://www.designcap.com/media/pages/images/home/easy.svg?v=1602654254" className="card-img-top" alt="..." />
                <div className="card-body text-white">
                  <h5 className="card-title fw-bold">No Skill Needed</h5>
                  <p className="card-text">Everyone can design like a pro without a steep learning curve.</p>

                </div>
              </div>
              {/* Additional card elements go here */}
            </div>
            <div className="col-md-3 pb-5">
              <div className="card h-100 pt-4 m-3" style={{ width: '18rem' }}>
                <img src="https://www.designcap.com/media/pages/images/home/tools.svg?v=1602654254" className="card-img-top" alt="..." />
                <div className="card-body text-white">
                  <h5 className="card-title fw-bold">Powerful Tools</h5>
                  <p className="card-text">Simple yet powerful editing tools enable you to customize your design as the way you want.</p>

                </div>
              </div>
              {/* Additional card elements go here */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  export default Home;
