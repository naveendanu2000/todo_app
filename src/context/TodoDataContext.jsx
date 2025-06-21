import { createContext, useEffect, useState } from "react";

export const TodoDataContext = createContext();

export const TodoDataProvider = ({ children }) => {
  const [filter, setFilter] = useState({ important: true, completed: true });
  const [todoList, setTodoList] = useState([]);
  const [copyTodo, setCopyTodo] = useState([]);

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

  const addTodoItem = (message, important) => {
    setTodoList((prev) => [
      ...prev,
      { message: message, important: important, completed: false },
    ]);
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
  }, [filter]);

  const toggleFilter = (key) => {
    setFilter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <TodoDataContext.Provider
      value={{ filter, toggleFilter, toggleAll, addTodoItem, copyTodo }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
