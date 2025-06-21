import { useContext, useState } from "react";
import { TodoDataContext } from "../context/TodoDataContext";
import { ThemeContext } from "../context/ThemeContext";

const AddTodo = () => {
  const [message, setMessage] = useState("");
  const [important, setImportant] = useState(false);
  const { addTodoItem } = useContext(TodoDataContext);
  const { dark } = useContext(ThemeContext);

  const handleImportant = () => {
    setImportant((prev) => !prev);
  };

  const handleAddTodoItem = () => {
    addTodoItem(message, important);
    setMessage("");
  };

  return (
    <div
      className="row p-3 my-3 mx-5 rounded-4 add-todo shadow"
      style={
        dark
          ? { backgroundColor: "#000c", padding: "2rem", color: "white" }
          : { backgroundColor: "#acffd9e8", padding: "2rem" }
      }
    >
      <input
        className="col-8 text-center border-0 rounded-3"
        type="text"
        id="message"
        value={message}
        style={
          !dark
            ? { backgroundColor: "#d5ffece8", marginLeft: "3rem" }
            : {
                backgroundColor: "#1c1c1c",
                marginLeft: "3rem",
                color: "white",
              }
        }
        placeholder="Enter Todo Item"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="col-2 align-content-center text-center">
        <input
          type="checkbox"
          className="mx-2"
          id="imp"
          checked={important}
          onChange={handleImportant}
        />
        <label for="imp">Important</label>
      </div>
      <div className="col-1 text-center align-content-center">
        <button
          role="button"
          onClick={handleAddTodoItem}
          className="btn btn-success"
          style={dark ? { backgroundColor: "#692414", border: "none" } : {}}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
