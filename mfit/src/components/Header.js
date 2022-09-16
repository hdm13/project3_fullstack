import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import MilitaryFitnessTrackerIcon from "../pictures/MilitaryFitnessTrackerIcon.png"
import { StyledHeader } from "./styles/Header.styled";
import { AppContext } from "../AppContext";



export const Header = () => {
    const {userData, setUserData, members, setMembers} = useContext(AppContext)
    const myFunction = (x) => {
        console.log(x)
        x.classList.toggle("change");
    }
    return (
        
        <div className="nav">
            <div class="container" onClick={() => myFunction(this)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <span id="userName">
               {userData.name}
            </span>
            <Link to="/">
                <img src={MilitaryFitnessTrackerIcon} alt="MilitaryFitnessTrackerIcon" width="150px" />  
            </Link>
        </div>
    )
}