import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuienesSomos } from "./components/pages/quienes_somos/QuienesSomos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobreNosotros" element={<QuienesSomos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
