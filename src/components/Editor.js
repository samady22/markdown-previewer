import { useDispatch, useSelector } from "react-redux";
import Preview from "./Preview";
import Toolbar from "./Toolbar";
import React, { useState } from "react";
import { updateAction } from "../actions/editorActions";

const Editor = () => {
  const [isExpand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const markdown = useSelector((state) => state.markdown);
  const handleChange = (event) => {
    dispatch(updateAction(event.target.value));
  };

  return (
    <div className="container">
      <div className="editor">
        <Toolbar title={"Editor"} isExpand={isExpand} setExpand={setExpand} />
        <div className="text-area" id="editor">
          <textarea onChange={handleChange} value={markdown}>
            {markdown}
          </textarea>
        </div>
      </div>
      <Preview text={markdown} isExpand={isExpand} setExpand={setExpand} />
    </div>
  );
};

export default Editor;
