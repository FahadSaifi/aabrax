import React from "react";
import { prodData } from "../data/ProdData";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { tableData } from "../data/TableData";
import "../assets/styles/Products.css";

const Product = () => {
  const [right, setRight] = useState();
  const { id } = useParams();

  const filtData = prodData.filter((elm) => {
    return elm.id == id;
  });
  const filterTable = tableData.filter((elm) => {
    return elm.id !== 1 && elm.id == id;
  });
  const filterTable2 = tableData.filter((elm) => {
    return elm.id == 1;
  });

  useEffect(() => {
    document.title = "Aabrax | Products";
    id == 1 ? setRight(true) : setRight(false);
    window.scrollTo(0, 0);
  }, [id]);

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
                {elm.features.map((item, ind) => {
                  return <li key={ind}>{item}</li>;
                })}
              </ul>
              <h2 className="prod-features">
                Technical Data about Our {elm.secondTitle}
              </h2>
              <div className="table-wrapper">
                <table className="technical-data-table">
                  <thead className="technical-data-head">
                    {right
                      ? filterTable2.map((elm) => {
                          return (
                            <React.Fragment key={elm.id}>
                              <tr className="technical-data-row">
                                {elm.model.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.chain.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.trolley.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.track.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.wc.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.drive.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.tensionUnit.map((item, ind) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={ind}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                            </React.Fragment>
                          );
                        })
                      : filterTable.map((elm) => {
                          return (
                            <React.Fragment key={elm.id}>
                              <tr className="technical-data-row">
                                {elm.cp.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.lw.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.gd.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.Sb.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.ex.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.lk.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.bg.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.tk.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="technical-data-row">
                                {elm.wc.map((item, index) => {
                                  return (
                                    <td
                                      className="technical-data-content"
                                      key={index}
                                    >
                                      {item}
                                    </td>
                                  );
                                })}
                              </tr>
                            </React.Fragment>
                          );
                        })}
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
