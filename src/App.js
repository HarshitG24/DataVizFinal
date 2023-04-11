import "./App.css";
import Notebook from "./harshit_viz/Notebook";
import TreeMap from "./harshit_viz/TreeMap";
// import TreeMap from "./harshit_viz/TreeMap";
import Trends from "./harshit_viz/Trends";
import Causes from "./mihir_viz/Causes";
import Method from "./mihir_viz/Method"

function App() {
  return (
    <div className="container">
      <h2>1. Method of Commiting Suicide</h2>
      <Method />
      <h2>2. Gun Laws vs Suicide Rate</h2>
      <Causes/>

    </div>
  );
}

export default App;
