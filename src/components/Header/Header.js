import React from "react";
import './Header.css';

class Header extends React.Component {
  render () {
    const dietaryTypesTotal = this.props.items.reduce((total, items) => {
      items.dietaries.forEach((dietary) => total[dietary] = (total[dietary] || 0) + 1);
      return total;
    }, {});
    return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{this.props.items.length} items</span>
          </div>

          {Object.keys(dietaryTypesTotal).length > 0 && <div className="col-6 menu-summary-right">
            {Object.keys(dietaryTypesTotal).map((dietaryTypeKey, index) => {
              return (
              <React.Fragment key={index}>
                {dietaryTypesTotal[dietaryTypeKey]}x <span className="dietary">{dietaryTypeKey}</span>
              </React.Fragment>
              );
            })}
          </div>}

        </div>
      </div>
    </div>
    );
  }
  // getEachDietary? using a reducer?
}

export default Header;
