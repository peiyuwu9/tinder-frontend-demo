import React from "react";
import "./Header.css";

import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>

      <img
        className="header-logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="Tinter Logo"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}

export default Header;
