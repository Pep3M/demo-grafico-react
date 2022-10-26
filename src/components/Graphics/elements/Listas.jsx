import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListElement from "../atoms/ListElement";

const Listas = ({ data, values }) => {
  const categories = Object.keys(data);
  const prodInit = Object.keys(data[categories[0]]);
  const brandsInit = Object.keys(data[categories[0]][prodInit[0]]);

  const [products, setProducts] = useState(prodInit);
  const [brands, setBrands] = useState(brandsInit);

  const [category, setCategory] = useState(categories[0] || "");
  const [product, setProduct] = useState(products[0] || "");
  const [brand, setBrand] = useState(brands[0] || "");

  const handleChangeCategory = (cat) => {
    setCategory(cat);
    const prods = Object.keys(data[cat]);
    const brnds = Object.keys(data[cat][prods[0]]);

    setProducts(prods);
    setBrands(brnds);

    setProduct(prods[0]);
    setBrand(brnds[0]);

    values(data[cat][prods[0]][brnds[0]]);
  };
  const handleChangeProduct = (prod) => {
    const brnds = Object.keys(data[category][prod]);

    setBrands(brnds);

    setProduct(prod);
    setBrand(brnds[0]);

    values(data[category][prod][brnds[0]]);
  };
  const handleChangeBrand = (brand) => {
    setBrand(brand);

    values(data[category][product][brand]);
  };

  useEffect(() => {
    values(data[category][product][brand]);
  }, []);

  return (
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
        value={category}
      />

      <ListElement
        title="Producto"
        elements={products}
        callback={handleChangeProduct}
        value={product}
      />
      <ListElement
        title="Marcas"
        elements={brands}
        callback={handleChangeBrand}
        value={brand}
      />
    </div>
  );
};

export default Listas;
