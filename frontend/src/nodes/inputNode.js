// inputNode.js
import styles from "../style/nodes.module.css";

import { useState } from "react";

import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  console.log("id", id);
  console.log("data", data);

  return (
    <BaseNode title="Input" outputs={[`${id}-value`]}>
      <div className={styles.nodeContent}>
        <label className={styles.nodeLabel}>
          <span>Name:</span>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className={styles.nodeInput}
          />
        </label>
        <label className={styles.nodeLabel}>
          <span>Type:</span>
          <select
            value={inputType}
            onChange={handleTypeChange}
            className={styles.nodeInput}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
