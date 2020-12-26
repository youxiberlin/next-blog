import styles from "../../css/code.module.css"

const CodeSnippets = ({ codes }) => (
  <div className={styles.container}>
    <pre>
      <code>{codes}</code>
    </pre>
  </div>
)

export default CodeSnippets;
