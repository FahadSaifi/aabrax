import React from 'react';
import '../assets/styles/Homecontact.css';
import img from '../assets/images/contact-form.jpg';

const Homecontact = () => {
  return (
    <>
      <div className="contact-container">
        <h2 className="home-heading">
          <span className="heading">Contact Us</span>
        </h2>
        <div className="homecontact-body">
          <div className="contact-form">
            <form action="">

                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter Your Full Name" required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email Address" required/>
                
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter Your Phone Number" required/>

                <label htmlFor="msg">Message</label>
                <textarea name="msg" id="msg" rows="5" placeholder="Write Something..."></textarea>

                <input type="submit" value="Submit" />

            </form>
          </div>
          <div className="contact-img">
            <img src={img} alt="contact us img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homecontact