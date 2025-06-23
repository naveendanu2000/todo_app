import { useContext } from "react";
import ToggleButton from "./ToggleButton";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className="row border-bottom border-secondary-subtle px-5 py-2"
      style={
        dark
          ? { backgroundColor: "#000000db" }
          : { backgroundColor: "#acffd996" }
      }
    >
      <div className="col-11 text-center">
        <h1>Todo L:st</h1>
      </div>
      <div className="col-1 text-center">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;
