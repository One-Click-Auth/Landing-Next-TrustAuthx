import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeTabsProps {}

const CodeTabs: React.FC<CodeTabsProps> = () => {
  const [activeTab, setActiveTab] = useState("python");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getCode = () => {
    switch (activeTab) {
      case "python":
        return `
def trust_authx():
    # Python code
    pass
        `;
      case "javascript":
        return `
function trustAuth() {
  //js code
}
        `;
      case "go":
        return `
func TrustAuthX() {
    // Go code
}
        `;
      default:
        return "";
    }
  };

  return (
    <div className=" bg-black z-50 ">
      <div className="flex space-x-2 pt-2 px-2">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "python" ? "bg-gray-300" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("python")}
        >
          TrustAuthx.py
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "javascript" ? "bg-gray-300" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("javascript")}
        >
          Auth.js
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "go" ? "bg-gray-300" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("go")}
        >
          TrustAuthx.go
        </button>
      </div>

      <div className="p-4">
        <SyntaxHighlighter language="javascript" showLineNumbers>
          {getCode()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeTabs;
