import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo for home page button once she gives it to you

function Navbar() {
  return (
    <>
      <nav className="navbar" />
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Flory Fitness
        </Link>
      </div>
    </>
  );
}

export default Navbar;
