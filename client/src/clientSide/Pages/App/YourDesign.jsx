import React from 'react'

export const YourDesign = () => {
  return (
    <>
    <div className='card border-0 mt-3 d-flex flex-row justify-content-between'>
      <div className='fs-3 ms-4'>
    <p  className="fs-3 text-center fw-bold  fst-italic" style={{color:"rgb(0,0,0)"}}>My Designs</p>
    <p style={{fontSize:"12px",color:"#aaaaaa"}}>You have 1 designs</p>
      </div>
    <button className='btn me-4 px-4' style={{background:"rgb(255,123,0)", color:"white",fontSize:"14px",height:"40px",border:"0px",borderRadius:"0px"}}>Delete</button>
    </div>
    <div className='d-flex p-2'>
      <div className="card p-3 border-0" style={{ width: "20rem" }}>
        <img
          src="https://static.wixstatic.com/media/72c0b2_58cde2ebb708454fb4aa74c2b5c1b648~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/72c0b2_58cde2ebb708454fb4aa74c2b5c1b648~mv2.png"
          className="card-img-top shadow"
          alt="..."
          style={{ height: "150px",width:"300px",borderRadius:"0px"}} 
        />
        <div className="card-body d-flex justify-content-between ">
          <p className="card-title text-center">Untitled</p>
         
        </div>
      </div>
      
      </div>
    </>
  )
}
