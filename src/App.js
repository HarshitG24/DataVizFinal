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
      <h1>
        Dissecting the Complex Interplay of Suicide Rates, Methods, and Gun Laws
        in the USA
      </h1>
      <p className="intro">
        Suicide is a pressing public health concern that continues to devastate
        families and communities across the United States. With a rising number
        of individuals succumbing to this preventable tragedy, understanding the
        factors contributing to suicide rates becomes critical in designing
        effective interventions and policies. Our data visualization aims to
        shed light on the complex interplay between suicide rates, methods, and
        gun laws across different states, providing a comprehensive and
        comparative perspective on this crucial issue. This timely analysis will
        help unravel the impact of suicides across different ethnicity, gender
        as well as highlight variations in methods used for suicide across
        states. By examining the correlation between these factors, our
        visualization seeks to provide an evidence-based foundation for further
        research, policy discussions, and targeted interventions. Ultimately,
        our goal is to contribute to the ongoing efforts to better understand
        and prevent suicide, and to create a safer and more supportive
        environment for individuals struggling with mental health challenges.
      </p>
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
