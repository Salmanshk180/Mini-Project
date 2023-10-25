import React from 'react'
import MainNavbar from '../../Components/MainNavbar/MainNavbar';
import { Footer } from '../../Components/Footer/Footer';

export const Contact = () => {
    return (
        <>
            <MainNavbar />
            <div className='text-center p-5 m-5'>
                <h1 className='p-3'>Contact Us</h1>
                <p className='fw-medium fs-5'>Please let us know if you have any feedback, suggestions or comments on DesignCap. We'd love to hear your thoughts!</p>
                <p className='text-danger fw-medium fs-6'>Fields marked with * are mandatory.</p>
            </div>
            <div className='container'>
                <form className='p-3 d-flex flex-column'>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <input type="text" className="form-control custom-input" placeholder="First name*" />
                        </div>
                        <div className="col-6">
                            <input type="email" className="form-control custom-input" id="floatingInputDisabled" placeholder="Email*" />
                        </div>
                    </div>

                    <select className="form-select mt-5" aria-label="Default select example">
                        <option selected>Please selct the type of your inquiry</option>
                        <option value="1">General</option>
                        <option value="2">Select a feature</option>
                        <option value="3">Report a bug</option>
                    </select>

                    <textarea className="form-control mt-5" id="exampleFormControlTextarea1" rows="3" placeholder='Your message*'></textarea>
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-danger fs-4 mt-5 custom-small-btn mx-auto">Submit</button>
                    </div>

                </form >
            </div>
            <Footer />


        </>
    )
}
