import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Contactenos from "./components/Contactenos";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/Navbar"; 

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="contacto" element={<Contactenos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="productos" element={<Productos />} />
        </Route>
        <Route path="/home" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
