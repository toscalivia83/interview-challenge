import React from "react";
import Dietaries from "../Dietaries/Dietaries";

function MenuPreview ({ item, onDeleteClick }) {
  return (
    <li className="item">
      <h2>{item.name}</h2>
      <Dietaries dietaries={item.dietaries} />
      <button onClick={() => onDeleteClick(item)} className="remove-item">x</button>
    </li>
  );
}

export default MenuPreview;