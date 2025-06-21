import { useContext, useEffect, useState } from "react";
import { TodoDataContext } from "../context/TodoDataContext";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { todoList } = useContext(TodoDataContext);
  const { dark } = useContext(ThemeContext);

  const [allCount, setAllCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [importantCount, setImportantCount] = useState(0);
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {}, [todoList]);

  return (
    <div
      className="row px-5 py-4 text-center"
      style={dark ? {} : { backgroundColor: "#acffd996" }}
    >
      <div className="col">Total: {allCount}</div>
      <div className="col">Completed: {completedCount}</div>
      <div className="col">Important: {importantCount}</div>
      <div className="col">Todo: {todoCount}</div>
    </div>
  );
};

export default Footer;
