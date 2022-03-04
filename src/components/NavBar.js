import React from "react";
import propTypes from "prop-types";

const NavBar = ({ user, logOut }) => {
  return (
    <nav>
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
