import React from "react";
import './navbar.css';
import SearchNavbar from "./searchNavbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-title">Welcome Amanda</div>
        <div className="nav-text">Tue 07 Jue 2022</div>
      </div>
      <div className="nav-right">
        <SearchNavbar />
      </div>
    </div>
  );
};

export default Navbar;
