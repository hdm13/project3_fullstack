
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { AppContext } from "../AppContext";
import React, { useEffect, useState, useContext } from 'react'


// const LineChart = styled.table`

// `
const data1 = [
    { name: " Week 1", PtScore: 45 },
    { name: " Week 2", PtScore: 66 },
    { name: " Week 3", PtScore: 70 },
    { name: " Week 4", PtScore: 150 },
    { name: " Week 5", PtScore: 82 },
    { name: " Week 6", PtScore: 82 }
];

const data2 = [
    { name: " Week 1", PuScore: 45 },
    { name: " Week 2", PuScore: 66 },
    { name: " Week 3", PuScore: 70 },
    { name: " Week 4", PuScore: 80 },
    { name: " Week 5", PuScore: 10 },
    { name: " Week 6", PuScore: 45 }
];

const data3 = [
    { name: " Week 1", SuScore: 45 },
    { name: " Week 2", SuScore: 66 },
    { name: " Week 3", SuScore: 70 },
    { name: " Week 4", SuScore: 90 },
    { name: " Week 5", SuScore: 67 },
    { name: " Week 6", SuScore: 82 }
];

const data4 = [
    { name: " Week 1", RunScore: 45 },
    { name: " Week 2", RunScore: 66 },
    { name: " Week 3", RunScore: 70 },
    { name: " Week 4", RunScore: 150 },
    { name: " Week 5", RunScore: 82 },
    { name: " Week 6", RunScore: 82 }
];


const data5 = [
    { name: " Week 1", weight: 175 },
    { name: " Week 2", weight: 180 },
    { name: " Week 3", weight: 179 },
    { name: " Week 4", weight: 200 },
    { name: " Week 5", weight: 190 },
    { name: " Week 6", weight: 188 }
];

export const LineGraph = () => {
    // let data;
    // const { showPtScores, setShowPtScores, showPuScores, showSuScores, showRunScores, setShowPuScores, setShowSuScores, setShowRunScores } = useContext(AppContext)
    // showPtScores ? data = { data1 } : showPuScores ? data = { data2 } : showRunScores ? data = { data3 } : data = { data4 }




    return (
        <LineChart width={1050} height={400} data={data1} margin={{ top: 50, right: 20, bottom: 5, left: -20 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            {/* <Line type="monotone" dataKey="weight" stroke="82ca9d" /> */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}

export const WeightLineGraph = () => {
    return (
        <LineChart width={1050} height={400} data={data5} margin={{ top: 50, right: 20, bottom: 5, left: -20 }}>
            <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}

