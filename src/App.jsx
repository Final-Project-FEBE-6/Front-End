// import LandingPage from "./pages/Landing/LandingPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import StressTest from "./pages/StressTest"

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<StressTest />} />
      </Routes>
    </div>
  )
}

export default App
