import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Pages/Footer/Footer";
import ChooseUs from "./Pages/AboutUs/ChooseUs";
import MainServicesHome from "./Pages/MainServices/MainServicesHome";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <>
      <NavBar />
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
