import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { LoginPage } from "./components/LoginPage";
import { UserLanding } from "./components/UserLanding";
import Dropdown from "./components/Dropdown";

/*
export function App() {
  const URL = 'http://localhost:8080/';

  const [data, setData] = useState([]);

  useEffect(() => {
  fetch(URL)
  .then((res) => res.json())
  .then((data) => setData(data))
  }, [])
*/
function App() {
  const [members, setMembers] = useState([])
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    name: '',
    branch:'',
    gender:'',
    physicalLimitations:'',
    theme: "light"
  });

  

  // api fetch
  useEffect(() => {
    fetch('http://localhost:8080/member_info')
        .then(res => res.json())
        .then(data =>
            setMembers(data)
          )
  }, []);

  //getter & setter
  const value = {
    userData,
    setUserData,
    members,
    setMembers
  };

  return (
    <>
      <Router>
        <AppContext.Provider value={value}>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/member" element={<UserLanding />} />
            <Route exact path="/member/:username" element={<UserLanding />} />
          
          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
