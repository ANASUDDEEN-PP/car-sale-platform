import React from 'react';
import './assets/About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
   <div className='section'>
     <div className="about-container">
      <h1>About Us</h1>
      <p>
      Car Sale is your premier destination for high-quality vehicles. With a commitment to excellence, we offer a wide selection of top-notch cars, each meticulously inspected for quality and reliability. Our mission is to provide customers with the ultimate car-buying experience, offering competitive prices and flexible financing options. Our team of experts is dedicated to helping you find the perfect vehicle that suits your needs and preferences. Whether you're seeking a sleek sedan, a rugged SUV, or a powerful sports car, Car Sale has you covered. Trust in our decades of expertise and reputation for transparency and integrity in the automotive industry. Your dream car awaits at Car Sale.
      </p>
      <Link to='/' className='back-home'>Back to Home</Link>
    </div>
   </div>
  );
}

export default About;
