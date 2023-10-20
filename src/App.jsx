import { AccordionAm } from './Components/Accordion/Accordion'
import { Moda } from "./moda/Moda";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselAm } from "./Components/Carousel/Carousel"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarContainer } from './components/layout/navbar/NavbarContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuiaTalles } from "./components/pages/talles/GuiaTalles";
import { FloatButton } from "./floatButton/FloatButton";
import { QuienesSomos } from "./components/pages/quienes_somos/QuienesSomos";

function App() {
  return (
    <>
      <FloatButton />
    </>
  );
}

export default App;
