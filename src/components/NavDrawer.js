import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavDrawer = ({ children }) => {
  const [drawerDisplay, setDrawerDisplay] = useState("");

  return (
    <>
      <nav className="nav">
        <div className="nav-section">
          <button
            className="material-icons nav-icon header-navigation-icon"
            onClick={() =>
              drawerDisplay === "flex"
                ? setDrawerDisplay("none")
                : setDrawerDisplay("flex")
            }
          >
            menu
          </button>
          <Link className="nav-title" to="/">
            <img src="/assets/logo.svg" className="nav-logo" />
            pawws
          </Link>
        </div>
        <div className="nav-section nav-section-right">
          <Link className="btn btn-primary btn-sm btn-icon" to="/">
            <span className="material-icons"> notifications </span>
          </Link>
          <Link className="btn btn-primary btn-sm btn-icon" to="/login">
            <span className="material-icons"> person </span>
            Log In
          </Link>
        </div>
      </nav>
      <div className="drawer-frame">
        <aside className="drawer" style={{ display: drawerDisplay }}>
          <div className="drawer-content">
            <nav className="side-nav">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-nav-item side-nav-item-active"
                    : "side-nav-item"
                }
                to="/"
              >
                <span className="material-icons">home</span>
                Home
              </NavLink>
              <NavLink className="side-nav-item" to="/">
                <span className="material-icons">playlist_play</span>
                Playlists
              </NavLink>
              <NavLink className="side-nav-item" to="/">
                <span className="material-icons">thumb_up</span>
                Liked videos
              </NavLink>
              <NavLink className="side-nav-item" to="/">
                <span className="material-icons">watch_later</span>
                Watch Later
              </NavLink>
              <NavLink className="side-nav-item" to="/">
                <span className="material-icons">history</span>
                History
              </NavLink>
            </nav>
          </div>
        </aside>
        <div className="main">{children}</div>
      </div>
    </>
  );
};

export default NavDrawer;
