import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const defaultInput: string = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// Multi-line code (fast-inverse square root):

float Q_rsqrt(float number)
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = * ( long * ) &y;                       // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 );               // what the f***?
  y  = * ( float * ) &i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
  // y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

  return y;
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

const convertMarkdown = (text: string): any => {
  return marked.parse(text, { gfm: true, });
};

function App() {
  const [text, setText] = useState(convertMarkdown(defaultInput));

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="app-container">
        <h2 id="header">Markdown Previewer</h2>
        <div className="labels">
          <p>Raw Text</p>
          <p>Markdown<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/312px-Markdown-mark.svg.png"></img></p>
        </div>
        <div className="markdown-container">
          <textarea 
            id="editor"
            onChange={handleChange}
            defaultValue={defaultInput}
          ></textarea>
          <div 
            id="preview"
            dangerouslySetInnerHTML={ {__html: convertMarkdown(text)} }
          ></div>
        </div>
        <p className='acknowledgements'>
          Written for freeCodeCamp's "Front End Development Libraries" course.
          Powered by <a href="https://react.dev/" target="_blank">React</a> and <a href="https://marked.js.org/" target="_blank">Marked</a>.
          See the project at <a href="https://github.com/weakbox/FCC-Markdown-Previewer" target="_blank">Github</a>.
        </p>
      </div>
    </>
  );
}

export default App;