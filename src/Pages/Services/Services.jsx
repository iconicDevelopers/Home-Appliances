import React from "react";
import { FaPhone } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import service from "../../assets/service.jpg";
import AC from "../../assets/services/AC.webp";
import cctv from "../../assets/services/CCTV.webp";
import chimny from "../../assets/services/chimny.png";
import copper from "../../assets/services/copper.jpg";
import corecutting from "../../assets/services/corecutting.jpg";
import commercial from "../../assets/services/commercial.jpeg";
import gayser from "../../assets/services/gayser.webp";
import microwave from "../../assets/services/microwave.webp";
import purifier from "../../assets/services/purifier.jpg";
import referegirater from "../../assets/services/refregirater.webp";
import washingmachine from "../../assets/services/washingmachine.webp";
import waterHeater from "../../assets/services/heater.webp";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { name: "Microwave Oven", image: microwave },
    { name: "Refrigerators", image: referegirater },
    { name: "Washing Machine", image: washingmachine },
    { name: "Air-Conditioners", image: AC },
    { name: "Commercial & Domestic/GAS Stove", image: commercial },
    { name: "Copper Piping", image: copper },
    { name: "Kitchen Chimneys", image: chimny },
    { name: "Water Purifiers", image: purifier },
    { name: "Gas Geysers", image: gayser },
    { name: "Water Heaters", image: waterHeater },
    { name: "CCTV", image: cctv },
    { name: "Core Cutting", image: corecutting },
  ];

  const { ref: leftSectionRef, inView: leftSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-gray-50 p-6 md:p-12 lg:p-16" id="services">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Section - 5/12 width */}
        <div
          ref={leftSectionRef}
          className={`basis-5/12 space-y-6 transition duration-700 ease-in-out transform ${
            leftSectionInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Our Services
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Comprehensive Home Appliances Repair Services
          </h1>
          <p className="text-gray-600 text-justify">
            We offer a comprehensive range of repair services for all major home
            appliances. Whether your refrigerator is leaking, your oven isn't
            heating, or your washing machine is making strange noises, we have
            the solution.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              to="/services"
              className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition"
            >
              Our Solutions
            </Link>
            <p className="flex items-center font-bold">
              <a href="tel:+919480012696" className="flex items-center">
                <FaPhone className="text-orange-500 mr-3 " />
                <span className="hover:text-orange-500"> +91 9480012696</span>
              </a>
            </p>
          </div>
          <div className="mt-6">
            <img
              src={service}
              alt="Service Example"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section - 7/12 width Services Grid */}
        <div className="basis-7/12 grid  md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const { ref: serviceRef, inView: serviceInView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            // Apply a delay based on the index for staggered animation
            const delay = `${index * 50}ms`; // Adjust delay as needed

            return (
              <div
                key={service.name}
                ref={serviceRef}
                style={{ transitionDelay: delay }}
                className={`flex flex-col items-center justify-center px-2 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-700 ease-in-out transform h-56 w-full ${
                  serviceInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-36 mb-3"
                />
                <div className="text-lg font-semibold text-orange-500 text-center">
                  {service.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
