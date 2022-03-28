import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Playlists from "../pages/Playlists";
import SinglePlaylist from "../pages/SinglePlaylist";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/playlists"
        element={
          <PrivateRoute>
            <Playlists />
          </PrivateRoute>
        }
      />
      <Route
        path="/liked"
        element={
          <PrivateRoute>
            <SinglePlaylist playlistTitle="Liked Videos" />
          </PrivateRoute>
        }
      />
      <Route
        path="/watchlater"
        element={
          <PrivateRoute>
            <SinglePlaylist playlistTitle="Watch Later" />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
