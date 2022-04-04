import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";
import { LikesProvider } from "./contexts/likesContext";
import { WatchlaterProvider } from "./contexts/watchlaterContext";
import { PlaylistProvider } from "./contexts/playlistContext";
import { HistoryProvider } from "./contexts/historyContext";

function App() {
  return (
    <>
      <NavDrawer>
        <PlaylistProvider>
          <LikesProvider>
            <WatchlaterProvider>
              <HistoryProvider>
                <AppRoutes />
              </HistoryProvider>
            </WatchlaterProvider>
          </LikesProvider>
        </PlaylistProvider>
      </NavDrawer>
    </>
  );
}

export default App;
