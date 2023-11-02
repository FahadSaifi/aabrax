import React from "react";
import "../assets/styles/Products.css";
import p1 from "../assets/images/p1.webp";

const Product = () => {
  return (
    <>
      <div className="products-wrapper">
        <div
          className="prod-heading-wrapper"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.3)) , url(" +
              p1 +
              ")",
          }}
        >
          <h1 className="prod-heading">I - Beam Conveyor</h1>
          <p className="prod-tagline">
            Automation Production and Manufacturer Automation System - I-Beam
            Conveyors
          </p>
        </div>
        <div className="container">
          <div className="prod-content">
            <div className="prod-desc">
              <div className="prod-desc-left">
                <img src={p1} alt="prod" className="prod-desc-img" />
              </div>
              <div className="prod-desc-right">
                <h2 className="prod-info-title">I - Beam Conveyor</h2>
                <p className="prod-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime perferendis amet voluptas est, veritatis facilis odit,
                  autem ducimus atque ea iste nesciunt excepturi magni sint
                  laborum totam. Assumenda nemo quis delectus aliquam eius sed
                  dicta sapiente iusto quaerat atque doloremque nisi corporis
                  laudantium numquam, quam ipsa ipsam doloribus? Aperiam,
                  doloribus.
                  <br />
                  <br />
                  laborum totam. Assumenda nemo quis delectus aliquam eius sed
                  dicta sapiente iusto quaerat atque doloremque nisi corporis
                  laudantium numquam, quam ipsa ipsam doloribus? Aperiam,
                  doloribus.
                </p>
              </div>
            </div>
            <h2 className="prod-features">Features of I - Beam Conveyor</h2>
            <ul className="prod-list">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Voluptas quis aut odio deleniti.</li>
              <li>Modi fugit voluptates minus velit.</li>
              <li>Eum fugit debitis soluta nesciunt!</li>
              <li>Cum tenetur quibusdam possimus incidunt!</li>
            </ul>
            <h2 className="prod-features">Advantages of I - Beam Conveyor</h2>
            <ul className="prod-list">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Voluptas quis aut odio deleniti.</li>
              <li>Modi fugit voluptates minus velit.</li>
              <li>Eum fugit debitis soluta nesciunt!</li>
              <li>Cum tenetur quibusdam possimus incidunt!</li>
            </ul>
            <h2 className="applications">I - Beam Conveyor Applications</h2>
            <ul className="prod-list">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Voluptas quis aut odio deleniti.</li>
              <li>Modi fugit voluptates minus velit.</li>
              <li>Eum fugit debitis soluta nesciunt!</li>
              <li>Cum tenetur quibusdam possimus incidunt!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
