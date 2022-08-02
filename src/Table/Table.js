import React from 'react'
import { useState, useEffect } from 'react';

const Table = () => {
  const [covidData, setCovidData] = useState([]);
  useEffect(() => {
    fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(res => res.json())
    .then(
      (result) => {
        setCovidData(result)
        console.log(covidData);
      }
    )
  })

  const display = covidData.map((data)=>{
    if (data.date >= '20210101' && data.date <= '20210131') return (
      <tr>
        <td>{data.date}</td>
        <td>{data.positive}</td>
        <td>{data.hospitalizedCumulative}</td>
      </tr>
    )
  });

  const displayDate = covidData.map((data)=>{
    if (data.date >= '20210101' && data.date <= '20210131') return (
      <th>{data.date}</th>
    )
  });

  const displayData = covidData.map((data)=>{
    if (data.date >= '20210101' && data.date <= '20210131') return (
      <td>{data.positive}</td>
    )
  });
    
  return (
    <>
      <table>
        <tr>
          <th>Date</th>
          <th>Number of positive</th>
          <th>Number of hospitalized cases</th>
        </tr>
        {display}
      </table>
      <table>
        <tr>{displayDate}</tr>
        <tr>{displayData}</tr>
      </table>
    </>
  )
}

export default Table