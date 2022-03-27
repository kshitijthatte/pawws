import "./styles.css";
import { Route, Routes } from "react-router-dom";
import NavDrawer from "./components/NavDrawer";
import Home from "./pages/Home/";

function App() {
  return (
    <>
      <NavDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NavDrawer>
    </>
  );
}

export default App;
