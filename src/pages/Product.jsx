import React from "react";
import { prodData } from "../data/ProdData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "../assets/styles/Products.css";

const Product = () => {
  const { id } = useParams();

  const filtData = prodData.filter((elm) => {
    return elm.id == id;
  });

  useEffect(()=>{
    document.title = "Aabrax | Products"
  },[])

  return (
    <>
      {filtData.map((elm) => (
        <div className="products-wrapper" key={elm.id}>
          <div
            className="prod-heading-wrapper"
            style={{
              backgroundImage:
                "linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.3)) , url(" +
                elm.mainImg +
                ")",
            }}
          >
            <h1 className="prod-heading">{elm.title}</h1>
            <p className="prod-tagline">{elm.tagline}</p>
          </div>
          <div className="container">
            <div className="prod-content">
              <div className="prod-desc">
                <div className="prod-desc-left">
                  <img
                    src={elm.secondImg}
                    alt="prod"
                    className="prod-desc-img"
                  />
                </div>
                <div className="prod-desc-right">
                  <h2 className="prod-info-title">{elm.secondTitle}</h2>
                  <p className="prod-info">{elm.desc}</p>
                </div>
              </div>
              <h2 className="prod-features">
                Features of our {elm.secondTitle}
              </h2>
              <ul className="prod-list">
                {elm.features.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <h2 className="prod-features">
                Technical Data about Our {elm.secondTitle}
              </h2>
              <ul className="prod-list">
                {elm.technicalData.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
