import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function Layout() {



    return <>

        <NavBar></NavBar>
        <div className="container">
            <Outlet></Outlet>
        </div>
        <Footer ></Footer>

    </>
}
