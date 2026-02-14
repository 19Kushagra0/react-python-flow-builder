import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        minWidth: 200,
        // background: "#fff",
      }}
    >
      {/* Node Title */}
      <strong>{title}</strong>

      {/* Input Handles (Left) */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Node Content */}
      <div style={{ marginTop: 10 }}>{children}</div>

      {/* Output Handles (Right) */}
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
