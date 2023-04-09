import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "74b30d22410a25d6";

function TreeMap() {
  const viewofSuicide_groupRef = useRef();
  const explore_treeRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, (name) => {
      if (name === "viewof suicide_group")
        return new Inspector(viewofSuicide_groupRef.current);
      if (name === "explore_tree")
        return new Inspector(explore_treeRef.current);
      return [
        "mapped_data",
        "state_age_suicide_data",
        "hierarchy",
        "root",
        "treeMapGenerator",
      ].includes(name);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={viewofSuicide_groupRef} />
      <div ref={explore_treeRef} />
      <p>
        Credit:{" "}
        <a href="https://observablehq.com/d/74b30d22410a25d6">
          Treemap exploration by Harshit Gajjar
        </a>
      </p>
    </>
  );
}

export default TreeMap;
