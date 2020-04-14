import React from "react";
import './Header.css';

function Header ({ items }) {
  const dietaryTypesTotal = items.reduce((total, items) => {
    items.dietaries.forEach((dietary) => total[dietary] = (total[dietary] || 0) + 1);
    return total;
  }, {});
  const dietaryTypeList = Object.keys(dietaryTypesTotal);
  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{items.length} items</span>
          </div>

          {dietaryTypeList.length > 0 && (
            <div className="col-6 menu-summary-right">
              {dietaryTypeList.map((dietaryTypeKey, index) => (
                <React.Fragment key={index}>
                  {dietaryTypesTotal[dietaryTypeKey]}x <span className="dietary">{dietaryTypeKey}</span>
                </React.Fragment>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Header;
