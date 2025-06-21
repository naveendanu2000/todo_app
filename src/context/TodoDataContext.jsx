import { createContext, useEffect, useState } from "react";

export const TodoDataContext = createContext();

export const TodoDataProvider = ({ children }) => {
  const [filter, setFilter] = useState({ important: true, completed: true });
  const [todoList, setTodoList] = useState([]);
  const [copyTodo, setCopyTodo] = useState([]);

  //Filter Operations
  const toggleAll = () => {
    if (!filter.completed && filter.important) {
      setFilter((prev) => ({ ...prev, completed: true }));
    } else if (filter.completed && !filter.important) {
      setFilter((prev) => ({ ...prev, important: true }));
    } else if (filter.completed === filter.important) {
      setFilter((prev) => ({
        completed: !prev.completed,
        important: !prev.important,
      }));
    }
  };

  useEffect(() => {
    if (filter.completed) {
      setCopyTodo(todoList.filter((item) => item.completed));
    } else if (filter.important) {
      setCopyTodo(todoList.filter((item) => item.important));
    } else if (filter.completed && filter.important) {
      setCopyTodo(todoList.filter((item) => item.completed && item.important));
    } else {
      setCopyTodo(todoList.filter((item) => !item.completed));
    }
  }, [filter, todoList]);

  const toggleFilter = (key) => {
    setFilter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  //CRUD operations
  const getNextId = () => {
    let nextId = 0;
    todoList.map((item) => {
      item.id > nextId ? (nextId = item.id) : nextId;
    });

    return nextId;
  };

  const addTodoItem = (message, important) => {
    const nextId = getNextId() + 1;
    setTodoList((prev) => [
      ...prev,
      { id: nextId, message: message, important: important, completed: false },
    ]);
  };

  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <TodoDataContext.Provider
      value={{ filter, toggleFilter, toggleAll, addTodoItem, copyTodo, deleteTodoItem }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
