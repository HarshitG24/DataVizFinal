import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "1d7a4eaf6f905a2f";

function Causes() {
  const guns_suicide_chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "guns_suicide_chart") return new Inspector(guns_suicide_chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={guns_suicide_chartRef} />
      <p>Credit: <a href="https://observablehq.com/d/1d7a4eaf6f905a2f@361">Analyzing Suicides by Mihir Mesia</a></p>
    </>
  );
}

export default Causes;