import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BMIPage from "./pages/BMIPage";
import ScrollToTop from "./helpers/ScrollToTop";
import Background from "./components/general/Background";
import WorkoutsPage from "./pages/WorkoutsPage";
import { useSettingsContext } from "./context/SettingsContext";
import { useEffect } from "react";
import ProgressPage from "./pages/ProgressPage";

function App() {
  const { disableScroll } = useSettingsContext();
  useEffect(() => {
    document.body.style.overflow = disableScroll ? "hidden" : "unset";
  }, [disableScroll]);
  return (
    <div className={`relative h-full w-full scroll-smooth`}>
      <Background />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bmi" element={<BMIPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/tracker" element={<ProgressPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
