import React from "react";
import Bars from "../atoms/Bars";

const EjeVentas = ({ values }) => {
  const max = Math.max.apply(null, values);
  const lenghtArr = max % 100 === 0 ? max / 100 + 1 : max / 100 + 2;
  const scale = Array.from({ length: lenghtArr }, (_, i) => i * 100);

  return (
    <div
      style={{
        width: "100%",
        height: "70%",
        display: "flex",
      }}
    >
      <p
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: 20,
        }}
      >
        Ventas
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
        }}
      >
        {scale.map((item) => (
          <p
            style={{
              margin: 0,
            }}
            key={item}
          >
            {item}
          </p>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: 20,
            marginBottom: -60,
            position: "absolute",
            bottom: 0,
            left: "50%",
          }}
        >
          Meses
        </p>
        {scale.map((item) => (
          <div
            style={{
              width: "calc(100% - 20px)",
              height: 1,
              backgroundColor: "rgba(0,0,0,0.1)",
              marginBlock: 7,
              marginTop: 11,
              marginInline: 10,
            }}
            key={item}
          />
        ))}
        <Bars data={values} max={[...scale].pop()} />
      </div>
    </div>
  );
};

export default EjeVentas;
