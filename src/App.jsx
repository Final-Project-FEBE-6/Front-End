// import LandingPage from "./pages/Landing/LandingPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/Pages/AboutUs";
import LandingPage from "./Components/Pages/LandingPage";
import Test from "./pages/Test";
import SoalStress from "./Components/SoalStress";
import SoalKesepian from "./Components/SoalKesepian";
import SoalOvt from "./Components/SoalOvt";
import Login from "./Components/Login";
import Article from "./pages/Article";
import PsikologList from "./pages/PsikologList";
import ArticleDetail from "./pages/ArticleDetail";
import Logout from "./Components/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/stress" element={<SoalStress />} />
        <Route path="/kesepian" element={<SoalKesepian />} />
        <Route path="/ovt" element={<SoalOvt />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/psikolog" element={<PsikologList />} />
      </Routes>
    </div>
  );
}

export default App;
