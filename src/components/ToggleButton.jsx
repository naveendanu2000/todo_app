import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleButton = () => {
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <div className="toggle-button h-100">
      <div
        className="form-check form-switch"
        style={{
          "--bs-gutter-x": "0rem",
          margin: 0,
          padding: 0,
          alignSelf: "center",
        }}
      >
        <input
          className={`form-check-input  ${
            dark ? "border-white toggle-dark" : "border-black"
          }`}
          type="checkbox"
          role="switch"
          id="switchCheckChecked"
          checked={dark}
          onChange={toggleDark}
          style={{
            margin: 0,
            padding: 0,
          }}
        />
      </div>
      <div>{dark ? "Dark" : "Light"}</div>
    </div>
  );
};

export default ToggleButton;
