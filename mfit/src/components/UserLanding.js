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


export const UserLanding = () => {
    const [showPtScores, setShowPtScores] = useState(true)
    const [showPuScores, setShowPuScores]= useState(false)
    const [showRunScores, setShowRunScores]= useState(false)
    const [showSuScores,  setShowSuScores]= useState(false)

    const { userData, setUserData, members, setMembers } = useContext(AppContext)
    return (
        <>
            <NavBar />
            <SubHead>
                <InfoButton>Height</InfoButton>
                <InfoButton>Weight</InfoButton>
                <InfoButton>PT Score</InfoButton>
            </SubHead>
            <Container>
                <LineGraph />
                <button style={{ cursor: 'pointer' }} onClick={() => {
                    setShowPtScores(true)
                    setShowPuScores(false)
                    setShowSuScores(false)
                    setShowRunScores(false)
                }}>Total Scores</button>
                <button style={{ cursor: 'pointer' }} onClick={() => {
                    setShowPuScores(true)
                    setShowPtScores(false)
                    setShowSuScores(false)
                    setShowRunScores(false)
                }}>Raw PU Scores</button>
                <button style={{ cursor: 'pointer' }} onClick={() => {
                    setShowSuScores(true)
                    setShowPtScores(false)
                    setShowPuScores(false)
                    setShowRunScores(false)
                }}>Raw SU Scores</button>
                <button style={{ cursor: 'pointer' }} onClick={() => {
                    setShowRunScores(true)
                    setShowPtScores(false)
                    setShowSuScores(false)
                    setShowPuScores(false)
                }}>Raw run Scores</button>
                <WeightLineGraph />
            </Container>
        </>
    )
}