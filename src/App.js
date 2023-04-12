import "./App.css";
import GridMap from "./harshit_viz/GridMap";
import Heatmap from "./harshit_viz/Heatmap";
import NodeLink from "./harshit_viz/NodeLink";
import Race from "./harshit_viz/Race";
import TreeMap from "./harshit_viz/TreeMap";
import Trends from "./harshit_viz/Trends";

function App() {
  return (
    <div className="container">
      <Trends />
      <hr />
      <NodeLink />
      <hr />
      <Race />
      <hr />
      <GridMap />
      <hr />
      <Heatmap />
      <hr />
      <TreeMap />
    </div>
  );
}

export default App;
