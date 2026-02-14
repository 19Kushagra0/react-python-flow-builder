// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {/* ✅ New nodes (JUST ADD THESE) */}
        <DraggableNode type="constant" label="Constant" />
        <DraggableNode type="concat" label="Concat" />
        <DraggableNode type="uppercase" label="Uppercase" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="condition" label="Condition" />
      </div>
    </div>
  );
};
