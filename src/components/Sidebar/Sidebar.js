import React from "react";
import Dietaries from "../Dietaries/Dietaries";

function Sidebar ({ item, onItemClick }) {
  return (
    <li onClick={() => onItemClick(item)} className="item">
      <h2>{item.name}</h2>
      <Dietaries dietaries={item.dietaries} />
    </li>  
  );
}

export default Sidebar;
