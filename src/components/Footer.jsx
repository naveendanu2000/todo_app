import { useContext, useEffect, useState } from "react";
import { TodoDataContext } from "../context/TodoDataContext";

const Footer = () => {
  const { todoList } = useContext(TodoDataContext);

  const [allCount, setAllCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [importantCount, setImportantCount] = useState(0);
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    console.log("---------------======-------------- Counting called!");
    setAllCount(0);
    setCompletedCount(0);
    setImportantCount(0);
    setTodoCount(0);

    todoList.map((item) => {
      setAllCount((prev) => prev + 1);
      if (item.completed) setCompletedCount((prev) => prev + 1);
      if (item.important) setImportantCount((prev) => prev + 1);
      if (!item.completed) setTodoCount((prev) => prev + 1);
    });
  }, [todoList]);

  return (
    <div className="row px-5 py-4 text-center">
      <div className="col">Total: {allCount}</div>
      <div className="col">Completed: {completedCount}</div>
      <div className="col">Important: {importantCount}</div>
      <div className="col">Todo: {todoCount}</div>
    </div>
  );
};

export default Footer;
