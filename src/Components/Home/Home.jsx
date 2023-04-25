import React from 'react';
import { useState } from 'react';
import slider2 from "../../images/slider1.jpg";
import slider3 from "../../images/slider2.jpg";
import slider1 from "../../images/slider3.jfif";
import cat1 from "../../images/jacket.jpg";
import cat2 from "../../images/wjacket.jpg";
import cat3 from "../../images/jewelery.jpg";
import { Link } from "react-router-dom";

export default function Slider() {

    const $ = require("jquery");

    const [slideIndex, setSlideIndex] = useState(0)

    const handleSlider = (direction) => {
        if (direction === "right") {
            if (slideIndex === 0) {
                $(".sliderContent0").fadeOut(500, function () {
                    $(".sliderContent1").fadeIn(500);
                    setSlideIndex(1);
                });

            }
            else if (slideIndex === 1) {
                $(".sliderContent1").fadeOut(500, function () {
                    $(".sliderContent2").fadeIn(500);
                    setSlideIndex(2);
                });

            }
            else if (slideIndex === 2) {
                $(".sliderContent2").fadeOut(500, function () {
                    $(".sliderContent0").fadeIn(500);
                    setSlideIndex(0);
                });

            }
        }
        else if (direction === "left") {
            if (slideIndex === 0) {
                $(".sliderContent0").fadeOut(500, function () {
                    $(".sliderContent2").fadeIn(500);
                    setSlideIndex(2);
                });

            }
            else if (slideIndex === 1) {
                $(".sliderContent1").fadeOut(500, function () {
                    $(".sliderContent0").fadeIn(500);
                    setSlideIndex(0);
                });

            }
            else if (slideIndex === 2) {
                $(".sliderContent2").fadeOut(500, function () {
                    $(".sliderContent1").fadeIn(500);
                    setSlideIndex(1);
                });

            }
        }


    };

    return <>
        <div className="arrows position-relative">
            <div onClick={() => handleSlider("left")} className="arrLeft position-absolute top-50 p-3 rounded-circle d-flex justify-content-center align-items-center cursor-pointer bg-danger">
                <i className="fa-solid fa-arrow-left"></i>
            </div>

            <div className="contentSlider">
                <div slideIndex={slideIndex} className="sliderContent0 row align-items-center">
                    <div className="col-md-6">
                        <img className='w-100 imgSlider' src={slider1} alt="summer sale" />
                    </div>
                    <div className="col-md-6">
                        <p className="caption fs-3">
                            <span className='h1 fw-bold d-block'>SUMMER SALE</span>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
                        </p>
                        <div className="btn btn-outline-danger">
                            SHOW NOW
                        </div>
                    </div>
                </div>
                <div slideIndex={slideIndex} className="sliderContent1 row align-items-center">
                    <div className="col-md-6">
                        <img className='w-100 imgSlider' src={slider3} alt="summer sale" />
                    </div>
                    <div className="col-md-6">
                        <p className="caption fs-3">
                            <span className='h1 fw-bold d-block'>WINTER SALE</span>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
                        </p>
                        <div className="btn btn-outline-danger">
                            SHOW NOW
                        </div>
                    </div>
                </div>
                <div slideIndex={slideIndex} className="sliderContent2 row align-items-center">
                    <div className="col-md-6">
                        <img className='w-100 imgSlider' src={slider2} alt="summer sale" />
                    </div>
                    <div className="col-md-6">
                        <p className="caption fs-3">
                            <span className='h1 fw-bold d-block'>POPULAR SALE</span>
                            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
                        </p>
                        <div className="btn btn-outline-danger">
                            SHOW NOW
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => handleSlider("right")} className="arrRight position-absolute top-50 p-3 rounded-circle d-flex justify-content-center align-items-center cursor-pointer bg-danger ">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>

        <div className="categories container my-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="catContainer position-relative">
                        <Link className='catLink' to={"/men"}>
                            <img className='w-100 catimg' src={cat1} alt="jacket" />
                            <div className="catHover h2 d-flex justify-content-center align-items-center">
                                Men's clothes
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="catContainer position-relative">
                        <Link className='catLink' to={"/women"}>
                            <img className='w-100 catimg' src={cat2} alt="jacket" />
                            <div className="catHover h2 d-flex justify-content-center align-items-center">
                                Women's clothes
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="catContainer position-relative">
                        <Link className='catLink' to={"/jewelery"}>
                            <img className='w-100 catimg' src={cat3} alt="jewelery" />
                            <div className="catHover h2 d-flex justify-content-center align-items-center">
                                Accessories
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="sendMessage w-100 d-flex justify-content-center my-5 ">
            <input type="text" className='form-control w-50 bg-black text-light' placeholder='what is in your mind ?' />
            <i class="fa-solid fa-paper-plane text-danger fa-2x bg-dark px-3 py-2 cursor-pointer"></i>
        </div>


    </>
}
