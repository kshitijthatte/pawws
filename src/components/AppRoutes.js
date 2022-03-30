import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Playlists from "../pages/Playlists";
import LikedVideos from "../pages/LikedVideos";
import WatchLater from "../pages/WatchLater";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
