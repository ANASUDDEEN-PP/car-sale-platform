import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './assets/admin-dash-style.css';

//import image
import adminProfile from '../Images/profile-admin.jpg';

export default class adminDash extends Component {
  render() {
    return (
      <div className='admin-dash-section'>
        <div className='admin-main-container'>
            <div className='profile-section'>
                <img className='admin-profile-pic' src={adminProfile} alt='adminprofileimage'/>
                <h1 className='admin-name'>ANASUDDEEN PP</h1> 
                <p className='destination'>Admin</p>
                <div className='admin-buttons'>
                    <Link to='#' className="edit-profile">Edit Profile</Link>
                    <Link to='/' className='logout-button'>Logout</Link>
                </div>
            </div>
            <div className='partition'/>
            <div className='content-section'>
                <div className='modules'>
                    <h3 className='module-head'>OUR CAR SERVICE</h3>
                    <div className='module-links'>
                        <Link to='/newcar' className='add-car'>Add a car</Link>
                        <Link to='/listcar' className='add-car'>List Car details</Link>
                    </div>
                </div>

                <div className='modules'>
                    <h3 className='module-head'>OUR ORDERS</h3>
                    <div className='module-links'>
                        <Link to='#' className='add-car'>Our Order List</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
