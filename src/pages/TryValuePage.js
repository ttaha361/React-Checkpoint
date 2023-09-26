import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TryValuePage() {
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  //Parse from localStorage
  const existingData = JSON.parse(localStorage.getItem('cars')) || [];
  const filteredArray = [];
  
  const handleClick = () => {

    for(let i = 0; i < existingData.length; i++){
      if(year < existingData[i].year && Number(existingData[i].mileage) < Number(mileage)){
        filteredArray.push(existingData[i]);
        console.log("Found");
      }
    }
    localStorage.setItem('filtercar', JSON.stringify(filteredArray));
    navigate('/newRoute');
  }
  return (
    <div>
      <h1>Filter Page</h1>
      <input 
      placeholder="Year"
      type="number"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      />
      <br></br>
      <input 
      placeholder="Mileage"
      type="number"
      value={mileage}
      onChange={(e) => setMileage(e.target.value)}
      />
      <hr></hr>
      <button onClick={handleClick}>Filter</button>
      <br></br>
    </div>
  );
}

export default TryValuePage;
