import { marked } from "marked";
import React, { useState, useEffect } from "react";

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
// Code block
function example() {
  return 'Hello, World!';
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(markdown);
  }, [markdown]);

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <div>
        <textarea
          id="editor"
          onChange={handleEditorChange}
          defaultValue={initialMarkdown}
        />
      </div>
      <div id="preview" />
    </div>
  );
};

export default MarkdownPreviewer;
