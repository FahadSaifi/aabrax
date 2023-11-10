import React from 'react';
import "../assets/styles/Heading.css";

const Heading = ({text}) => {
  return (
    <h2 className="secondary-heading">{text}</h2>
  )
}

export default Heading