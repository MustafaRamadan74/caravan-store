import React from 'react';
import payment from "../../images/payment.JPG"

export default function Footer() {
    return <>

        <div className="footer py-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="about">
                            <h4 className='h2 fw-bold text-danger'>Caravan</h4>
                            <p>Caravan is online store to give you the happiness in every peace. check our products and enjoy free shipping</p>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <div className="social d-flex justify-content-center align-items-end">
                            <i className="fa-brands fa-2x text-danger cursor-pointer mx-3 fa-facebook"></i>
                            <i className="fa-brands fa-2x text-danger cursor-pointer mx-3 fa-twitter"></i>
                            <i className="fa-brands fa-2x text-danger cursor-pointer mx-3 fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="payment d-flex flex-column ">
                            <div className="location d-flex align-items-center">
                                <i className="fa-solid text-danger  fa-globe"></i>
                                <p className='mx-4'> Cairo, Egypt</p>
                            </div>
                            <div className="phone d-flex align-items-center">
                                <i className="fa-solid my-2 text-danger fa-phone-volume"></i>
                                <p className='mx-4'>+201015950011</p>
                            </div>
                            <div className="mail d-flex align-items-center">
                                <i className="fa-solid my-2 text-danger fa-envelope"></i>
                                <p className='mx-4'>mafroto74@gmail.com</p>
                            </div>
                            <img className='w-75 cursor-pointer' src={payment} alt="payment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}
