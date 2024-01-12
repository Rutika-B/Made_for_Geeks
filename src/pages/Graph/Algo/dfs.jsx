import { Component } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import TransitionedList from "../../../components/TransitionList";

class Dfs extends Component {
  constructor() {
    super();
    this.state = {
      traversalOrder: [],
      list: [],
      nodes: [
        {
          id: "1",
          data: { label: "1" },
          position: { x: 0, y: 0 },
          type: "input",
          
        },
        {
          id: "2",
          data: { label: "2" },
          position: { x: 100, y: 100 },
        },
      ],
      edges: [
        { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
      ],
    };
  }
  displayList = (index) => {
    if (
      index === this.state.list.length &&
      index < this.state.traversalOrder.length
    ) {
      console.log("displaylist");
      let tempList = [...this.state.list, this.state.traversalOrder[index]];
      this.setState({ list: tempList }, () => {
        setTimeout(() => {
          this.displayList(index + 1);
          console.log(index);
          this.animateGraph(this.state.traversalOrder[index + 1]);
        }, 1500);
      });
    }
  };
  animateGraph = (value) => {
    console.log(value);
    let graphData = [...this.state.nodes];
    console.log("graphdata before animation");
    console.log(graphData);

    const updatedGraphData = graphData.map((node) => {
      if (node.id === value) {
        // Assuming `style` is an object inside the node
        return { ...node, style: { background: "green",color:"blue" } };
      }
      return node;
    });

    console.log(updatedGraphData);
    this.setState({ nodes: updatedGraphData }, () => {
      console.log("State updated:", this.state.nodes);
    });
  };

  handleClick = () => {
    const traversalOrder = ["1", "2"];
    console.log(traversalOrder);
    this.setState({ traversalOrder }, () => {
      this.displayList(0);
      console.log(this.state.traversalOrder[0]);
      this.animateGraph(this.state.traversalOrder[0]);
    });
  };

  render() {
    return (
      <div style={{ height: 500, width: 800 }} className="flex flex-row">
        <ReactFlow nodes={this.state.nodes} edges={this.state.edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
        <button onClick={this.handleClick}>show</button>
        <div className="transition-list">
          <TransitionedList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default Dfs;
