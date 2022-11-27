import { Route, Routes } from "react-router-dom"
import AboutUs from "./Components/Pages/AboutUs"
import LandingPage from "./Components/Pages/LandingPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
