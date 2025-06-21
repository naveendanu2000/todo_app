import ToggleButton from "./ToggleButton";

const Header = () => {
  return (
    <div className="row border border-bottom" style={{padding:"1rem"}}>
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
