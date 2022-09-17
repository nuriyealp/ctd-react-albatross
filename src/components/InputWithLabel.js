import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";

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

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default InputWithLabel;
