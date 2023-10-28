import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <>
        <div className='Footer bg-light text-center text-md-start'>
            <div className='container  bg-opacity-60'>
                <div className='row p-4'>
                    <div className='col-md-6 col-lg-5 col-12'>
                        <h3 className='fw-semibold text-uppercase '><span className='text-danger'>Design</span>World</h3>
                        <p className='p-4'>Come to Design World and create the best Designs</p>
                        <div className='footer-icon'>
                        <i className=" fa-brands fa-facebook p-2 bg-secondary-subtle text-danger m-2 rounded-circle"></i>
                        <i className=" fa-brands fa-twitter p-2 bg-secondary-subtle text-danger m-2 rounded-circle"></i>
                        <i className=" fa-brands fa-instagram p-2 bg-secondary-subtle text-danger m-2 rounded-circle"></i>
                        <i className=" fa-brands fa-linkedin p-2 bg-secondary-subtle text-danger m-2 rounded-circle"></i>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12'>
                        <h3 className='text-danger'>Quick links</h3>
                        <ul className='list-unstyled m-2 pt-3' >
                            <li className='nav-item p-2 '>
                            <a className='text-decoration-none text-dark  fw-medium' href="/">Services</a>

                            </li>
                            <li className='nav-item p-3'>
                                <a className='text-decoration-none text-dark  fw-medium' href="../../Home/About.jsx">About</a>
                            </li>
                            <li className='nav-item p-2'>
                                <a className='text-decoration-none text-dark fw-medium' href="/Contact.jsx">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12'>
                        <h3 className='text-danger'>Contact Info</h3>
                        <p className='fw-medium '><i className="  fa-solid fa-phone  p-2 pt-4"></i>+91 9638504805</p>
                        <p className='fw-medium'><i className=" fa-solid fa-envelope p-2"></i>dhrutandel508@gmail.com</p>
                        <p className='fw-medium'><i className=" fa-solid fa-location-crosshairs p-2"></i>Bardoli,Gujarat</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='last-footer bg-danger pt-3 pb-3 text-center fw-bold text-white fs-6'>
            <p className='text-capitalize'><i className="fa-regular fa-copyright p-1"></i>copyright all rights reserved</p>
        </div>
       
        </>

    )
}

