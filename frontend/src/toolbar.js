// toolbar.js

import { DraggableNode } from "./draggableNode";
import "./style/toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
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
