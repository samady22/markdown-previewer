import Toolbar from "./Toolbar";
import React from "react";
import { useSelector } from "react-redux";
import { marked } from "marked";

const Preview = (props) => {
  const markdown = useSelector((state) => state.markdown);
  const htmlContent = marked(markdown);
  return (
    <div className="container">
      <div className="previewer" id="preview">
        <Toolbar
          title={"Previewer"}
          isExpand={props.isExpand}
          setExpand={props.setExpand}
        />
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
};
export default Preview;
