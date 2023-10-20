import { AccordionAm } from './Components/Accordion/Accordion'
import { Moda } from "./moda/Moda";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselAm } from "./Components/Carousel/Carousel"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarContainer } from './components/layout/navbar/NavbarContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GuiaTalles } from "./components/pages/talles/GuiaTalles";



function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarContainer />} />
        <Route path='/' element={<CarouselAm />} />
           <Route path='/moda' element={<Moda />} />
           <Route path='/accordion' element={<AccordionAm />} />
           <Route path="/guiaTalles" element={<GuiaTalles />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
