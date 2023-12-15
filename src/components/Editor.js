import Preview from "./Preview";
import Toolbar from "./Toolbar";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <div className="editor">
          <Toolbar title={"Editor"} />
          <div className="text-area" id="editor">
            <textarea onChange={this.handleChange}>{defaultText}</textarea>
          </div>
        </div>
        <Preview text={this.state.input} />
      </div>
    );
  }
}

export default Editor;
