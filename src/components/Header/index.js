import React from 'react';
import './navbar.scss';


const Header = () => (
  <div className="header">
    <nav className="navbar nav navbar-expand-lg  navbar-dark bg-dark">
      <a className="navbar-brand logo" href="/">
       StackOverflow-lite
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-1 mt-lg-0 nav-1">
          <a href="/post_question" className="nav-link active">Create Question </a>
        </ul>
        <ul className="navbar-nav mr-2 mt-2 mt-lg-0 nav-2">
          <a href="/login" className="nav-link active">Login</a>
          <a href="/signup" className="nav-link active">Signup </a>
        </ul>

        <form className="form-inline my-2 my-lg-0 ">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-btn">
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>
      </div>
    </nav>
  </div>
);

export default Header;
