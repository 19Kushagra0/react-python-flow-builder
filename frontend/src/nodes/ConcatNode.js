// ConcatNode.js
import BaseNode from "./BaseNode";

export const ConcatNode = ({ id, data }) => {
  const a = data.a || "";
  const b = data.b || "";

  data.output = `${a}${b}`;

  return (
    <BaseNode
      title="Concat"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-output`]}
    >
      <div>Concatenates two inputs</div>
    </BaseNode>
  );
};
