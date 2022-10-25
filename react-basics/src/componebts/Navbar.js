import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          TextConverter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                {props.title1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.title2}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

/* ------------------------------ forvalidation,Can also give REquired also ----------------------------- */
Navbar.propTypes = { title1: PropTypes.string.isRequired, title2: PropTypes.string.isRequired };
/* ---------------------------- for DefaultValues --------------------------- */
Navbar.defaultProps={
  title1:"title goes here",
  title2:"title 2 here"
}
