import React, { useState } from "react";
import data from "../../data.json";
import EjeVentas from "./elements/EjeVentas";
import Listas from "./elements/Listas";

const Graphics = () => {
  const [values, setValues] = useState([0]);

  const arr = (values) => {
    setValues(values);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 100px)",
      }}
    >
      <Listas data={data} values={arr} />
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
        <EjeVentas values={values} />
        <div
          style={{
            marginTop: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#88B3E7",
              borderRadius: "50%",
              marginRight: 10,
            }}
          />

          <h4 style={{ fontSize: 20 }}>Ventas</h4>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
