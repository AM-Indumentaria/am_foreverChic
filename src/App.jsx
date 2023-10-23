import "bootstrap/dist/css/bootstrap.min.css";

import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { CarouselAm } from "./Components/Carousel/Carousel";
import { Moda } from "./components/moda/Moda";
import { GuiaTalles } from "./components/talles/GuiaTalles";
import { QuienesSomos } from "./components/quienes_somos/QuienesSomos";
import { AccordionAm } from "./Components/Accordion/Accordion";
import { Footer } from "./components/layout/footer/Footer.jsx";
import { FloatButton } from "./components/floatButton/FloatButton";

function App() {
  return (
    <>
      <NavbarContainer />
      <CarouselAm />
      <Moda />
      <GuiaTalles />
      <QuienesSomos />
      <AccordionAm />
      <FloatButton />
      <Footer />
    </>
  );
}

export default App;
