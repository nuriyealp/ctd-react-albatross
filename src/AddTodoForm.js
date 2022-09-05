import React from "react";
import InputWithLabel from "./InputWithLabel";

import styles from "./App.module.css";

function AddTodoForm({ onAddTodo }) {
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
}

export default AddTodoForm;
