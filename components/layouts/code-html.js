const CodeSnippets = ({ codes }) => (
  <pre>
    <code className="html">{codes}</code>
    <style jsx>{`
      pre {
        font-size: 14px;
      }
    `}
    </style>
  </pre>
)

export default CodeSnippets;
