import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "1c2f909b3f6e37d2";

function Trends() {
  const suicide_trendRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "suicide_trend")
        return new Inspector(suicide_trendRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h2>Suicide rates in US from 1999-2020</h2>
      <div ref={suicide_trendRef} />
    </>
  );
}

export default Trends;
