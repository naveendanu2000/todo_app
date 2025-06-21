import { useContext, useState } from "react";
import { TodoDataContext } from "../context/TodoDataContext";

const AddTodo = () => {
  const [message, setMessage] = useState("");
  const [important, setImportant] = useState(false);
  const { addTodoItem } = useContext(TodoDataContext);

  const handleImportant = () => {
    setImportant((prev) => !prev);
  };

  const handleAddTodoItem = () => {
    addTodoItem(message, important);
    setMessage("");
  };

  return (
    <div className="row p-3 my-3 mx-5 rounded-4 border add-todo shadow">
      <input
        className="col-9 text-center border-0"
        type="text"
        id="message"
        value={message}
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
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
