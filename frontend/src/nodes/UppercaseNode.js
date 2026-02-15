// UppercaseNode.js
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";

export const UppercaseNode = ({ id, data }) => {
  const input = data.input || "";
  const output = input.toUpperCase();

  data.output = output;

  return (
    <BaseNode
      className={styles.nodeContent}
      title="Uppercase"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <span className={styles.nodeDescription}>Converts text to UPPERCASE</span>
    </BaseNode>
  );
};
