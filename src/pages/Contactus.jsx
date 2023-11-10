import React from "react";
import '../assets/styles/Contactus.css';
import contactImg from "../assets/images/contact.jpg";
import { useEffect } from "react";

const Contactus = () => {
  useEffect(()=>{
    document.title = "Aabrax | Contact Us"
  },[])
  return (
    <>
    <div className="container">
        <div className="contact-body">
            <div className="contact-img">
              <img src={contactImg} alt="model image" />
            </div>
            <div className="contact-form-column">
              <h3 className="contact-heading">Get in touch</h3>
              <p className="contact-tagline">Our friendly team would love to hear from you.</p>
              <form action="">
                  <div className="name">
                    <div className="fname">
                      <label className="contact-labels" htmlFor="fname">First Name</label>
                      <input className="contact-inputs" name="first-name" type="text" id="fname" placeholder="First name" required/>
                    </div>
                    <div className="lname">
                      <label className="contact-labels" htmlFor="lname">Last Name</label>
                      <input className="contact-inputs" name="last-name" type="text" id="lname" placeholder="Last name" required/>
                    </div>
                  </div>
                  <div className="email">
                      <label className="contact-labels" htmlFor="email">Email Address</label>
                      <input className="contact-inputs" name="email-address"type="email" id="email" placeholder="you@company.com" required/>
                  </div>
                  <div className="phone">
                    <label className="contact-labels" htmlFor="phone">Phone Number</label>
                    <input className="contact-inputs" name="phone-number" type="number" id="phone" placeholder="+91 1234567890" required/>
                  </div>
                  <div className="msg">
                    <label className="contact-labels" htmlFor="msg">Message</label>
                    <textarea className="contact-inputs" name="msg" id="msg" rows="4" placeholder="Message" required></textarea>
                  </div>

                  <input className="contact-inputs" type="submit" value="Send Message" />
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contactus;
