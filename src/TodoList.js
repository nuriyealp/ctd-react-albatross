import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Finish homework", 
  },
  {
    id: 2,
    title: "Go to park",
  },
  {
    id: 3,
    title: "Cook",
  },
];
  
function TodoList () {
  return (
    <ul>
      {todoList.map(function(todo){
        return <TodoListItem key={todo.id} todo={todo}/>
      })}
    </ul>
  );
}

export default TodoList;