import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "1d7a4eaf6f905a2f";

function Causes() {
  const bar_chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "bar_chart") return new Inspector(bar_chartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={bar_chartRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/d/1d7a4eaf6f905a2f">
          Untitled by Mihir Mesia
        </a>
      </p>
    </>
  );
}

export default Causes;
