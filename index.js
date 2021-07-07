function Box(props) {
  // Write your code here.
  const { style, content } = props;
  return (
    <div className={style}>
      <h1 className="box-heading"> {content}</h1>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading-1">Boxes</h1>
    <div className="box-alignment">
      <div className="box-container">
        <div className="inner-container">
          <Box style="b1" content="Small" />
        </div>
        <div className="inner-container">
          <Box style="b2" content="Medium" />
        </div>
        <div className="inner-container">
          <Box style="b3" content="Large" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
