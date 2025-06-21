import { ThemeContext } from "../context/ThemeContext";
import { TodoDataProvider } from "../context/TodoDataContext";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoToolBar from "./TodoToolbar";
import TodoMain from "./TodoMain";
import { useContext, useEffect } from "react";
import Footer from "./Footer";

const Layout = () => {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "#000c" : "#fff";
    document.body.style.color = dark ? "#fff" : "#222";

    // Optional: Clean up on unmount
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [dark]);

  return (
    <div>
      <TodoDataProvider>
        <div
          className="rounded-bottom-4 position-fixed top-0 w-100 z-1 shadow"
          style={
            dark
              ? { backgroundColor: "#000000e0" }
              : { backgroundColor: "#acffd9e8" }
          }
        >
          <Header />
          <TodoToolBar />
        </div>
        <TodoMain />
        <AddTodo />

        <div
          className="rounded-top-4 position-fixed bottom-0 w-100 z-1 shadow px-5"
          style={
            dark
              ? { backgroundColor: "#000000e0" }
              : { backgroundColor: "#acffd9e8" }
          }
        >
          <Footer />
        </div>
      </TodoDataProvider>
    </div>
  );
};

export default Layout;
