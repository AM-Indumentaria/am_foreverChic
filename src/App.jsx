import "bootstrap/dist/css/bootstrap.min.css";

import { NavbarContainer } from "./Components/layout/navbar/NavbarContainer";
import { CarouselAm } from "./Components/Carousel/Carousel";
import { Moda } from "./Components/moda/Moda";
import { GuiaTalles } from "./Components/talles/GuiaTalles";
import { QuienesSomos } from "./Components/quienes_somos/QuienesSomos";
import { AccordionAm } from "./Components/Accordion/AccordionAm";
import { Footer } from "./Components/layout/footer/Footer.jsx";
import { FloatButton } from "./Components/floatButton/FloatButton";

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
