// ConstantNode.js
import { useState } from "react";
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";

export const ConstantNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || "Hello");

  data.output = value;

  return (
    <BaseNode
      className={styles.nodeContent}
      title="Constant"
      outputs={[`${id}-output`]}
      type="constant"
    >
      <input
        className={styles.nodeInput}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </BaseNode>
  );
};
