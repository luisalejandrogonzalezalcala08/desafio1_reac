import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar
      className="d-flex justify-content-between px-5"
      variant="light"
      style={{ background: "#0f224a" }}
    >
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>Pizza Mamma Mia!</h1>
      </NavLink>
      <div>
        <NavLink to="/shopingCar" style={{ textDecoration: "none" }}>
          {" "}
          🛒{" "}
        </NavLink>
      </div>
    </Navbar>
  );
};
export default Menu;
