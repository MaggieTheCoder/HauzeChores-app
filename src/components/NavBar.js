import React from "react";
import propTypes from "prop-types";
import "../styles/NavBar.css";
import Header from "./Header";
// import Footer from "./Footer";

const NavBar = ({ user, logOut, code }) => {
  return (
    <nav className="navbar">
      {user && (
        <div>
          <Header />
          <div className="user__grid">
            <p className="user">Logged in as {user.email}</p>
            <button
              className="logout_button"
              type="button"
              onClick={() => logOut()}
            >
              LOG OUT
            </button>
          </div>
          {code && <p className="invitation_code"> Invite code: {code}</p>}
          {/* <Footer /> */}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  user: propTypes.shape(),
  logOut: propTypes.func.isRequired,
  code: propTypes.string.isRequired,
};

NavBar.defaultProps = {
  user: null,
};
