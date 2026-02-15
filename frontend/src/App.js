import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <PipelineToolbar />
      </header>

      <main className={styles.mainContent}>
        <PipelineUI />
      </main>

      <div className={styles.bottomBar}>
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
