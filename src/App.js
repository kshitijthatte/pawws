import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";
import { LikesProvider } from "./contexts/likesContext";
import { WatchlaterProvider } from "./contexts/watchlaterContext";

function App() {
  return (
    <>
      <NavDrawer>
        <LikesProvider>
          <WatchlaterProvider>
            <AppRoutes />
          </WatchlaterProvider>
        </LikesProvider>
      </NavDrawer>
    </>
  );
}

export default App;
