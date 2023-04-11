import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "8b3bb9e7326b0f3c";

function NodeLink() {
  const keyRef = useRef();
  const link_nodeRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "key") return new Inspector(keyRef.current);
      if (name === "link_node") return new Inspector(link_nodeRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <h2>
        2. Suicide rate for different races/ethnicity in democratic and republic
        US states from 2016-2020
      </h2>
      <div ref={keyRef} />
      <div ref={link_nodeRef} />
    </>
  );
}

export default NodeLink;
