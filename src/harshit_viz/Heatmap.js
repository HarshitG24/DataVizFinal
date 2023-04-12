import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "81d922fb2334ed29";

function Heatmap() {
  const viewofSuicide_methodRef = useRef();
  const heatmapRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "viewof suicide_method")
        return new Inspector(viewofSuicide_methodRef.current);
      if (name === "heatmap") return new Inspector(heatmapRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h2>5. Suicide count by method across different states and age groups</h2>
      <div ref={viewofSuicide_methodRef} />
      <div ref={heatmapRef} />
    </>
  );
}

export default Heatmap;
