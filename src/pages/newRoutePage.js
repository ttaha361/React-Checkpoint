import React from "react";

function newRoutePage(){
    const filteredData = JSON.parse(localStorage.getItem('filtercar')) || [];
  return (
    <div>
      <h1>Filtered Results</h1>
      <ul>
        {filteredData.map((car, index) => (
          <li key={index}>
            <strong>Model:</strong> {car.model}<br />
            <strong>Year:</strong> {car.year}<br />
            <strong>Mileage:</strong> {car.mileage}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default newRoutePage;