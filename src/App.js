import "./App.css";
import NodeLink from "./harshit_viz/NodeLink";
import Race from "./harshit_viz/Race";
import Trends from "./harshit_viz/Trends";

function App() {
  return (
    <div className="container">
      <Trends />
      <hr />
      <NodeLink />
      <hr />
      <Race />
    </div>
  );
}

export default App;
