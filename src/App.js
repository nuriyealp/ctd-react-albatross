import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

import styles from "./App.module.css";

const App = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortDirection, setSortDirection] = React.useState("asc");

  const API_BASE = "https://api.airtable.com/v0/";
  const API_DEFAULT = "/Default";
  const SORT_FIELD = "sort[0][field]=";
  const SORT_DIRECTION = "sort[0][direction]=";

  // https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort[0][field]=Title&sort[0][direction]=asc

  React.useEffect(() => {
    fetch(
      `${API_BASE}${process.env.REACT_APP_AIRTABLE_BASE_ID}${API_DEFAULT}?${SORT_FIELD}Title&${SORT_DIRECTION}${sortDirection}`,
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
  }, [sortDirection]);

  const addTodo = (newTodo) => {
    fetch(
      `${API_BASE}${process.env.REACT_APP_AIRTABLE_BASE_ID}${API_DEFAULT}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: newTodo.fields }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    fetch(
      `${API_BASE}${process.env.REACT_APP_AIRTABLE_BASE_ID}${API_DEFAULT}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const newTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(newTodoList);
  };

  const handleSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    }
    if (sortDirection === "desc") {
      setSortDirection("asc");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headlinePrimary}>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todoList={todoList}
          onRemoveTodo={removeTodo}
          sortDirection={sortDirection}
          handleSortDirection={handleSortDirection}
        />
      )}
    </div>
  );
};

export default App;
