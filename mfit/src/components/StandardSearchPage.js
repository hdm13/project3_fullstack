import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import { Header } from './Header';
import { Container } from './styles/Container.styled';
import { LineGraph, WeightLineGraph } from './LineGraph';
import { NavBar } from './Nav';


export const StandardSearchPage = () => {
    return (
        <div className='background'>
            <div className='content'>
                <div className='centered_login'>
                    <div className='input_fields'>
                        <label htmlFor="username">Username:</label>

                        <input type="text" id='username' name='username' autoComplete="username" required/>
                        
                        <label htmlFor="password">Password:</label>

                        <input type="password" id='password' name='password' autoComplete="password" required/>
                        <br />
                    </div>
                    <div className='input_buttons'>
                        <button className='buttons'> Search </button>
     
                    </div>
                </div>

            </div>
            <footer className='footer'>
                mFit &copy; 2022
            </footer>
        </div>
    )
}