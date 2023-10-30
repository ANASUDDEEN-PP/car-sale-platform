import React, { Component } from 'react'
import { Link } from 'react-router-dom';                                //import link module
import './assets/Home.css';                                         //link css


//import images
import myLogo from '../Images/car-shop-logo.png';
import myMainimage from '../Images/car-main-image.jpg';
import verified from '../Images/verified.png';
import warranty from '../Images/warranty.png';
import emi from '../Images/emi.png';
import vehicleOne from '../Images/car-one.jpg';
import vehicleTwo from '../Images/car-two.jpg';
import vehicleThree from '../Images/car-three.png';
import vehicleFour from '../Images/car-four.jpeg';


//start home app and export it
export default class Home extends Component {
  render() {
    return (
      <div className='section-one'>
        <div className='Nav-bar'>
             <img className='logo-one' src={myLogo} alt='car-sale-logo' />
             
            <ul className='links'>
                <li><Link to="/vehicleList" className='nav-link'>Available Vehicles</Link></li>
                <li><Link to="/about" className='nav-link'>About US</Link></li>
                <li><Link to="#" className='nav-link'>Contact Us</Link></li>
                <div className='login-btn'>
                    <li><Link to="/userLogin" className='login-btn-text'>Login Here</Link></li>
                </div>
            </ul>    
        </div>
        <div className='main-image-section'>
            <img className='main-car-image' src={myMainimage} alt='titleImages'/>
            <h1 className='main-title'>WELCOME TO <br /><span>CAR SALE</span> PLATFORM</h1>
            <div className='learnmore-btn'>
                <Link to="#" className='learnmore-text'>Learn More</Link>
            </div>
        </div>
        {/* Our Featres List */}
        <div className='container-one'>
            <div className='column-one'>
                <img className='column-logo' src={verified} alt='columnlogo'/>
                <h5 className='column-head'>Good And Neat</h5>
                <p>we provide good and neat Vehicles with two year Warranty</p>
            </div>

            <div className='column-one'>
                <img className='column-logo' src={warranty} alt='columnlogo'/>
                <h5 className='column-head'>Two Year Warranty</h5>
                <p>we provide good and neat Vehicles with two year Warranty</p>
            </div>

            <div className='column-one'>
                <img className='column-logo' src={emi} alt='columnlogo'/>
                <h5 className='column-head'>EMI Available</h5>
                <p>Every Cars have EMI. You wil choose your own option</p>
            </div>
        </div>
        {/* Vehicle Details Section */}
        <div className='vehicle-details'>
            <div className='column-two'>
                <img className='cars-pic' src={vehicleOne} alt='vehicleOne'/>
                <div className='car-details'>
                    <h2 className='carTitle'>KIA CELTOS</h2>
                    <h3 className='carRate'>$ 13 Lakh</h3>
                    <div className='Car-buttons'>
                        <div className='moreInfo-btn'>
                            <Link to='/userLogin' className='More-Info'>More Info</Link>
                        </div>
                        <button className='chartBtn'>Add to Chart</button>
                    </div>
                </div>
            </div>

            <div className='column-two'>
                <img className='cars-pic' src={vehicleTwo} alt='vehicleOne'/>
                <div className='car-details'>
                    <h2 className='carTitle'>POLO GT</h2>
                    <h3 className='carRate'>$ 10 Lakh</h3>
                    <div className='Car-buttons'>
                        <div className='moreInfo-btn'>
                            <Link to='/userLogin' className='More-Info'>More Info</Link>
                        </div>
                        <button className='chartBtn'>Add to Chart</button>
                    </div>
                </div>
            </div>

            <div className='column-two'>
                <img className='cars-pic' src={vehicleThree} alt='vehicleOne'/>
                <div className='car-details'>
                    <h2 className='carTitle'>INNOVO CREYSTA</h2>
                    <h3 className='carRate'>$ 31 Lakh</h3>
                    <div className='Car-buttons'>
                        <div className='moreInfo-btn'>
                            <Link to='/userLogin' className='More-Info'>More Info</Link>
                        </div>
                        <button className='chartBtn'>Add to Chart</button>
                    </div>
                </div>
            </div>

            <div className='column-two'>
                <img className='cars-pic' src={vehicleFour} alt='vehicleOne'/>
                <div className='car-details'>
                    <h2 className='carTitle'>FORTUNER</h2>
                    <h3 className='carRate'>$ 32 Lakh</h3>
                    <div className='Car-buttons'>
                        <div className='moreInfo-btn'>
                            <Link to='/userLogin' className='More-Info'>More Info</Link>
                        </div>
                        <button className='chartBtn'>Add to Chart</button>
                    </div>
                </div>
            </div>

            <div className='viewMore'>
                <Link to='/vehicleList' className='view-text'>More</Link>
            </div>
        </div>
        <footer className="footer">
            <h4>AUTO SHOP CAR SALE PLATFORM</h4>
            <p>Mada By Anasuddeen PP &copy; 2023 AUTO SHOP</p>
        </footer>
      </div>
    )
  }
}
