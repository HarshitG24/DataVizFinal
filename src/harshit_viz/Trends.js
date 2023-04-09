import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "1c2f909b3f6e37d2";

function Trends() {
  const yearly_growRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "yearly_grow") return new Inspector(yearly_growRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={yearly_growRef} />
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

export default Trends;
