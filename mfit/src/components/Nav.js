import "./styles/Nav.css";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";



export const NavBar = () => {
    const {userData, setUserData, members, setMembers} = useContext(AppContext)
    return(  
        <nav>
            <div className="navbar">
            <div className="container nav-container">
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>  
                <div className="logo">
                <h1><a className="navbar-logo" >{userData.name}</a></h1>
                
                </div>
                <div className="menu-items">
                <li><a href="/">Log Out</a></li>
                </div>
            </div>
            </div>
        </nav>    
    )
}