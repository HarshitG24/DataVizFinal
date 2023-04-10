import "./App.css";
import Notebook from "./harshit_viz/Notebook";
import TreeMap from "./harshit_viz/TreeMap";
// import TreeMap from "./harshit_viz/TreeMap";
import Trends from "./harshit_viz/Trends";
import Causes from "./mihir_viz/Causes";

function App() {
  return (
    <div>
      <Trends />
      <Causes />
      <Notebook />
      <TreeMap />
    </div>
  );
}

export default App;
