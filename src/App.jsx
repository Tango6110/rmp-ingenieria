import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auditorias from "./pages/Auditorias";
import Mallas from "./pages/Mallas";
import SGIIE from "./pages/SGIIE";
import NFPA70E from "./pages/NFPA70E";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/auditorias-electricas-industriales"
          element={<Auditorias />}
        />

        <Route
          path="/mallas-de-puesta-a-tierra"
          element={<Mallas />}
        />

        <Route
          path="/sgiie-sec"
          element={<SGIIE />}
        />

        <Route
          path="/nfpa-70e"
          element={<NFPA70E />}
        />

      </Routes>
    </BrowserRouter>
  );
}
