import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Playlists from "../pages/Playlists";
import SinglePlaylist from "../pages/SinglePlaylist";
import LikedVideos from "../pages/LikedVideos";
import WatchLater from "../pages/WatchLater";
import SingleVideo from "../pages/SingleVideo";
import History from "../pages/History";
import NotFound from "../pages/404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/watch/:videoID" element={<SingleVideo />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:playlistID" element={<SinglePlaylist />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
