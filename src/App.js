import "./styles.css";
import NavDrawer from "./components/NavDrawer";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
      <NavDrawer>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NavDrawer>
    </>
  );
}

export default App;
