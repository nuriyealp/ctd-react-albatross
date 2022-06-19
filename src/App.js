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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>{todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })}
      </ul>
    </div>
  );
}

export default App;
