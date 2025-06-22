import { createContext, useEffect, useState } from "react";

export const TodoDataContext = createContext();

export const TodoDataProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    all: true,
    important: false,
    completed: false,
    todo: false,
  });
  const [todoList, setTodoList] = useState([]);
  const [copyTodo, setCopyTodo] = useState([]);

  useEffect(() => {
    if (filter.all) {
      setCopyTodo(todoList.filter((item) => item));
    }
    if (filter.important) {
      setCopyTodo(todoList.filter((item) => item.important));
    }
    if (filter.important && filter.completed) {
      setCopyTodo(todoList.filter((item) => item.important && item.completed));
    }
    if (filter.important && filter.todo) {
      setCopyTodo(todoList.filter((item) => item.important && item.todo));
    }
    if (filter.completed) {
      setCopyTodo(todoList.filter((item) => item.completed));
    }
    if (filter.todo) {
      setCopyTodo(todoList.filter((item) => !item.completed));
    }
  }, [filter, todoList]);

  const toggleFilter = (key) => {
    if (key === "all") {
      if (!filter.all)
        setFilter({
          all: true,
          completed: false,
          important: false,
          todo: false,
        });
      else
        setFilter({
          all: false,
          completed: false,
          important: false,
          todo: true,
        });
    } else {
      setFilter((prev) => ({ ...prev, [key]: !prev[key], all: false }));
    }
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

    console.log(message, important, "called");
  };

  const toggleCompleted = (id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  //Search Logic
  const handleSearch = (searchText) => {
    setCopyTodo(
      todoList.filter((item) =>
        item.message.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <TodoDataContext.Provider
      value={{
        filter,
        toggleFilter,
        addTodoItem,
        copyTodo,
        deleteTodoItem,
        toggleCompleted,
        handleSearch,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
