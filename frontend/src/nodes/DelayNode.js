import { useState, useEffect } from "react";
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      data.output = data.input;
    }, delay);

    return () => clearTimeout(timer);
  }, [data, delay]);

  return (
    <BaseNode
      className={styles.nodeContent}
      title="Delay"
      inputs={[`${id}-input`]}
      outputs={[`${id}-output`]}
    >
      <label className={styles.nodeLabel}>
        <span> Delay (ms):</span>
        <input
          className={styles.nodeInput}
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
    </BaseNode>
  );
};
