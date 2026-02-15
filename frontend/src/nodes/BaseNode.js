import { Handle, Position } from "reactflow";
import draggableStyles from "../style/draggableNode.module.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
  type = "",
}) {
  return (
    <div
      className={`${draggableStyles.draggableNode} ${draggableStyles[type] || ""} ${type}`}
      style={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: 8,
        padding: 10,
        minWidth: 200,
        background: "#fff",
        opacity: 0.9,
        cursor: "default",
        display: "block",
        height: "auto",
        transition: "all 0.2s ease", // Smooth transition for hover effects
      }}
    >
      <strong>{title}</strong>

      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      <div style={{ marginTop: 10 }}>{children}</div>

      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 40 + index * 20 }}
        />
      ))}
    </div>
  );
}
