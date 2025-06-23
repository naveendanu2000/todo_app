import { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const withTheme = (Component) => {
  function Func(props) {
    const { dark, toggleDark } = useContext(ThemeContext);
    return <Component {...props} dark={dark} toggleDark={toggleDark} />;
  }

  return Func;
};

// Higher order Components are used to pass the states in multiple components, this takes a component as an argument and the return an enhanced component.

// this login can be used in the component that may utilize the theme context, for example the header component should change the color according to the Theme.

// implementation
// Header Component

// import { useContext } from "react";
// import ToggleButton from "./ToggleButton";
// import { ThemeContext } from "../context/ThemeContext";
// import {withTheme} from "../hocs/withTheme";

const Header = ({dark}) => {
//   const { dark } = useContext(ThemeContext); This is not require since the exported function is enhanced with HOC withTheme(). The hoc returns the component with the context variables, i.e dark and toggleDark.

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

export default withTheme(Header); // here the withTheme is called with Header component as a function, and the withTheme will return a component with dark and toggleDark.

