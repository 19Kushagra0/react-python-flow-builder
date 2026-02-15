// llmNode.js
import styles from "../style/nodes.module.css";
import BaseNode from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div className={styles.nodeContent}>
        <span className={styles.nodeDescription}>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
