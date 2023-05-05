import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        <button style={{"backgroundColor":"rgb(255,133,40)","borderRadius":"8px"}} onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img