import React from "react";
import "../assets/styles/Contactus.css";
import contactImg from "../assets/images/contact.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Contactus = () => {
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
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="contact-body">
          <div className="contact-img">
            <img src={contactImg} alt="model image" />
          </div>
          <div className="contact-form-column">
            <h3 className="contact-heading">Get in touch</h3>
            <p className="contact-tagline">
              Our friendly team would love to hear from you.
            </p>
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
                    placeholder="First name"
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
                    placeholder="Last name"
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
                  placeholder="Message"
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

export default Contactus;
