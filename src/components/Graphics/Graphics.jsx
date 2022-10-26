import React, { useState } from "react";
import data from "../../data.json";
import EjeVentas from "./elements/EjeVentas";
import Listas from "./elements/Listas";

const Graphics = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 100px)",
      }}
    >
      <Listas data={data} />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: 20,
            marginTop: 0,
            marginBottom: 40,
          }}
        >
          Sales By Month for:
        </p>
        <EjeVentas />
      </div>
    </div>
  );
};

export default Graphics;
