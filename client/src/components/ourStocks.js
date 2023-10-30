import React, { Component } from 'react'
import { Link } from 'react-router-dom';                                //import link module

//import images
import myLogo from '../Images/car-shop-logo.png';


export default class ourStocks extends Component {
  render() {
    return (
        <div className='Nav-bar'>
        <img className='logo-one' src={myLogo} alt='car-sale-logo' />
        
       <ul className='links'>
           <li><Link to="#" className='nav-link'>Available Vehicles</Link></li>
           <li><Link to="#" className='nav-link'>About US</Link></li>
           <li><Link to="#" className='nav-link'>Contact Us</Link></li>
           <div className='login-btn'>
               <li><Link to="#" className='login-btn-text'>Login Here</Link></li>
           </div>
       </ul>    
   </div>
    )
  }
}
