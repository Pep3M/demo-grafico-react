import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader" >
      <h1 style={{marginTop: 100, color: '#6794E0'}}>Loading...</h1>
      <div className="bar"></div>
    </div>
  );
};

export default Loader;
