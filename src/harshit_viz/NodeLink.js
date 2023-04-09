import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "8b3bb9e7326b0f3c";

function NodeLink() {
  const link_nodeRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "link_node") return new Inspector(link_nodeRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={link_nodeRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/d/8b3bb9e7326b0f3c">
          Suicide Rates Higher among White Populations in California, Texas, and
          Florida in US by Harshit Gajjar
        </a>
      </p>
    </>
  );
}

export default NodeLink;
