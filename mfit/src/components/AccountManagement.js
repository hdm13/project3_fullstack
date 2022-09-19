import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import { NavBar } from './Nav';


export const AccountManagement = () => {
    let navigate = useNavigate()
    const { userData, setUserData, members, setMembers } = useContext(AppContext)
    console.log(userData)
    return(
        <>
       
        <div className='background'> 
        <NavBar />
            <div className="content2"><p>Profile</p>
                <div className='centered_login3'>
                    <p>Username</p>
                    <input type="text" value={`${userData.username}`}/>   
                    <p>Name</p>
                    <input type="text" value={`${userData.name}`}/>  
                    <p>Password</p>
                    <input type="text" />                   
                    <p>Height (inches)</p>
                    <input type="text" value={`${userData.heightinches}`} />               
                    <p>Weight (pounds)</p>
                    <input type="text" />              
                    <p>Pushups</p>
                    <input type="text" />                   
                    <p>Plank Time (min:sec)</p>
                    <input type="text" />                
                    <p>Run Time (min:sec)</p>
                    <input type="text" />
                    <br/>
                    <button className='accountButton' onClick={() => navigate(`/member/${userData[0].username}`)}> Submit </button>
                </div>
            </div>
        </div>
        </>
    )


}
