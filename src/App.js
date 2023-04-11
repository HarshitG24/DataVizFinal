import "./App.css";
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
