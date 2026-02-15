import { useState, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import BaseNode from "./BaseNode";
import styles from "../style/nodes.module.css";
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState("{{input}}");
  const updateNodeInternals = useUpdateNodeInternals();

  const matches = currText.match(/{{\s*([\w]+)\s*}}/g) || [];
  const cleaned = matches.map((el) => {
    let erase = el.replace("{{", "");
    erase = erase.replace("}}", "");
    return erase;
  });
  const inputs = [...new Set(cleaned)];

  useEffect(() => {
    updateNodeInternals(id);
  }, [inputs, id, updateNodeInternals]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <BaseNode
      inputs={inputs}
      outputs={[`${id}-output`]}
      title="Text"
      type="text"
    >
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
