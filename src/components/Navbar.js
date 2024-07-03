import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    Navigate("/");
  };

  return (
    <div className="nav">
      <h3>Admin-panel</h3>
      <button className="right" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
