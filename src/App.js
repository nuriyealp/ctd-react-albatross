import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

import styles from "./App.module.css";

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const API_BASE = "https://api.airtable.com/v0/";
  const API_DEFAULT = "/Default";
  const SORT_FIELD = "sort[0][field]=";
  const SORT_DIRECTION = "sort[0][direction]=";

  // https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort[0][field]=Title&sort[0][direction]=asc

  React.useEffect(() => {
    fetch(
      `${API_BASE}${process.env.REACT_APP_AIRTABLE_BASE_ID}${API_DEFAULT}?${SORT_FIELD}Title&${SORT_DIRECTION}asc`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  console.log(todoList);
  return (
    <div className={styles.container}>
      <h1 className={styles.headlinePrimary}>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
}

export default App;
