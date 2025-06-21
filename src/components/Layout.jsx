import { ThemeProvider } from "../context/ThemeContext";
import { TodoDataProvider } from "../context/TodoDataContext";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoToolBar from "./TodoToolbar";

const Layout = () => {
  return (
    <div>
      <ThemeProvider>
        <TodoDataProvider>
          <div className="rounded-bottom-4 position-fixed top-0 w-100 z-1 shadow">
            <Header />
            <TodoToolBar />
          </div>
          <AddTodo />
        </TodoDataProvider>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
