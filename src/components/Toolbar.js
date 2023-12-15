const Toolbar = (props) => {
  return (
    <div className="header">
      <div className="title-wrapper">
        <div className="title">
          <i className="fab fa-free-code-camp fcc-icon"></i>{" "}
          <span>{props.title}</span>
        </div>
      </div>
      <div className="expand-icon">
        <i className="fas fa-expand-arrows-alt"></i>
      </div>
    </div>
  );
};

export default Toolbar;
