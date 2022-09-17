import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";

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
TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};
export default TodoListItem;
