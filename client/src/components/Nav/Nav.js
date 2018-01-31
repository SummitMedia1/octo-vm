import React from "react";
const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header text-center">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          The University of Denver & Trilogy Presents: Panopto Boot Camp Videos
        </a>
      </div>
    </div>
  </nav>;
export default Nav;
