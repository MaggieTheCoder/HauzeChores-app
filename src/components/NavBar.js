import React from "react";
import propTypes from "prop-types";
import "../styles/NavBar.css";

const NavBar = ({ user, logOut }) => {
  return (
    <nav className="navbar">
      {user && (
        <div>
          <p>Logged in as {user.email}</p>
          <button type="button" onClick={() => logOut()}>
            Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  user: propTypes.shape(),
  logOut: propTypes.func.isRequired,
};

NavBar.defaultProps = {
  user: null,
};
