import React, { useEffect, useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  //Parse from localStorage
  const existingData = JSON.parse(localStorage.getItem('cars')) || [];

  const handleClick = () => {
    const newCar = {
      model,
      year,
      mileage
    };
    //Push new person to array
    const updatedData = [...existingData,newCar]
    //Add to localStorage
    localStorage.setItem('cars', JSON.stringify(updatedData));
    alert("Car Added");
  }
  return (
    <div>
      <h1>Add A Car</h1>
      <input 
      placeholder="Model"
      type="text"
      value={model}
      onChange={(e) => setModel(e.target.value)}
      />
      <br></br>
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
      <br></br>
      <hr></hr>
      <button onClick={handleClick}>Add</button>
      <br></br>
      <Link to={`/tryValue/`}>Filter Page</Link>
      <br></br>
    </div>
  );
}

export default HomePage;
