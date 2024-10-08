import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg   bg-${props.mode}`}>
        <div className="container-fluid ">
          <Link className={`navbar-brand  text-${props.mode === 'dark' ? 'light' : 'dark'}`} to="/">
            Textutils
          </Link>
          <button
            className={`navbar-toggler  bg-${props.mode === 'dark' ? 'light' : 'dark'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className={`nav-link text-${props.mode === 'dark' ? 'light' : 'dark'}`} aria-current="page" to="/Textform">
                  Text Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === 'dark' ? 'light' : 'dark'}`} to="/About">
                  About Us
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'dark' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
</div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//   website: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
// };

