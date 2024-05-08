// setIsAdmin(false); // comment
import { NavLink, useHistory } from "react-router-dom";
import "./NavSec.css";

const NavSec = ({ setIsAuthenticated, isAuthenticated }) => {
  const history = useHistory();

  const logoutHandler = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
    localStorage.removeItem("type");
    history.push("/");
  };

  return (
    <div className="Navbar">
      <div className="NavContainer">
        <div className="logoWrapper">
          <NavLink to={"/"}>WebLOGO</NavLink>
        </div>
        <ul className="navLinks">
          <li className="navLi">
            <NavLink to="/" className="navLink">
              link
            </NavLink>
          </li>
          <li className="navLi">
            <NavLink to="/products" className="navLink">
              Shope
            </NavLink>
          </li>
          {isAuthenticated && localStorage.getItem("type") === "admin" ? (
            <li className="navLi">
              <NavLink to="/AdminHome" className="navLink">
                AdminLink
              </NavLink>
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div className="shope">
          <NavLink to={"!#"}>ShopeCard</NavLink>
          {isAuthenticated ? (
            <button className="" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavSec;
