import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";
import { LikesProvider } from "./contexts/likesContext";
import { WatchlaterProvider } from "./contexts/watchlaterContext";
import { PlaylistProvider } from "./contexts/playlistContext";
import { HistoryProvider } from "./contexts/historyContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "var(--primary-color)",
            },
          },
        }}
      />
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
