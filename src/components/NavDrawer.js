import toast from "react-hot-toast";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { logoutService } from "../services/authServices";

const NavDrawer = ({ children }) => {
  const [drawerDisplay, setDrawerDisplay] = useState("");
  const {
    auth: { isAuthenticated, user },
    setAuth,
  } = useAuth();
  const navigate = useNavigate();

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
          <Link className="nav-title title-w-logo" to="/">
            <img src="/assets/logo.svg" className="nav-logo" />
            pawws
          </Link>
        </div>
        <div className="nav-section nav-section-right">
          {!isAuthenticated && (
            <NavLink to="/login" className="btn btn-primary btn-sm btn-icon">
              <span className="material-icons"> person </span>
              Login
            </NavLink>
          )}
          {isAuthenticated && (
            <>
              <NavLink to="/user" className="btn btn-primary btn-sm btn-icon">
                <span className="material-icons"> person </span>
                Hi, {user.firstName}
              </NavLink>
              <button
                className="btn btn-primary btn-sm btn-icon"
                title="Log Out"
                onClick={() => {
                  logoutService();
                  setAuth({
                    isAuthenticated: false,
                    user: "",
                    token: "",
                  });
                  toast.success("Successfully signed out");
                  navigate("/");
                }}
              >
                <span className="material-icons"> logout </span>
              </button>
            </>
          )}
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
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-nav-item side-nav-item-active"
                    : "side-nav-item"
                }
                to="/playlists"
              >
                <span className="material-icons">playlist_play</span>
                Playlists
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-nav-item side-nav-item-active"
                    : "side-nav-item"
                }
                to="/liked"
              >
                <span className="material-icons">thumb_up</span>
                Liked videos
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-nav-item side-nav-item-active"
                    : "side-nav-item"
                }
                to="/watchlater"
              >
                <span className="material-icons">watch_later</span>
                Watch Later
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "side-nav-item side-nav-item-active"
                    : "side-nav-item"
                }
                to="/history"
              >
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
