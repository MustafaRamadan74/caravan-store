import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import $ from "jquery/dist/jquery.js";

export default function NavBar() {
    let navigate = useNavigate();

    function logout() {
        $(".logoutLink").addClass("d-none");
        $(".registerLink").removeClass("d-none");
        $(".loginLink").removeClass("d-none");
        navigate("/");
    };

    return <>

        <div className="row py-3 mb-5 w-100">
            <div className="col-md-4 d-flex ps-5 align-items-center">
                <div className="language cursor-pointer mx-3">
                    EN
                </div>
                <div className="searchBox px-2 py-1 d-flex justify-content-around align-items-center mx-3 rounded-pill">
                    <input type="text" className='searchInput' />
                    <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                </div>
            </div>
            <div className="col-md-4 homePage">
                <Link className="homePageLink" to={"home"}>
                    <h1 className='homePageContent h2 text-center fw-bold text-danger cursor-pointer'>Caravan</h1>
                </Link>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center pe-5">
                <p className='registerLink mx-3 cursor-pointer fw-bold'><Link className='text-light text-decoration-none' to={"register"}>Register</Link></p>
                <p className='loginLink mx-3 cursor-pointer fw-bold'><Link className='text-light text-decoration-none' to={"/"}>Login</Link></p>
                <p onClick={logout} className='d-none logoutLink mx-3 cursor-pointer fw-bold'><Link className='text-light text-decoration-none'>Logout</Link></p>
                <i className="fa-solid fa-cart-shopping mx-3 cursor-pointer mb-2 fa-2x"></i>
            </div>
        </div>

    </>
}
