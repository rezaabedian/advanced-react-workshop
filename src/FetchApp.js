import React from 'react';
import fetchData from "./fetchData";

const FetchApp = ({loading, data}) => (
    <div>
        <div style={{fontFamily: "'Fira Sans', sans-serif"}}>Your data is {loading ? 'still loading' : JSON.stringify(data)}</div>
    </div>
);

const fd = fetchData('https://swapi.co/api/people/1');
console.log(fd, typeof fd);
const x = fd(FetchApp);
console.log(x);

export default x;