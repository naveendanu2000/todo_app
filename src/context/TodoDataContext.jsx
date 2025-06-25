import { createContext, useCallback, useEffect, useState } from "react";

export const TodoDataContext = createContext();

export const TodoDataProvider = ({ children }) => {
  //data Fetching

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch("/data/todo.json");
  //       const data = await response.json();
  //       setTodoList(data);
  //     } catch (error) {
  //       console.error("Error Reading the file.", error);
  //     }
  //   };
  //   getData();
  // }, []);

  const [filter, setFilter] = useState({
    all: true,
    important: false,
    completed: false,
    todo: false,
  });
  const [todoList, setTodoList] = useState([]);
  const [copyTodo, setCopyTodo] = useState([]);

  useEffect(() => {
    if (filter.important && filter.completed) {
      setCopyTodo(todoList.filter((item) => item.important && item.completed));
    } else if (filter.important && filter.todo) {
      setCopyTodo(todoList.filter((item) => item.important && !item.completed));
    } else if (filter.completed) {
      setCopyTodo(todoList.filter((item) => item.completed));
    } else if (filter.important) {
      setCopyTodo(todoList.filter((item) => item.important));
    } else if (filter.todo) {
      setCopyTodo(todoList.filter((item) => !item.completed));
    } else if (filter.all) {
      setCopyTodo(todoList);
    } else {
      setCopyTodo(todoList);
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

    // console.log(message, important, "called");
  };

  const handleEdit = useCallback((id, message) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, message: message } : item
      )
    );
  }, []);

  const toggleCompleted = useCallback((id) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }, []);

  // When to use useCallback
  // If you pass a function (like toggleCompleted, deleteTodoItem, handleEdit, etc.) as a prop to a memoized child component (e.g., TodoListItem wrapped in React.memo),
  // Without useCallback, a new function instance is created on every render, causing the memoized child to re-render even if its props/data haven't changed.

  const deleteTodoItem = useCallback((id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  }, []);

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
        todoList,
        handleEdit,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
