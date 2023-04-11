import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "1c2f909b3f6e37d2";

function Race() {
  const race_graphRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "race_graph") return new Inspector(race_graphRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h2>3. Suicide trends aong different race/ethnicity from 1999-2020</h2>
      <div ref={race_graphRef} />
    </>
  );
}

export default Race;
