// toolbar.js

import { DraggableNode } from "./draggableNode";
import "./style/toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <div style={{ marginRight: 20 }}>
        <h2
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#334155",
          }}
        >
          Pipeline Builder
        </h2>
      </div>
      <div className="toolbar-nodes">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {/* extra nodes */}
        <DraggableNode type="constant" label="Constant" />
        <DraggableNode type="concat" label="Concat" />
        <DraggableNode type="uppercase" label="Uppercase" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="condition" label="Condition" />
      </div>
    </div>
  );
};
