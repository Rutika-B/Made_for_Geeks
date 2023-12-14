import React, { useEffect, useState } from "react";
import TreesList from "./lib/TressList";
import { useParams } from "react-router-dom";
import App from "./App";

function TraversalHome() {
  const slug = useParams();
  console.log(slug);
  const [index, setIndex] = useState(0);
  const handlleClick = () => {
    index === 2 ? setIndex(0) : setIndex(index + 1);
  };
  const current = TreesList[index];
  return (
    <div>
      <App key={`${current.id}${slug}`} data={current} selectedtraversal={slug.slug} />
      <button onClick={handlleClick}>more examples</button>
    </div>
  );
}

export default TraversalHome;
