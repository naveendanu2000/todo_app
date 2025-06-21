import { useContext } from "react";
import { TodoDataContext } from "../context/TodoDataContext";

const TodoListItem = ({ item }) => {
  const { deleteTodoItem } = useContext(TodoDataContext);

  return (
    <div className="row my-3 mx-5">
      <div className={`${item.important} ? "visible" : "invisible" col-1`}>
        <i class="bi bi-exclamation-circle"></i>
      </div>
      <div className="col-8">{item.message}</div>
      <div
        className="col-1"
        onClick={() => {
          deleteTodoItem(id);
        }}
      >
        <i class="bi bi-trash"></i>
      </div>
    </div>
  );
};

export default TodoListItem;
