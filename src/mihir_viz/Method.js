import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "1d7a4eaf6f905a2f";

function Method() {
  const male_method_chartsRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "male_method_charts") return new Inspector(male_method_chartsRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={male_method_chartsRef} />
      <p>Credit: <a href="https://observablehq.com/d/1d7a4eaf6f905a2f@361">Analyzing Suicides by Mihir Mesia</a></p>
    </>
  );
}

export default Method;