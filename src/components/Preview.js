import Toolbar from "./Toolbar";

class Preview extends React.Component {
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
        <div className="previewer" id="preview">
          <Toolbar title={"Previewer"} />
          <div className="markdonw">
            <ReactMarkdown>{this.props.text}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}
export default Preview;
