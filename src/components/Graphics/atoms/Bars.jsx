import React, { useState, useEffect } from "react";

const Bar = (props) => {
  const { name, percent } = props;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(percent);
  }, [percent]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "inherit",
        flexDirection: "column-reverse",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <p
        style={{
          marginTop: 5,
          marginBottom: -26,
        }}
      >
        {name}
      </p>
      <div
        style={{
          width: "10vw",
          height: `calc(${height}% - 18px)`,
          backgroundColor: "#88B3E7",
          marginBlock: 7,
          marginTop: 10,
          transition: "0.5s cubic-bezier(0,0,0,1)",
        }}
      />
    </div>
  );
};

const months = ["January", "February", "March", "April"];

const Bars = ({ data, max }) => {
  const percent = (part) => (part / max) * 100;
  console.log("percent", data[3], max, percent(data[3]));
  return (
    <div
      style={{
        width: "calc(100% - 20px)",
        height: "100%",
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        marginInline: 10,
      }}
    >
      {months.map((month, i) => (
        <Bar key={month} name={month} percent={percent(data[i])} />
      ))}
    </div>
  );
};

export default Bars;
