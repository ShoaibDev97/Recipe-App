import React from "react";

function Recipe(props) {
  return (
    <React.Fragment>
 <div className="col-sm-12 col-lg-3 mt-5 grid-item">

        <h3>{props.title}</h3>
        <h4>Total Calories: {Math.floor(props.calories)}</h4>
        <img src={props.image} alt={props.title} />
        <div className="list">
          <ol>
            {props.ingradiant.map((ingradiant, index) => (
              <li key={index}>{ingradiant}</li>
              ))}
          </ol>
        </div>
        </div>
 
    </React.Fragment>
  );
}

export default Recipe;
