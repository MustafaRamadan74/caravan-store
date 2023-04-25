import React from 'react';
import $ from "jquery/dist/jquery.js";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate = useNavigate();
    let users = [];

    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
    }


    function login() {

        if (valideEmail() === false) {
            $(".emailWarning").removeClass("d-none");
            $(".emailWarning").addClass("d-block");
        }
        else if (validePassword() === false) {
            $(".passWarning").removeClass("d-none");
            $(".passWarning").addClass("d-block");
        }
        else if (valideEmail() === true && validePassword() === true) {
            for (let i = 0; i < users.length; i++) {
                if ($(".email").val() === users[i].email && $(".pass").val() === users[i].pass) {
                    navigate("home");
                    $(".registerLink").addClass("d-none");
                    $(".loginLink").addClass("d-none");
                    $(".logoutLink").removeClass("d-none");
                }
                else {
                    $(".loginWarning").removeClass("d-none");
                    $(".loginWarning").removeClass("d-block");
                }
            }
        }

    };

    function valideEmail() {
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (regexEmail.test($(".email").val())) {
            return true
        }
        else {
            return false
        }
    };

    function validePassword() {
        let regexPassword = /[a-z]{8}/
        if (regexPassword.test($(".pass").val())) {
            return true
        }
        else {
            return false
        }
    };


    return <>

        <div className='emailWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>invalid email</div>
        <div className='passWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>invalid password</div>
        <div className='loginWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>please enter right email and password</div>

        <div className="register">
            <input className='email form-control my-5 bg-dark text-light py-2 px-4' placeholder='Email' type="email" />
            <input className='pass form-control my-5 bg-dark text-light py-2 px-4' placeholder='Password' type="password" />
            <div onClick={login} className="btn btn-info">Login</div>
        </div>

    </>
}
