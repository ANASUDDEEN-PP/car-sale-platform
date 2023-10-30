import React, { useState, useEffect } from 'react';
import './assets/listCar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListCar() {
  // Use camelCase for function and variable names (e.g., ListCar instead of listCar)
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    // Use a relative URL or an environment variable for the API endpoint
    axios.get('http://localhost:5001/getcars') // Replace with your API endpoint
      .then(response => {
        setCarData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='listcar-main-section'>
      <div className='listcar-main-container'>
        {/* Move the table header outside of the map function */}
        <table className='listcar-table'>
          <thead>
            <tr>
              <th>CAR NAME</th>
              <th>CAR MODEL</th>
              <th>MNF YEAR</th>
              <th>CAR DESCRIPTION</th>
              <th>CAR PRICE</th>
              <th>EDIT BUTTONS</th>
              <th>DELETE BUTTONS</th>
            </tr>
          </thead>
          <tbody>
            {carData.map(car => (
              <tr key={car.id}>
                <td>{car.carname}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.description}</td>
                <td>{car.price}</td>
                <td><button className='editButtons'>Edit</button></td>
                <td><button className='deleteButtons'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table><br />
        <Link className='car-link' to='/admindashboard'>Go back To Dashboard</Link>
      </div>
    </div>
  );
}

export default ListCar;
