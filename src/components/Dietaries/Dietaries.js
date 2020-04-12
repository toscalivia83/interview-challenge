import React from "react";

class Dietaries extends React.Component {
  render() {
    return (
      <React.Fragment>
      {this.props.dietaries.length > 0 && (
          <p>
            {
              this.props.dietaries.map((d, index) => <span key={index} className="dietary">{d}</span>)
            }
          </p>
      )}
      </React.Fragment>
    );
  }
}

export default Dietaries;