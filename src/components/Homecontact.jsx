import React from "react";
import "../assets/styles/Homecontact.css";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { FaTelegramPlane, FaGlobeAsia } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./Heading";

const Homecontact = () => {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    msg: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://saifi.co.in/mail.php",
      withCredentials: false,
      header: "Access-Control-Allow-Origin: *",
      data: {
        fname: input.fname,
        lname: input.lname,
        email: input.email,
        phone: input.phone,
        msg: input.msg,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "Aabrax | Contact Us";
  }, []);
  return (
    <>
      <div className="contact-container container">
        <Heading text={"Contact Us"} />
        <div className="homecontact-body">
          <div className="contact-info">
            <h3>Let's get in touch</h3>
            <p>Lorem ipsum dolor sit adipisicing elit.</p>
            <div className="contact-links">
              <div className="info-row">
                <div>
                  <IoLocationSharp className="icons" />
                </div>
                <div>
                  <b className="info-heading">Address:</b> XXY, sotruk <br />
                  kyorlhiogheuo, johyr-118
                </div>
              </div>
              <div className="info-row">
                <div>
                  <IoCall className="icons" />
                </div>
                <div>
                  <b className="info-heading">Phone:</b> +00 9999 999
                </div>
              </div>
              <div className="info-row">
                <div>
                  <FaTelegramPlane className="icons" />
                </div>
                <div>
                  <b className="info-heading">Email:</b> info@yoursite.com
                </div>
              </div>
              <div className="info-row">
                <div>
                  <FaGlobeAsia className="icons" />
                </div>
                <div>
                  <b className="info-heading">Website:</b> yoursite.com
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Get in touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <div className="fname">
                  <label className="contact-labels" htmlFor="fname">
                    First Name
                  </label>
                  <input
                    className="contact-inputs"
                    name="fname"
                    type="text"
                    id="fname"
                    placeholder="first name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="lname">
                  <label className="contact-labels" htmlFor="lname">
                    Last Name
                  </label>
                  <input
                    className="contact-inputs"
                    name="lname"
                    type="text"
                    id="lname"
                    placeholder="last name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="email">
                <label className="contact-labels" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="contact-inputs"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="phone">
                <label className="contact-labels" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="contact-inputs"
                  name="phone"
                  type="number"
                  id="phone"
                  placeholder="+91 1234567890"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="msg">
                <label className="contact-labels" htmlFor="msg">
                  Message
                </label>
                <textarea
                  className="contact-inputs"
                  name="msg"
                  id="msg"
                  rows="4"
                  placeholder="message"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <input
                className="contact-inputs"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecontact;
