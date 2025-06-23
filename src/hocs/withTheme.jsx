import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const withTheme = (Component) => {
  function Func(props) {
    const { dark, toggleDark } = useContext(ThemeContext);
    return <Component {...props} dark={dark} toggleDark={toggleDark} />;
  }

  return Func;
};
