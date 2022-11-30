// import LandingPage from "./pages/Landing/LandingPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import StressTest from "./pages/StressTest"
import AboutUs from "./Components/Pages/AboutUs"
import LandingPage from "./Components/Pages/LandingPage"

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/stressTest" element={<StressTest />} />
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}

export default App
