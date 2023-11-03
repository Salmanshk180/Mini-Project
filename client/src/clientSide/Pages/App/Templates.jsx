import React from 'react';
import './Templates.css';

export const Templates = () => {
  return (
    <>
    <div className='d-flex p-3'>
      <div className="card p-3" style={{ width: "20rem" }}>
        <img
          src="https://static.wixstatic.com/media/72c0b2_58cde2ebb708454fb4aa74c2b5c1b648~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_58cde2ebb708454fb4aa74c2b5c1b648~mv2.png"
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }} 
        />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
      <div className="card p-3" style={{ width: "20rem" }}>
        <img
          src="https://marketplace.canva.com/EAFAMirCsX4/2/0/1600w/canva-purple-creative-livestream-youtube-thumbnail-X2eVuOzURSM.jpg"
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }} 
        />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
      <div className="card p-3" style={{ width: "20rem" }}>
        <img
          src="https://designhub.co/wp-content/uploads/2020/06/TitleImage2-758x426.png"
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }} 
        />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
      
      </div>
    </>
  );
};
