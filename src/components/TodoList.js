import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "../App.module.css";
import PropTypes from "prop-types";

const TodoList = ({
  todoList,
  onRemoveTodo,
  handleSortDirection,
  sortDirection,
}) => {
  return (
    <ul>
      <li className={styles.item}>
        <button
          className={styles.title}
          type="button"
          onClick={handleSortDirection}
        >
          <i
            className={`fa-solid fa-${
              sortDirection === "asc" ? "down" : "up"
            }-long`}
          ></i>
          Title
        </button>
      </li>
      {todoList.map(function (todo) {
        return (
          <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
