
import homeImage from "../../assets/home1.jpg";
import WhatsApp from "../../Components/WhatsApp";
import AboutUs from "../AboutUs/AboutUs";
import ChooseUs from "../AboutUs/ChooseUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-red-600">
        <img
          src={homeImage}
          alt="Home Image"
          className="w-full h-full opacity-70 animate-zoom"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-3 md:mb-4 animate-fade-in">
            Unmatched Quality & Innovation in Bangalore
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 animate-fade-in-delay">
            Your Trusted Partner for Home Appliance Care
          </p>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Page Sections */}
      <section id="about-us" className="py-10 md:py-10">
        <AboutUs />
      </section>

      <section id="services" className="py-10 md:py-10 bg-white">
        <Services />
      </section>

      <section className="pb-20 md:pb-20">
        <ChooseUs />
      </section>
      <WhatsApp />
    </>
  );
};

export default Home;
