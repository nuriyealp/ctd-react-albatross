import React from "react";
import styles from "./App.module.css";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={styles.item}>
      {todo.fields.Title}
      <button
        className={styles.button}
        type="button"
        onClick={() => onRemoveTodo(todo.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
