import React from 'react';
import '../assets/styles/Homecontact.css';
import { IoLocationSharp, IoCall ,} from "react-icons/io5";
import { FaTelegramPlane, FaGlobeAsia } from "react-icons/fa";

const Homecontact = () => {
  return (
    <>
      <div className="contact-container container">
        <h2 className="home-heading contact">
          <span className="heading">Contact Us</span>
        </h2>
        <table className="homecontact-body">
          <tr>
            <td className="contact-info">
              <h3>Let's get in touch</h3>
              <p>Lorem ipsum dolor sit  adipisicing elit.</p>
              <table className="contact-links">
                <tr className="address">
                  <td><IoLocationSharp className="icons"/></td>
                  <td><b>Address:</b> XXY, sotruk <br />kyorlhiogheuo, johyr-118</td>
                </tr>
                <tr className="call">
                  <td><IoCall className="icons"/></td>
                  <td><b>Phone:</b> +00 9999 999</td>
                </tr>
                <tr className="email">
                  <td><FaTelegramPlane className="icons"/></td>
                  <td><b>Email:</b> info@yoursite.com</td>
                </tr>
                <tr className="website">
                  <td><FaGlobeAsia className="icons"/></td>
                  <td><b>Website:</b> yoursite.com</td>
                </tr>
              </table>
            </td>

            <td className="contact-form">
              <h3>Get in touch</h3>
              <form action="">
                  <div className="name-email">
                    <div className="name">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" placeholder="Name" required/>
                    </div>
                    <div className="email">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="Email" required/>
                    </div>
                  </div>
                  
                  <label htmlFor="sub">Subject</label>
                  <input type="text" id="sub" placeholder="Subject" required/>

                  <label htmlFor="msg">Message</label>
                  <textarea name="msg" id="msg" rows="5" placeholder="Message" required></textarea>

                  <input type="submit" value="Send Message" />

              </form>
            </td>
          </tr>
          

        </table>
      </div>
    </>
  )
}

export default Homecontact