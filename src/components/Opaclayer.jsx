import React from "react";
import { FaTimes } from "react-icons/fa";
import "../assets/styles/Opaclayer.css";
import tick from "../assets/images/tick.gif";

const Opaclayer = ({ load }) => {
  return (
    <>
      <div className="layer">
        <div className="layer-box">
          <div className="layer-close-btn" onClick={() => load(false)}>
            <FaTimes className="close" />
          </div>
          <img src={tick} alt="tick" className="tick-right" />
          <h3 className="form-data-sent">Sent Succesfully</h3>
        </div>
      </div>
    </>
  );
};

export default Opaclayer;
