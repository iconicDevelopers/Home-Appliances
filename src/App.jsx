import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import ChooseUs from "./Pages/AboutUs/ChooseUs.jsx";
import MainServicesHome from "./Pages/MainServices/MainServicesHome.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<MainServicesHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/choose-us" element={<ChooseUs />} />
      </Routes>
      <section id="contact-us">
        <Footer />
      </section>
    </>
  );
}

export default App;
