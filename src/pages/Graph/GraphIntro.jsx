import React from "react";
import Intro from "../../components/Intro";
import Types from "../../assets/GraphTypes.png";
import mat from "../../assets/adjMat.png";
import list from "../../assets/adjList.png";
import { Typography } from "@material-tailwind/react";

function GraphIntro() {
  const ways = [
    {
      title: "Adjacency Matrix",
      desc: "The Adjacency Matrix is a V x V matrix where the values are filled with either 0 or 1. If the link exists between Vi and Vj, it is recorded 1; otherwise, 0.",
      dig: mat,
    },
    {
      title: "Adjacency list",
      desc: "The adjacency list is a list of the vertices directly connected to the other vertices in the graph.",
      dig: list,
    },
  ];
  return (
    <Intro>
      <Typography variant="h5" className="my-2">
        A graph is an abstract data type (ADT) that consists of a set of objects
        that are connected to each other via links. These objects are called
        vertices and the links are called edges.
      </Typography>
      <div className="flex flex-col items-center">
        <Typography variant="h6">Types of Graph:</Typography>
        <img src={Types} height={30} width={400} />
        <Typography className="items-start justify-start mt-4">
          Representation of Graph : It is the way to show relationship between
          vertices and edges present in Graph
        </Typography>
        <Typography variant="h6" className="my-2">There are Two ways:</Typography>
        <div className="flex flex-row items-center">
          {ways.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-1/2 mx-2"
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.desc}</Typography>
              <img
                width={200}
                height={200}
                src={item.dig}
                className="rounded-md m-2"
              />
              <Typography>Representation for above undirected graph</Typography>
            </div>
          ))}
        </div>
      </div>
    </Intro>
  );
}

export default GraphIntro;
