import React from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import styles from "../App.module.css";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo({
      fields: { Title: todoTitle },
      id: Date.now().toString(),
    });

    setTodoTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button
        className={`${styles.button} ${styles.buttonFlexOne}`}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
