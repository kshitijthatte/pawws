import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";
import { LikesProvider } from "./contexts/likesContext";
import { WatchlaterProvider } from "./contexts/watchlaterContext";
import { PlaylistProvider } from "./contexts/playlistContext";

function App() {
  return (
    <>
      <NavDrawer>
        <PlaylistProvider>
          <LikesProvider>
            <WatchlaterProvider>
              <AppRoutes />
            </WatchlaterProvider>
          </LikesProvider>
        </PlaylistProvider>
      </NavDrawer>
    </>
  );
}

export default App;
