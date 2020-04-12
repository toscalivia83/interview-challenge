import React from "react";
import Dietaries from "../Dietaries/Dietaries";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onItemClick(this.props.item);
  }

  render() {
    return (
      <li onClick={this.handleClick} className="item">
        <h2>{this.props.item.name}</h2>
        <Dietaries dietaries={this.props.item.dietaries} />
      </li>  
    );
  }
}

export default Sidebar;
