import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuiaTalles } from "./components/pages/talles/GuiaTalles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/guiaTalles" element={<GuiaTalles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
