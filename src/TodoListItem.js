import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <>
      <li>{todo.fields.Title}</li>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        Remove
      </button>
    </>
  );
}

export default TodoListItem;
