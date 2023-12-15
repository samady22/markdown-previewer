import $ from "jquery";
const Toolbar = (props) => {
  const handleClick = () => {
    if (props.title === "Editor" && !props.isExpand) {
      $("textarea").css("height", "90vh");
      $(".previewer").css("display", "none");
      props.setExpand(!props.isExpand);
    } else if (props.title === "Previewer" && !props.isExpand) {
      $("markdown").css("height", "90vh");
      $(".editor").css("display", "none");
      props.setExpand(!props.isExpand);
    } else {
      props.setExpand(!props.isExpand);
      $("textarea").css("height", "250px");
      $(".previewer").css("display", "block");
      $("markdown").css("height", "200px");
      $(".editor").css("display", "block");
    }
  };
  return (
    <div className="header">
      <div className="title-wrapper">
        <div className="title">
          <i className="fab fa-free-code-camp fcc-icon"></i>{" "}
          <span>{props.title}</span>
        </div>
      </div>
      <div className="expand-icon" onClick={handleClick}>
        {!props.isExpand ? (
          <i className="fas fa-expand-arrows-alt"></i>
        ) : (
          <i className="fas fa-compress"></i>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
