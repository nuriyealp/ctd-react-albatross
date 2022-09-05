import React from "react";
import styles from "./App.module.css";

function InputWithLabel(props) {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label className={styles.label} htmlFor="todoTitle">
        {props.children}
      </label>
      <input
        className={styles.input}
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
