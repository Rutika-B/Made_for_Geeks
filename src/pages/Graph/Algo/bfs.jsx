import { Component } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import TransitionedList from "../../../components/TransitionList";
import steps from "../../../constants/Graph/nodesData";
import ProblemHeader from "../../../components/ProblemHeader";
import Landing from "../../../components/Landing";
import MButton from "../../../components/MButton";

class Dfs extends Component {
  constructor() {
    super();
    this.state = {
      visited: [0, 0, 0, 0, 0, 0],
      action: [],
      traversalOrder: [],
      list: [],
      nodes: [
        {
          id: "1",
          data: { label: "1" },
          position: { x: 0, y: 0 },
          type: "input",
          style: {
            height: 30,
            width: 20,
          },
        },
        {
          id: "6",
          data: { label: "6" },
          position: { x: 0, y: 300 },

          style: {
            height: 30,
            width: 20,
          },
        },
        {
          id: "2",
          data: { label: "2" },
          position: { x: -100, y: 100 },
          style: {
            height: 30,
            width: 20,
          },
        },
        {
          id: "3",
          data: { label: "3" },
          position: { x: 100, y: 100 },
          style: {
            height: 30,
            width: 20,
          },
        },
        {
          id: "5",
          data: { label: "5" },
          position: { x: 100, y: 200 },
          style: {
            height: 30,
            width: 20,
          },
        },
        {
          id: "4",
          data: { label: "4" },
          position: { x: -100, y: 200 },
          style: {
            height: 30,
            width: 20,
          },
        },
      ],
      edges: [
        { id: "1-2", source: "1", target: "2", style: { stroke: "blue" } },
        { id: "1-3", source: "1", target: "3", style: { stroke: "blue" } },
        { id: "2-4", source: "2", target: "4", style: { stroke: "blue" } },
        { id: "4-6", source: "4", target: "6", style: { stroke: "blue" } },
        { id: "3-5", source: "3", target: "5", style: { stroke: "blue" } },
        { id: "5-6", source: "5", target: "6", style: { stroke: "blue" } },
        { id: "2-3", source: "2", target: "3", style: { stroke: "blue" } },
        { id: "4-5", source: "4", target: "5", style: { stroke: "blue" } },
      ],
    };
  }
  displayList = (index) => {
    if (
      index === this.state.list.length &&
      index < this.state.traversalOrder.length
    ) {
      console.log("displaylist");
      let tempList = [...this.state.list, this.state.traversalOrder[index][0]];

      const tmp = [...this.state.visited];
      const value = this.state.traversalOrder[index][0];
      const next = tmp.map((item, id) => {
        if (id === value - 1) {
          return 1;
        } else {
          return item;
        }
      });

      this.setState(
        { list: tempList, visited: next, action: steps[index] },
        () => {
          setTimeout(() => {
            this.displayList(index + 1);
            console.log(this.state.action);
            this.animateGraph(this.state.traversalOrder[index + 1]);
          }, 1500);
        }
      );
    }
  };
  animateGraph = (value) => {
    console.log(value);
    let graphData = [...this.state.nodes];

    let edgeData = [...this.state.edges];

    const updatedEdgeData = edgeData.map((edge, index) => {
      console.log(index);
      const ind = index.toString();
      if (ind === value[1]) {
        console.log("im in if block");
        return {
          ...edge,
          style: { ...edge.style, stroke: "green" },
        };
      }
      return edge;
    });

    const updatedGraphData = graphData.map((node) => {
      if (node.id === value[0]) {
        // Assuming `style` is an object inside the node
        return {
          ...node,
          style: { ...node.style, background: "green", color: "blue" },
        };
      }
      return node;
    });

    console.log(updatedGraphData);
    this.setState({ nodes: updatedGraphData, edges: updatedEdgeData }, () => {
      console.log("State updated:", this.state.nodes);
    });
  };

  handleClick = () => {
    const traversalOrder = [
      ["1", "0"],
      ["2", "6"],
      ["3", "4"],
      ["5", "5"],
      ["6", "3"],
      ["4", "-1"],
    ];
    this.setState({ traversalOrder }, () => {
      this.displayList(0);
      this.animateGraph(this.state.traversalOrder[0]);
    });
  };
  render() {
    return (
      <>
        <div>
          <ProblemHeader problem={"dfs"} topic={"graph"}/>
        </div>
        <div className="flex flex-row">
          <div style={{ height: 500, width: 600 }} className="flex flex-row">
            <ReactFlow
              nodes={this.state.nodes}
              edges={this.state.edges}
              fitView
            >
              <Background variant={BackgroundVariant.Dots} />
              <Controls />
            </ReactFlow>
          </div>
          <div className="flex flex-col">
              
              <button onClick={this.handleClick} >show</button>
            <div className="transition-list">
              <TransitionedList list={this.state.list} />
            </div>
            <div>
              Visited :
              <span className="mx-3">
                {this.state.visited.map((item, id) => (
                  <li
                    key={id}
                    className="bg-blackw-10 h-10 border-white border-2 p-2 items-center justify-center"
                  >
                    {item}
                  </li>
                ))}
              </span>
            </div>
            {this.state.action.map((item, id) => (
              <div>{item}</div>
            ))}
          </div>
        </div>
        <Landing problem={"dfs"} topic={"graph"}/>
      </>
    );
  }
}

export default Dfs;
