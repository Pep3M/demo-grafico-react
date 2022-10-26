import React from "react";
import Bars from "../atoms/Bars";

const EjeVentas = () => {
  const max = 900;
  const scale = Array.from({ length: max / 100 + 1 }, (_, i) => i * 100);

  return (
    <div
      style={{
        width: "100%",
        height: "80%",
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
        <Bars />
      </div>
    </div>
  );
};

export default EjeVentas;
