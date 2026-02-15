import { useState, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const updateNodeInternals = useUpdateNodeInternals();

  const matches = currText.match(/{{\s*([\w]+)\s*}}/g);

  const inputs = matches
    ? [...new Set(matches)].map((m) => `${id}-${m.replace(/{{|}}|\s/g, "")}`)
    : [];

  useEffect(() => {
    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <BaseNode inputs={inputs} outputs={[`${id}-output`]} title="Text">
      <div className={styles.nodeContent}>
        <label className={styles.nodeLabel}>
          <span>Text:</span>
          <textarea
            className={styles.nodeInput}
            type="text"
            value={currText}
            onChange={handleTextChange}
            style={{
              width: "90%",
              resize: "none",
              overflow: "hidden",
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
