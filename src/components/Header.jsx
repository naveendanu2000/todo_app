import { useContext } from "react";
import ToggleButton from "./ToggleButton";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const {dark} = useContext(ThemeContext);
  return (
    <div className={`row ${dark ? "dark-header border-bottom border-white" : "border-bottom border-black"}`}>
      <div className="col-11 text-center">
        <h1>tO dO lIST</h1>
      </div>
      <div className="col-1 text-center">
        <ToggleButton />
      </div>
    </div>
  );
};

export default Header;
