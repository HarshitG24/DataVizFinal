import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "81d922fb2334ed29";

function Notebook() {
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
      <h2>5. Total suicide cases across blue/red states from 2016-2020</h2>
      <div ref={viewofSuicide_methodRef} />
      <div ref={heatmapRef} />
    </>
  );
}

export default Notebook;
