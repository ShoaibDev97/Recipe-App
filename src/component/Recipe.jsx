import React from "react";

function Recipe(props) {
  return (
    <React.Fragment>
      <div className="container">
        <h1>{props.title}</h1>
        <h2>Total Calories: {Math.floor(props.calories)}</h2>
        <img src={props.image} alt={props.title} />
        <div className="list">
          <ol>
            {props.ingradiant.map((ingradiant, index) => (
              <li key={index}>{ingradiant}</li>
            ))}
          </ol>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
}

export default Recipe;
