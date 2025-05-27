import "./CodeBlock.css";
import PropTypes from "prop-types";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
SyntaxHighlighter.registerLanguage("javascript", js);

const CodeBlock = ({ language, code }) => {
  return (
    <div className="code__Block">
      <div className="flex__center dot__container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <h6 id="codeDev">developer.js</h6>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yLight}
        customStyle={{
          background: "rgba(var(--color-primary-rgb), 0.03)",
          color: "skyblue",
          paddingLeft: "20px",
          paddingRight: "20px",
          fontSize: "14px",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

// ✅ Correct PropTypes
CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
