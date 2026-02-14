// UppercaseNode.js
import BaseNode from "./BaseNode";

export const UppercaseNode = ({ id, data }) => {
  const input = data.input || "";
  const output = input.toUpperCase();

  data.output = output;

  return (
    <BaseNode
      title="Uppercase"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <div>Converts text to UPPERCASE</div>
    </BaseNode>
  );
};
