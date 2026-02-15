// ConcatNode.js
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";

export const ConcatNode = ({ id, data }) => {
  const a = data.a || "";
  const b = data.b || "";

  data.output = `${a}${b}`;

  return (
    <BaseNode
      className={styles.nodeContent}
      title="Concat"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-output`]}
    >
      <span className={styles.nodeDescription}>Concatenates two inputs</span>
    </BaseNode>
  );
};
