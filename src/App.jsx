import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarContainer } from './components/layout/navbar/NavbarContainer'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarContainer />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
