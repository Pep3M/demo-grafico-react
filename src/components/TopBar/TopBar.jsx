import React from "react";

const TopBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#6794E0",
        color: "white",
        width: "100vw",
        height: "50px",
      }}
    >
      <p style={{ marginRight: "10vw" }}>Menu</p>
      <div
        style={{
          width: 20,
          height: 20,
          backgroundColor: "red",
          borderRadius: "50%",
          marginRight: 5,
        }}
      ></div>
      <p style={{ marginRight: "50vw" }}>User Name</p>
      <p>Sales Report</p>
    </div>
  );
};

export default TopBar;
