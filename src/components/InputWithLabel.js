import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label className={styles.label} htmlFor="todoTitle">
        {children}
      </label>
      <input
        className={styles.input}
        value={todoTitle}
        onChange={handleTitleChange}
        id="todoTitle"
        type="text"
        name="title"
        ref={inputRef}
        placeholder="Type title name"
      ></input>
    </>
  );
};

InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default InputWithLabel;
