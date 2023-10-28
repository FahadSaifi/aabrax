import React from 'react'
import dark from '../assets/images/dark.jpg';
import '../assets/styles/Homeservices.css';
const Homeservices = () => {
  return (
    <div className="homeservices">
      <h2 className="homeservice-heading">
        <span className="heading">Why Choose Us</span>
      </h2>
      <p className='homeservice-description'>
        Why choose us section design HTML is created by ussing Bootstrap and custom HTML CSS. This our  services section card are more beatiful with pure css hover effects.
      </p>
      <div className='card-warper'>
        <div className="card">
          <h2>why LOrem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error, aliquam facilis et sapiente culpa sit porro deleniti id quibusdam!</p>
        </div>
        <div className="card">
          <h2>why LOrem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error, aliquam facilis et sapiente culpa sit porro deleniti id quibusdam!</p>
        </div>
        <div className="card">
          <h2>why LOrem ipsum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error, aliquam facilis et sapiente culpa sit porro deleniti id quibusdam!</p>
        </div>
      </div>
    </div>

  )
}

export default Homeservices