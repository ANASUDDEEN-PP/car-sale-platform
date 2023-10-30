import React, { Component } from 'react'
import './assets/individualCars.css'
import { Link } from 'react-router-dom';

//import images
import vehicleOne from '../Images/car-one.jpg';
import backImage from '../Images/back.png'


export default class individualCars extends Component {
  render() {
    return (
      <div className='cars-main-container'>
        <div className='cars-sub-container'>
            <div className='car-div-one'>
                <Link to='/vehicleList' className='back-button'><img className='back-image' src={backImage} alt='back-bn'/></Link>
                <img className='car-pic' src={vehicleOne} alt="car-one" />
                <h1 className='car-title'>KIA SELTOS</h1>
                <p className='car-model-p'>2023 Model</p>
            </div>

            <div className='car-div-two'>
                <div className='car-sub-div'>
                  <h4 className='car-title-two'>KIA SELTOS</h4>
                  <p className='car-model-two'>2023 Model</p>

                  <h5 className='description-title'>Description</h5>
                  <p className='description-content'>Stepping inside, you'll find a spacious and well-appointed interior that welcomes you with a premium feel. Plush seating and a thoughtfully designed dashboard create an atmosphere of elegance and functionality. With features like a responsive infotainment system, advanced safety technology, and ample cargo space, this Kia car ensures that your journeys are as enjoyable as they are secure.</p>
                  <h1 className='price-text'>15,00,000</h1>
                  <p className='price-sub-text'>EMI Available</p>

                  <div className='indvidualcar-buttons'>
                    <button className='addtochart'>ADD TO CHART</button>
                    <Link to='/paymentpage' className='payment'>PAY NOW</Link>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
