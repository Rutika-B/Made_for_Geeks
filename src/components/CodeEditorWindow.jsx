import Editor from "@monaco-editor/react";
import { useState,useEffect } from "react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  
  console.log(code);
  const [value, setValue] = useState(code || "");
  useEffect(() => {
    setValue(code || "");
  }, [code]);
  console.log(value)
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="print(34)}"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
