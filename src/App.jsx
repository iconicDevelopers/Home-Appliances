import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import MainServicesHome from "./Pages/MainServices/MainServicesHome.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<MainServicesHome />} />
      </Routes>
      <section id="contact-us">
        <Footer />
      </section>
    </>
  );
}

export default App;
