import { useState } from 'react';
import './App.css';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!`;

const convertMarkdown = (text: string) => {
  return `MARKDOWN: ` + text;
};

function App() {
  const [text, setText] = useState(convertMarkdown(defaultMarkdown));

  const handleChange = (event: any) => {
    setText(convertMarkdown(event.target.value));
  };

  return (
    <div className="background">
      <h1>Markdown Previewer</h1>
      <div className="markdown-container">
        <textarea 
          id="editor"
          onChange={handleChange}
          defaultValue={defaultMarkdown}
        ></textarea>
        <div id="preview">{text}</div>
      </div>
    </div>
  );
}

export default App;