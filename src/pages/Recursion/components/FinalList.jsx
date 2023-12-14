import React from "react";

const FinalListTransition = (props) => {
  return (
    <div>
      {props.finalList.map((singleArr, index) => {
        return (
          <ul key={index} className="list-container">
            {singleArr.map((item, index) => {
              return (
                <li key={index} className="list-item">
                    {item}
                </li>
              );
            })}

          </ul>
        );
        
      })}
    </div>
  );
};

export default FinalListTransition;
