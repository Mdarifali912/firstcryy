// import React, { useState } from "react";
import list from "../components/backend/productdata/data.js";
import Cards from "../pages/Card.jsx";
import "../styles/amazon.css";

const ProductPage = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ProductPage;