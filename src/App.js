import "./styles.css";
import { Route, Routes } from "react-router-dom";
import NavDrawer from "./components/NavDrawer";
import Home from "./pages/Home/";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <NavDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </NavDrawer>
    </>
  );
}

export default App;
