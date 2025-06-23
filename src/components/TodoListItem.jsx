import { useContext, useState, useEffect } from "react";
import { TodoDataContext } from "../context/TodoDataContext";
import { ThemeContext } from "../context/ThemeContext";
import { memo } from "react";

const TodoListItem = ({ item }) => {
  const { deleteTodoItem, toggleCompleted, handleEdit } =
    useContext(TodoDataContext);
  const { dark } = useContext(ThemeContext);
  const [edit, setEdit] = useState(false);
  const [newMessage, setNewMessage] = useState(item.message);
  useEffect(() => {
    // console.log("edit changed:", edit);
  }, [edit]);

  return (
    <div
      className="row my-3 mx-5 py-3 px-5 rounded-2 shadow"
      style={
        dark
          ? { backgroundColor: "#481E14", color: "white" }
          : { backgroundColor: "#000000", color: "white" }
      }
    >
      <div className={`col`}>
        <i
          className={`${
            item.important ? "visible" : "invisible"
          } bi bi-exclamation-circle`}
          style={{ fontSize: "1.5rem", color: "orange" }}
        ></i>
      </div>
      <div
        className={`col-9 text-center align-content-center ${
          edit ? "d-none" : ""
        }`}
        style={item.completed ? { textDecoration: "line-through" } : {}}
      >
        {item.message}
      </div>
      <input
        className={`col-9 text-center align-content-center border-0 rounded-3 ${
          !edit ? "d-none" : ""
        }`}
        type="text"
        id="newMessage"
        value={newMessage}
        style={
          !dark
            ? { backgroundColor: "#d5ffece8" }
            : {
                backgroundColor: "#1c1c1c",
                color: "white",
              }
        }
        placeholder="Enter the updated Item"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <div className="col text-end">
        <i
          className={`bi bi-pencil-fill ${edit ? "d-none" : ""}`}
          style={{ color: "#acffd9e8", fontSize: "1.5rem", fontWeight: "bold" }}
          onClick={() => {
            setEdit(true);
          }}
        ></i>
        <i
          role="button"
          className={`bi bi-arrow-90deg-up ${!edit ? "d-none" : ""}`}
          style={{ color: "#acffd9e8", fontSize: "1.5rem", fontWeight: "bold" }}
          onClick={() => {
            setEdit(false);
            handleEdit(item.id, newMessage);
            setNewMessage(item.message);
          }}
        ></i>
      </div>
      <div
        className="col text-end"
        onClick={() => {
          toggleCompleted(item.id);
        }}
      >
        <i
          class="bi bi-check2-circle"
          style={
            item.completed
              ? { color: "#acffd9e8", fontSize: "1.5rem", fontWeight: "bold" }
              : { fontSize: "1.5rem" }
          }
        ></i>
      </div>
      <div
        className="col text-end"
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

export default memo(TodoListItem);
