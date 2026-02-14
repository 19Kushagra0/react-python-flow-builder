// ConstantNode.js
import { useState } from "react";
import BaseNode from "./BaseNode";

export const ConstantNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || "Hello");

  data.output = value;

  return (
    <BaseNode title="Constant" outputs={[`${id}-output`]}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
