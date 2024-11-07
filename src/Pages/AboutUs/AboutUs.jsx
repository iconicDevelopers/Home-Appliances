// AboutUs.jsx
import about1 from "../../assets/about.jpg";
import Experience from "./Experience";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8" id="aboutus">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Image with Background Style */}
          <div className="md:w-1/2 relative h-80 md:h-[320px] lg:h-[400px] p-6  shadow-xl overflow-hidden bg-transparent group border-2 border-orange-500">
            <div className="absolute inset-0 border-2 border-dashed border-orange-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"></div>
            <img
              src={about1}
              alt="Service Example"
              className="w-full h-full transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 w-full h-full mt-8 lg:mt-0 lg:pl-8 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 md:text-start mb-5">
              About Us
            </h2>
            <h2 className="text-3xl font-bold text-gray-800">
              Your Trusted Team for Reliable Appliance Repairs
            </h2>
            <p className="text-gray-600 text-justify leading-relaxed">
              Welcome to our home appliance services! We are committed to
              delivering dependable repair solutions that bring convenience and
              peace of mind to your home. Our team combines experience and
              cutting-edge technology to ensure your appliances run smoothly,
              efficiently, and for the long term.
            </p>
            <p className="mt-4 text-gray-600 text-justify leading-relaxed">
              Whether you need energy-saving solutions or the latest in smart
              appliance support, we're here to provide you with high-quality
              repairs and personalized service. Count on us for reliable,
              cost-effective solutions that elevate your home's comfort and
              efficiency.
            </p>
          </div>
        </div>
      </div>
      <Experience />
    </>
  );
};

export default AboutUs;
