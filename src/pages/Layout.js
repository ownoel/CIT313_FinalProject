import { Outlet, Link} from "react-router-dom";
import "./Layout.css"; //Specific CSS file for styling
import React, { useState } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Popup from "../components/Popup.js";

const Layout = () => {
    const [isOpen, setIsOpen] =useState(false);
    
    return(
        <>
        <Header content = "Mr. Burger"/>
            <nav className={isOpen ? "isOpen" : ""}>
                <button onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
                <ul>
                    <li>
                        <img src="burger.png" alt="burger"></img>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        <Popup popup_text="Follow us on our socials. @MrBurger" />
        <Footer content="&copy; Mr. Burger. All Rights Reserved."/>
        </>
    );
};

export default Layout;