import React from "react";
import { Tree } from "react-tree-graph";

const TreeDiagram = (props) => {
  return (
    <div>
      <Tree
        data={props.data}
        // height={500}
        // width={500}
        height={500}
        width={500}
        nodeRadius={15}
        svgProps={{
          transform: "rotate(90)", //rotates the tree to make it verticle
          // viewBox: "-40 -1 400 459"
          viewBox: "65 1 300 459"
        }}
        textProps={{
          transform: "rotate(-90)", //rotates the text label
          x: "0",
          y: "0",
        }}
      />
    </div>
  );
};

export default TreeDiagram;
