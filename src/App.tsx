import { useState } from 'react';
import { marked } from 'marked';
import './App.scss';

const defaultInput: string = `
# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
  1. Item 3a
  2. Item 3b

## Images

![This is an alt text.](https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Halifax-Dartmouth_Ferry_Service_%2821772298471%29.jpg/1920px-Halifax-Dartmouth_Ferry_Service_%2821772298471%29.jpg "This is a sample image.")

## Links

Check out [freeCodeCamp](https://www.freecodecamp.org/)!

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`;

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
      <div className="page-container">
        <div className="page">
          <div className="label">
            <p>fCC</p>
            <p>Raw Input</p>
            <p>(Text)</p>
          </div>
          <textarea
            id="editor"
            className="editor"
            onChange={handleChange}
            defaultValue={defaultInput}
          ></textarea>
        </div>
        <div className="page">
          <div className="label">
            <p>fCC</p>
            <p>Preview</p>
            <p>(Markdown)</p>
          </div>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={ {__html: convertMarkdown(text)} }
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
