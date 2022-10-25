import React, { useState } from "react";
import data from "../../data.json";

const ListElement = ({ title, elements, callback }) => {
  const handlerChange = (event) => {
    callback(event.target.value);
  };

  return (
    <div
      style={{
        display: "inherit",
        alignItems: "center",
      }}
    >
      {elements ? (
        <>
          <p style={{ marginRight: 5 }}>{title}</p>
          <select
            id={title}
            name={title}
            onChange={handlerChange}
            defaultValue={elements[0]}
          >
            {elements.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const Graphics = () => {
  const categories = Object.keys(data);

  const [products, setProducts] = useState(Object.keys(data[categories[0]]));
  const [brands, setBrands] = useState(
    data[categories[0]][products[0]]?.brands
  );

  const [category, setCategory] = useState(categories[0] || "");
  const [product, setProduct] = useState(products[0] || "");
  const [brand, setBrand] = useState(brands[0] || "");

  const handleChangeCategory = (cat) => {
    setCategory(cat);
    const prods = Object.keys(data[cat]);
    const brnds = data[cat][prods[0]]?.brands;

    setProducts(prods);
    setBrands(brnds);

    setProduct(prods[0]);
    setBrand(brnds[0]);
  };
  const handleChangeProduct = (prod) => {
    const brnds = data[category][prod]?.brands;

    setBrands(brnds);

    setProduct(prod);
    setBrand(brnds[0]);
  };
  const handleChangeBrand = (brand) => {
    setBrand(brand);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 100px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 50,
        }}
      >
        <ListElement
          title="Categoria"
          elements={categories}
          callback={handleChangeCategory}
        />

        <ListElement
          title="Producto"
          elements={products}
          callback={handleChangeProduct}
        />
        <ListElement
          title="Marcas"
          elements={brands}
          callback={handleChangeBrand}
        />
      </div>
    </div>
  );
};

export default Graphics;
