import React from 'react'
import MainNavbar from '../../Components/MainNavbar/MainNavbar'
import {Footer} from '../../Components/Footer/Footer';
import "./About.css"
export const About = () => {
  return (
    <>
      <MainNavbar />
      <div className="maintxt d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className='text-white'>Who are we?</h1>
        <div>
          <p className='text-white fw-medium'>We aim to make professional photo editing and graphic design capability accessible to everyone.</p>
        </div>
      </div>
      <div className='p-5 m-5 text-center'>
      <h1 className='text-danger text-dark'>Why Did We Develop DesignWorld?</h1>
        <div>
          <p className='text-danger fw-medium text-dark'>An excellent design will not only help speak your message out, but will also draw more attention and get great results as well. However, creating a striking graphic design is not easy and it often requires a great deal of time, talent and money. But the good news is that DesignCap is here to give you a hand, since it is engineered to simplify the cumbersome process of graphic design and reduce cost dramatically.</p>
        </div>
      </div>
      <Footer/>



      


    </>
  )
}
