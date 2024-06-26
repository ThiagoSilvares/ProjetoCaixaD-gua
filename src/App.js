import React from "react";
import { Login } from "./login/Login";
import { Register } from "./login/Register";
import Home from "./components/Home";
import Caixadagua from "./pages/Caixadagua";
import Suporte from "./pages/Suporte";
import Historico from "./pages/Historico";
import Alertas from "./pages/Alertas";
import Perfil from "./pages/Perfil";
import SmartLights from "./pages/SmartLights";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function SidebarLayout() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Caixadagua />} />
        {/* <Route path="/caixadagua" element={<Caixadagua />} /> */}
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/smartlights" element={<SmartLights />} />
        <Route path="/alertas" element={<Alertas />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Configurando a rota principal */}
        <Route path="/*" element={<SidebarLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
