import { useContext } from "react";
import { TodoDataContext } from "../context/TodoDataContext";
import { ThemeContext } from "../context/ThemeContext";

const TodoListItem = ({ item }) => {
  const { deleteTodoItem, toggleCompleted } = useContext(TodoDataContext);
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className="row my-3 mx-5 py-3 px-5 rounded-2 shadow"
      style={
        dark
          ? { backgroundColor: "#481E14", color: "white" }
          : { backgroundColor: "#acffd9e8" }
      }
    >
      <div className={` col-1`}>
        <i
          className={`${
            item.important ? "visible" : "invisible"
          } bi bi-exclamation-circle`}
          style={{ fontSize: "1.5rem", color: "orange" }}
        ></i>
      </div>
      <div
        className="col-9 text-center align-content-center"
        style={item.completed ? { textDecoration: "line-through" } : {}}
      >
        {item.message}
      </div>
      <div
        className="col-1 text-end"
        onClick={() => {
          toggleCompleted(item.id);
        }}
      >
        <i
          class="bi bi-check2-circle"
          style={
            item.completed
              ? { color: "green", fontSize: "1.5rem", fontWeight: "bold" }
              : { fontSize: "1.5rem" }
          }
        ></i>
      </div>
      <div
        className="col-1 text-end"
        onClick={() => {
          deleteTodoItem(item.id);
        }}
      >
        <i
          className="bi bi-trash"
          style={
            dark
              ? { fontSize: "1.5rem", color: "black" }
              : { fontSize: "1.5rem", color: "red" }
          }
        ></i>
      </div>
    </div>
  );
};

export default TodoListItem;
