import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import { Header } from './Header';
import { Container } from './styles/Container.styled';
import { LineGraph, WeightLineGraph } from './LineGraph';
import { NavBar } from './Nav';

const SubHead = styled.div`
position: relative;
background-color: black;
padding: 30px 20px;
height: 100px;
margin-top: 2px;
color: #ffffff;
text-align: center;
`

const InfoButton = styled.button`
cursor: pointer;
font-size: 24px;
font-weight: bold;
padding: 10px 50px;
margin: 85px;
margin-top: 0;
color: black;
&:hover {
  opacity: 0.9;
  transform: scale (0.98);
}
`


export const PtScoreTable = () => {
    const [ptStandards, setPtStandards] = useState([])
        const { userData, setUserData, members, setMembers } = useContext(AppContext)

        useEffect(() => {
            fetch('http://localhost:8080/navy_fitness_standards')
                .then(res => res.json())
                .then(data =>
                    setPtStandards(data)
                  )
          }, []);
    
        return (
        <>
            <NavBar />
            <SubHead>
                <InfoButton>Height</InfoButton>
                <InfoButton>Weight</InfoButton>
                <InfoButton>PT Score</InfoButton>
            </SubHead>
            <Container>
               h
            </Container>
        </>
    )
}