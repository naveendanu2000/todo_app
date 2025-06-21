import { TodoDataContext } from "../context/TodoDataContext";
import { useContext } from "react";

const TodoToolBar = () => {
  const { filter, toggleFilter } = useContext(TodoDataContext);

  return (
    <div className="row text-center px-5">
      <div
        className="col-8"
        style={{ padding: "1.5rem 2rem", backgroundColor: "#acffd9e8" }}
      >
        <input
          placeholder="Search"
          id="search"
          className="w-100 p-1 text-center rounded-3"
        />
      </div>
      <div className="align-content-center col-1">
        <input
          className="mx-2"
          type="checkbox"
          id="all"
          checked={filter.all}
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
