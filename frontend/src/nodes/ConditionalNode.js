// ConditionalNode.js
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";

export const ConditionalNode = ({ id, data }) => {
  const value = data.input || "";

  data.trueOutput = value;
  data.falseOutput = value;

  return (
    <BaseNode
      className={styles.nodeContent}
      title="Condition"
      inputs={[`${id}-input`]}
      outputs={[`${id}-true`, `${id}-false`]}
      type="condition"
    >
      <span className={styles.nodeDescription}>
        Routes output based on condition
      </span>
    </BaseNode>
  );
};
