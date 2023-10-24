import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        
          <h1 className="navbar-brand">Shop Muziq</h1>
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto  mr-5">
            <li className="nav-item">
              <Link to="/" className="nav-link active ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link  active ">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="newproduct " className="nav-link active ">
                New Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
