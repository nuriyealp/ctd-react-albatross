import React from "react";

function InputWithLabel(props) {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        id="todoTitle"
        type="text"
        name="title"
        ref={inputRef}
      ></input>
    </>
  );
}

export default InputWithLabel;
