import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Button from "./visuals/Button";
const Navbar = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  function logout() {
    auth.logout();
    navigate("/");
  }
  function navLinkStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textdecoration: isActive ? "none" : "underline",
    };
  }
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      {auth.user !== null && auth.user.role === "admin" && (
        <NavLink style={navLinkStyles} to="/allUsers">
          All Users
        </NavLink>
      )}
      {auth.user !== null && (
        <NavLink style={navLinkStyles} to="/profile">
          Profile
        </NavLink>
      )}

      {auth.user === null && (
        <NavLink className="navbar-button" style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
      {auth.user !== null && (
        <Button
          classname="navbar-button"
          style={navLinkStyles}
          onClick={logout}
        >
          Logout
        </Button>
      )}
    </nav>
  );
};
export default Navbar;
