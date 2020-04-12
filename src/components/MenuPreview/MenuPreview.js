import React from "react";
import Dietaries from "../Dietaries/Dietaries";

class MenuPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDeleteClick(this.props.item);
  }

  render() {
    return (
      <li className="item">
        <h2>{this.props.item.name}</h2>
        <Dietaries dietaries={this.props.item.dietaries} />
        <button onClick={this.handleClick} className="remove-item">x</button>
      </li>
    );
  }
}

export default MenuPreview;