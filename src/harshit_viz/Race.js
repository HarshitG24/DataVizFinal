import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "1c2f909b3f6e37d2";

function Race() {
  const race_wiseRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "race_wise") return new Inspector(race_wiseRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={race_wiseRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/d/1c2f909b3f6e37d2">
          Suicide Rates among different race/ethnicity over years by Harshit
          Gajjar
        </a>
      </p>
    </>
  );
}

export default Race;
