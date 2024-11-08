import service from "../../assets/service.jpg";
import WhatsApp from "../../Components/WhatsApp.jsx";
import MainServices from "./MainServices.jsx";

const MainServicesHome = () => {
  return (
    <>
      <div className="relative h-[500px] overflow-hidden">
        {/* Background and Overlay with Zoom Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom"
          style={{ backgroundImage: `url(${service})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-4"> Services</h2>
          <p className="text-sm md:text-lg">
            We provide high-quality services to meet all your repair and
            maintenance needs. Explore our range of offerings below.
          </p>
        </div>
      </div>

      <MainServices />
      <WhatsApp />
    </>
  );
};

export default MainServicesHome;
