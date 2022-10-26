import React, { useEffect, useState } from "react";
import json from "../../data.json";
import Loader from "../Loaders/Loader";
import EjeVentas from "./elements/EjeVentas";
import Listas from "./elements/Listas";
import Axios from "axios";

const Graphics = () => {
  const [values, setValues] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const arr = (values) => {
    setValues(values);
  };

  useEffect(() => {
    const local = false;
    if (!local) {
      Axios.get(
        "https://my-json-server.typicode.com/Pep3M/demo-grafico-api/data"
      )
        .then((result) => {
          if (!result?.data) return;
          setLoading(false);
          setData(result.data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setData(json);
        });
    } else {
      setLoading(false);
      setData(json);
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 100px)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "calc(100vh - 100px)",
            justifyContent: "center",
          }}
        >
          <Listas data={json} values={arr} />
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
      )}
    </div>
  );
};

export default Graphics;
