import React from "react";

function Dietaries ({ dietaries }) {
  return (
    <React.Fragment>
    {dietaries.length > 0 && (
        <p>
          {
            dietaries.map((d, index) => <span key={index} className="dietary">{d}</span>)
          }
        </p>
    )}
    </React.Fragment>
  );
}

export default Dietaries;