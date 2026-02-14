// ConditionalNode.js
import BaseNode from "./BaseNode";

export const ConditionalNode = ({ id, data }) => {
  const value = data.input || "";

  data.trueOutput = value;
  data.falseOutput = value;

  return (
    <BaseNode
      title="Condition"
      inputs={[`${id}-input`]}
      outputs={[`${id}-true`, `${id}-false`]}
    >
      <div>
        Routes output based on condition
        <br />
        (example node)
      </div>
    </BaseNode>
  );
};
