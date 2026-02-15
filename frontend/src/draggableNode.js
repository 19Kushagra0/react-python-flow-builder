// draggableNode.js

import styles from "./style/draggableNode.module.css";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${styles.draggableNode} ${styles[type]}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className={styles.draggableNodeLabel}>{label}</span>
      {/* Remove inline styles if present, let CSS handle it */}
    </div>
  );
};
