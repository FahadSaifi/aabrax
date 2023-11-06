import React from "react";
import "../assets/styles/about.css";
import { Link } from "react-router-dom";
import founder from "../assets/images/founder.jpg";

const About = () => {
  return (
    <>
      <div className="about-hero">
        <h2>Aabrax Overhead Conveyor</h2>
        <p>Engineering high-quality overhead conveyors for any application.</p>
        <Link to="/contact" className="contact-btn">
          Contact Us
        </Link>
      </div>
      <div className="container">
        <div className="about-us section">
          <h2 className="home-heading">
            <span className="heading">About Us</span>
          </h2>
          <p className="about-description">
            Aabrax overhead conveyor is a family-owned and operated overhead
            conveyor company with over 10 years of experience. We are mainly
            focused on overhead conveyors, but we also manufacture other
            material handling equipment and components. Our team has extensive
            knowledge in counterbalance systems, load-processing systems,
            trolley transportation systems, industrial automation control
            software development and much more. Aabrax is committed to customer
            satisfaction through excellent customer service on every level –
            technical support before installation or purchase; design
            engineering services; aftermarket parts availability; machine
            inspections; and installation supervision.
          </p>
        </div>
      </div>
      <div className="full-bg">
        <div className="container">
          <div className="company-details section">
            <h2 className="home-heading">
              <span className="heading">Company Details</span>
            </h2>
            <p className="company-details">
              The company was founded in 2013 by Mohammad Jareef and has since
              grown to become one of the leading manufacturers of overhead
              conveyors in the India. Aabrax Overhead Conveyor’s main work
              includes supplying, installing and commissioning complete lines or
              individual units for various industries including food processing
              plants, warehouses, supermarkets, hospitals, airports and ports.
              The company also offers after sales service with spare parts
              provision on request. <br />
              <br />
              Our company specializes in the design, engineering and
              manufacturing of overhead conveyor systems. Aabrax Overhead
              Conveyors has been supplying quality equipment to leading
              companies in the industry for over two decades. Our products are
              used globally by a diverse range of industries including food and
              beverage, logistics, chemical processing, pharmaceuticals and many
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="founder section">
          <div className="founder-photo">
            <img src={founder} alt="founder-img" />
          </div>
          <div className="founder-details">
            <h2 className="home-heading founder-heading">
              <span className="">Our Founder</span>
            </h2>
            <p>
              Mohammad Jareef is the proud owner of Aabrax Overhead Conveyor, a
              leading conveyor manufacturer. Aabrax Overhead Conveyor has been
              supplying advanced overhead conveyor systems since 2013, and
              Mohammad is dedicated to continuing this tradition of excellence.
              His ongoing product development and improvement has led Aabrax
              Overhead Conveyor to become a top producer of a variety of
              conveyor systems, including Cleaning and pretreatment,
              Entertainment Industry works, Woodworking Operations, wet spray
              painting, Tank and Cylinder Finishing, Powder Coating, Fan testing
              Varnish Conveyor, Garment handling systems, Paint Shop Conveyor,
              and Finishing Doors and Windows Conveyors.
            </p>
          </div>
        </div>
      </div>
      <div className="full-bg">
        <div className="container">
          <div className="our-vision section">
            <h2 className="home-heading">
              <span className="heading">Our Vision and Mission</span>
            </h2>
            <p className="vision">
              Aabrax Overhead Conveyor is a leading supplier of overhead
              conveyor systems for the commercial, industrial, and manufacturing
              sectors. Our mission is to serve our customers with affordable,
              technically sound and exceptional customer service; To provide
              continued customer satisfaction to our customers by bringing out
              the best in people, process technology with top quality – all
              while focusing on safety first We offer a complete line of
              overhead conveyors to suit your needs. <br />
              <br />
              We believe in creating innovative products that are simple to
              install and maintain. Our company was focused on the principle of
              “making great products” with uncompromising quality. Aabrax
              Overhead Conveyor has been an innovator in the industry since its
              inception over 10 years ago. The company’s success stems from
              focusing on what it does best: engineering high-quality overhead
              conveyors for any application.” The company has grown
              exponentially over the past decade as more companies recognize
              long-term success rather than just short-term fixes. Today Aabrax
              Overhead Conveyor is one of fastest growing Overhead Conveyor
              providers in India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
