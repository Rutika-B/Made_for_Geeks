import * as React from "react";
import Intro from "../../components/Intro";
import TreeDiagram from "../../components/TreeDiagram";
import { Typography } from "@material-tailwind/react";
import TreeImg from "../../assets/Treetypes.png";
function TreeIntro() {
  const data = [
    {
      title: "Ancestor:",
      desc: "Ancestor of a Node: Any predecessor nodes on the path of the root to that node are called Ancestors of that node.",
      eg: "A C D are Ancestors of E",
    },
    {
      title: "Descendant:",
      desc: "Any successor node on the path from the leaf node to that node. {E,I} are the descendants of the node {B}",
      eg: "D E are descendants of C",
    },
    {
      title: "Depth:",
      desc: "The depth of a node is the number of edges present in path from the root node of a tree to that node.",
      eg: "depth of A->0, C,B->1 G,D->2",
    },
    {
      title: "Hight:",
      desc: "The height of a node is the number of edges present in the longest path connecting that node to a leaf node.",
      eg: "Hight of A->3 D->1",
    },
    {
      title: "Level of a node:",
      desc: "The count of edges on the path from the root node to that node. The root node has level 0",
      eg: "level of A->0 B,C->1 G,D->2 E,F->3",
    },
  ];
  return (
    <>
      <Intro>
        <Typography variant="h5" className="my-2">
          A tree data structure is a hierarchical structure that is used to
          represent and organize data in a way that is easy to navigate and
          search. It is a collection of nodes that are connected by edges and
          has a hierarchical relationship between the nodes.
        </Typography>
        <div className="flex flex-row">
          <div className="m-2">
            {data.map((item, index) => (
              <div key={index} className="my-3">
                <Typography variant="h5">
                  <Typography variant="h4">{item.title}</Typography>
                  {item.desc}
                  <Typography variant="h5" className="text-cyan-700">
                    {item.eg}
                  </Typography>
                </Typography>
              </div>
            ))}
          </div>
          <div className="">
            <TreeDiagram
              data={{
                name: "A (Root)",
                children: [
                  {
                    name: "B",
                  },
                  {
                    name: "C",
                    children: [
                      {
                        name: "D",
                        children: [
                          {
                            name: "E",
                          },
                          { name: "F" },
                        ],
                      },
                      {
                        name: "G",
                      },
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
        <Typography variant="h4">Types of Tree dataStructure:</Typography>
        <div className="items-center justify-center flex flex-col">
          <img src={TreeImg} alt="" />
          <div>
            <Typography variant="h5" className="my-3">
              <Typography variant="h4">Binary Tree:</Typography>In a binary
              tree, each node can have a maximum of two children linked to it.{" "}
            </Typography>
            <Typography variant="h5" className="my-3">
              <Typography variant="h4">Ternary Tree:</Typography>A Ternary Tree
              is a tree data structure in which each node has at most three
              child nodes, usually distinguished as “left”, “mid” and “right”.{" "}
            </Typography>
            <Typography variant="h5" className="my-3">
              <Typography variant="h4">N-ary Tree:</Typography>Generic trees are
              a collection of nodes where each node is a data structure that
              consists of records and a list of references to its
              children(duplicate references are not allowed). Unlike the linked
              list, each node stores the address of multiple nodes.{" "}
            </Typography>
          </div>
        </div>
       
      </Intro>
    </>
  );
}

export default TreeIntro;
