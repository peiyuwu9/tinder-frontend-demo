import React from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import "./Layout.css";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          {pathname === "/" ? (
            <IconButton>
              <PersonIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          )}
          <Link to="/">
            <img
              className="header-logo"
              src="./tinder-logo.png"
              alt="Tinter Logo"
            />
          </Link>
          <Link to="chats">
            <IconButton>
              <ForumIcon fontSize="large" />
            </IconButton>
          </Link>
        </div>
        <div className="content">
          {navigation.state === "loading" ? (
            <CircularProgress color="inherit" />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
