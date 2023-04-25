import React from 'react';
import $ from "jquery/dist/jquery.js"

export default function Register() {

    let user;
    let users = [];

    if (localStorage.getItem("users") != null) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    function register() {

        if (validePhone() === false) {
            $(".phoneWarning").removeClass("d-none");
            $(".phoneWarning").addClass("d-block");
        }
        else if (valideEmail() === false) {
            $(".emailWarning").removeClass("d-none");
            $(".emailWarning").addClass("d-block");
        }
        else if (validePassword() === false) {
            $(".passWarning").removeClass("d-none");
            $(".passWarning").addClass("d-block");
        }
        else if (valideEmail() === true && validePassword() === true && validePhone() === true) {
            user = {
                name: $(".name").val(),
                email: $(".email").val(),
                pass: $(".pass").val(),
                phone: $(".phone").val(),
            };
            if (checkRegister()) {
                $(".checkWarning").removeClass("d-none");
            }
            else {
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
            }

        }

    };
    // localStorage.clear()
    function checkRegister() {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === $(".email").val()) {
                return true
            }
        }
    }

    function validePhone() {
        let regexPhone = /^01[0125][0-9]{8}$/gm
        if (regexPhone.test($(".phone").val())) {
            return true
        }
        else {
            return false
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

        <div className='phoneWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>invalid number</div>
        <div className='emailWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>invalid email</div>
        <div className='passWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>invalid password 'write 8 or more charachters'</div>
        <div className='checkWarning w-50 my-3 bg-warning text-light m-auto text-center fw-bold rounded d-none'>you are already registered</div>

        <div className="register">
            <input className='name form-control my-5 bg-dark text-light py-2 px-4' placeholder='Name' type="text" />
            <input className='email form-control my-5 bg-dark text-light py-2 px-4' placeholder='Email' type="email" />
            <input className='pass form-control my-5 bg-dark text-light py-2 px-4' placeholder='Password' type="password" />
            <input className='phone form-control my-5 bg-dark text-light py-2 px-4' placeholder='Phone Numeber' type="text" />
            <div onClick={register} className="btn btn-info registerBTN">Register</div>
        </div>

    </>
}
