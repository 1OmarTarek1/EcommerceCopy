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
          <NavLink to={"/products"}>WebLOGO</NavLink>
        </div>
        <ul className="navLinks">
          <li className="navLi">
            <NavLink to="/products" className="navLink">
              Home
            </NavLink>
          </li>
          {isAuthenticated && localStorage.getItem("type") === "admin" ? (
            <li className="navLi">
              <NavLink to="/AdminHome" className="navLink">
                Ads
              </NavLink>
            </li>
          ) : (
            <></>
          )}
          <li className="navLi">
            <div className="navLink shopeCard">Shope Card</div>
          </li>
          <div className="logoutBtn">
            {isAuthenticated ? (
              <button className="" onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <></>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavSec;
