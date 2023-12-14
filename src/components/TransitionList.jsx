import React from "react";

import "../styles/TransitionedList.css";

const TransitionedList = props => {
  return (
    <ul className="list-container">
      {props.list.map((listItem, index) => {
        return (
          <li key={`${listItem}${index}`} className="list-item">
            {listItem}
          </li>
        );
      })}
    </ul>
  );
};

export default TransitionedList;