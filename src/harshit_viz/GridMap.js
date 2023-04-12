import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "74f1ce5c78dabdce";

function GridMap() {
  const legendRef = useRef();
  const withColor2Ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "legend") return new Inspector(legendRef.current);
      if (name === "withColor2") return new Inspector(withColor2Ref.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h2>4. Veteran Suicide Rate across different regions of US</h2>
      <div ref={legendRef} />
      <div ref={withColor2Ref} />
    </>
  );
}

export default GridMap;
