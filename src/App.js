import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
      <NavDrawer>
        <AppRoutes />
      </NavDrawer>
    </>
  );
}

export default App;
