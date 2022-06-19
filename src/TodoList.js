import React from 'react';

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
      {todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })}
    </ul>
  )
}

export default TodoList;