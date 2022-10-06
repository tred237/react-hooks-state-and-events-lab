import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState('false')

  const cartClass = inCart ? '' : 'in-cart'
  const cartButtonText = inCart ? 'Add to Cart' : 'Remove From Cart'

  function handleCartClick() {
    setInCart(!inCart)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{cartButtonText}</button>
    </li>
  );
}

export default Item;
