import { useContext } from "react";
import { TodoDataContext } from "../context/TodoDataContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const { copyTodo } = useContext(TodoDataContext);

  <div>
    {copyTodo.map((item) => (
      <TodoListItem item={item} />
    ))}
  </div>;
};

export default TodoList;
