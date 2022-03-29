import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";
import { LikesProvider } from "./contexts/likesContext";

function App() {
  return (
    <>
      <NavDrawer>
        <LikesProvider>
          <AppRoutes />
        </LikesProvider>
      </NavDrawer>
    </>
  );
}

export default App;
