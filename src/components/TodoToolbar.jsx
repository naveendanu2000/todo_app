import { TodoDataContext } from "../context/TodoDataContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useState } from "react";

const TodoToolBar = () => {
  const { filter, toggleFilter, handleSearch } = useContext(TodoDataContext);
  const { dark } = useContext(ThemeContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  return (
    <div className="row text-center px-5">
      <div className="col-8" style={{ padding: "1.5rem 2rem" }}>
        <input
          placeholder="Search"
          id="search"
          className="w-100 p-1 text-center rounded-3"
          style={
            !dark
              ? { backgroundColor: "#d5ffece8" }
              : { backgroundColor: "#1c1c1c", color: "white" }
          }
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="align-content-center col-1">
        <input
          className="mx-2"
          type="checkbox"
          id="all"
          checked={
            filter.all ||
            (!filter.completed && !filter.important && !filter.todo)
          }
          onChange={() => {
            toggleFilter("all");
          }}
        />
        <label for="all">All</label>
      </div>
      <div className="align-content-center col-1">
        <input
          className="mx-2"
          type="checkbox"
          id="completed"
          checked={filter.completed}
          onChange={() => {
            toggleFilter("completed");
            if (filter.todo) toggleFilter("todo");
          }}
        />
        <label for="completed">Completed</label>
      </div>
      <div className="align-content-center col-1">
        <input
          className="mx-2"
          type="checkbox"
          id="important"
          checked={filter.important}
          onChange={() => {
            toggleFilter("important");
          }}
        />
        <label for="important">Important</label>
      </div>
      <div className="align-content-center col-1">
        <input
          className="mx-2"
          type="checkbox"
          id="todo"
          checked={filter.todo}
          onChange={() => {
            toggleFilter("todo");
            if (filter.completed) toggleFilter("completed");
          }}
        />
        <label for="todo">Todo</label>
      </div>
    </div>
  );
};

export default TodoToolBar;
