import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BMIPage from "./pages/BMIPage";
import ScrollToTop from "./helpers/ScrollToTop";
import Background from "./components/general/Background";

function App() {
  return (
    <div className="relative h-full w-full scroll-smooth">
      <Background />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bmi" element={<BMIPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
