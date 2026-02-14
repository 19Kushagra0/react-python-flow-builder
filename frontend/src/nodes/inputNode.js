// inputNode.js

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
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   gap: "5px",
      // }}
      >
        <label
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            // style={{
            //   outline: "none",
            //   border: "2px solid #ccc",
            //   borderRadius: 5,
            //   padding: 3,
            // }}
          />
        </label>
        <label
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          Type:
          <select
            value={inputType}
            onChange={handleTypeChange}
            // style={{
            //   outline: "none",
            //   border: "2px solid #ccc",
            //   borderRadius: 5,
            // }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
