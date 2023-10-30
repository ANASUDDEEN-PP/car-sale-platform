import React ,{useState, useEffect}from 'react';
import './assets/ourStock.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

//import images
import myLogo from '../Images/car-shop-logo.png';
import vehicleOne from '../Images/car-one.jpg';
// import vehicleTwo from '../Images/car-two.jpg';
// import vehicleThree from '../Images/car-three.png';
// import vehicleFour from '../Images/car-four.jpeg';
import chartIcon from '../Images/grocery-store.png';
import profileIcon from '../Images/user.png';


function VehicleList() {

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
    <div>
        <div className='Nav-bar'>
             <img className='logo-one' src={myLogo} alt='car-sale-logo' />
             
            <ul className='links'>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/about" className='nav-link'>About US</Link></li>
                <li><Link to="#" className='nav-link'>Contact Us</Link></li>

                <div className='profile-details'>
                  <img className='profileIcon' src={profileIcon} alt='image-icons' />
                </div>

                <div className='chart-btn'>
                    <li><Link to="#" className='-btn-text'><img className='chart-icon' src={chartIcon} alt='chart-icon'></img></Link></li>
                </div>
            </ul>    
        </div>
        {/* Vehicle Details Section */}
        <div className='car-details'>
            <h1 className='car-heading'>Available Vehicles</h1>
            <div className='vehicle-details'>

            
            {carData.map(car => (    
            <div className='column-two' key={car.id}>
                <img className='cars-pic' src={vehicleOne} alt='vehicleOne'/>
                <div className='car-details'>
                    <h2 className='carTitle'>{car.carname} {car.model}</h2>
                    <h3 className='carRate'>{car.price}</h3>
                    <div className='Car-buttons'>
                        <div className='moreInfo-btn'>
                            <Link to='/individualcars' className='More-Info'>More Info</Link>
                        </div>
                        <button className='chartBtn'>Add to Chart</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
);
}

export default VehicleList;
