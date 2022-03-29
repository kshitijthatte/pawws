import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Playlists from "../pages/Playlists";
import SinglePlaylist from "../pages/SinglePlaylist";
import PrivateRoutes from "./PrivateRoutes";
import LikedVideos from "../pages/LikedVideos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route
          path="/watchlater"
          element={<SinglePlaylist playlistTitle="Watch Later" />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
