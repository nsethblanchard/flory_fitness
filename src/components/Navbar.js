import React, { useState } from "react";

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
