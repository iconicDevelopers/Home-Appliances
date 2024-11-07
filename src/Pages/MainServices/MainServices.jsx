import React from "react";
import { FaTools } from "react-icons/fa";
import Ac from "../../assets/MainServices/AC.webp";
import cctv from "../../assets/MainServices/cctv.jpg";
import chimny from "../../assets/MainServices/chimny.jpg";
import coperpiping from "../../assets/MainServices/coperpiping.jpg";
import gasStove from "../../assets/MainServices/gas.webp";
import gasgeyser from "../../assets/MainServices/gasgeyser.webp";
import microoven from "../../assets/MainServices/microoven.jpg";
import refregirater from "../../assets/MainServices/refregirater.jpg";
import washingmachine from "../../assets/MainServices/washingmachine.jpg";
import waterPurifier from "../../assets/MainServices/water.webp";
import waterHeater from "../../assets/MainServices/waterHeater.jpg";
import corecutting from "../../assets/MainServices/AC.webp";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Microwave Oven",
    description: [
      "Quick and reliable repair services for all microwave models.",
      "Fix heating and power issues efficiently.",
      "Advanced diagnostics to identify the root cause.",
      "Restoring the appliance’s performance to like-new condition.",
    ],
    image: microoven,
  },
  {
    title: "Refrigerators",
    description: [
      "Repair services for cooling problems, temperature control, and more.",
      "Handle noisy refrigerators and malfunctioning compressors.",
      "Experts in fixing ice build-up, leaks, and door sealing issues.",
      "Ensuring energy efficiency and long-lasting performance.",
    ],
    image: refregirater,
  },
  {
    title: "Washing Machine",
    description: [
      "Fix issues with washing, spinning, or draining.",
      "Diagnosis of motor failures and electrical problems.",
      "Repairing leaks, noisy cycles, and water drainage problems.",
      "Providing cost-effective and long-lasting repairs.",
    ],
    image: washingmachine,
  },
  {
    title: "Air-Conditioners",
    description: [
      "Comprehensive repair services for AC cooling problems.",
      "Cleaning filters and ensuring airflow efficiency.",
      "Fixing thermostat issues and refrigerant leaks.",
      "Offering energy-efficient solutions and long-term maintenance.",
    ],
    image: Ac,
  },
  {
    title: "Commercial & Domestic GAS Stove",
    description: [
      "Reliable gas stove repairs for both commercial and home use.",
      "Fixing burner issues, gas leaks, and faulty ignition systems.",
      "Ensure gas safety and effective burner operation.",
      "Cost-effective repair services with long-lasting results.",
    ],
    image: gasStove,
  },
  {
    title: "Copper Piping",
    description: [
      "Leak detection and repair for copper pipes.",
      "Fixing damaged or corroded pipes efficiently.",
      "Providing long-term, reliable solutions for plumbing systems.",
      "Ensuring leak-free, durable installations.",
    ],
    image: coperpiping,
  },
  {
    title: "Kitchen Chimneys",
    description: [
      "Repair services for chimney motors, fans, and filters.",
      "Fixing power issues, noise problems, and airflow restrictions.",
      "Maintaining clean and functional chimneys for efficient ventilation.",
      "Ensuring safety and high performance for kitchen use.",
    ],
    image: chimny,
  },
  {
    title: "Water Purifiers",
    description: [
      "Repairing RO, UV, and UF water purifiers.",
      "Replacing filters and restoring water quality.",
      "Fixing leakage, motor, and electrical issues.",
      "Ensuring proper functioning for clean, safe drinking water.",
    ],
    image: waterPurifier,
  },
  {
    title: "Gas Geysers",
    description: [
      "Efficient repair services for gas geyser heating issues.",
      "Fixing gas leaks, thermostat problems, and heating failures.",
      "Quick and safe repairs to restore hot water functionality.",
      "Ensuring safety and energy efficiency in the repair process.",
    ],
    image: gasgeyser,
  },
  {
    title: "Water Heaters",
    description: [
      "Fast repair services for water heater failures.",
      "Fixing issues like no hot water, leaking, and thermostat malfunction.",
      "Providing solutions for all major water heater brands.",
      "Ensuring consistent hot water supply and energy efficiency.",
    ],
    image: waterHeater,
  },
  {
    title: "CCTV",
    description: [
      "Repairing CCTV cameras, DVR systems, and wiring issues.",
      "Fixing video loss, connection problems, and power issues.",
      "Ensuring 24/7 security through reliable system repairs.",
      "Affordable solutions for maintaining high-quality surveillance.",
    ],
    image: cctv,
  },
  {
    title: "Core Cutting",
    description: [
      "Expert core cutting services for precise and clean drilling.",
      "Repair and maintenance of core cutting equipment.",
      "Ideal for creating holes for pipes, electrical systems, and more.",
      "Providing fast, accurate, and non-disruptive cutting solutions.",
    ],
    image: corecutting,
  },
];

const MainServices = () => {
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      <div className="container mx-auto px-4">
        {services.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true, // Animate only once
            threshold: 0.1, // Trigger animation when 10% of item is visible
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } mb-12 items-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } rounded-lg p-2 md:p-6 shadow-md transition duration-700 ease-in-out transform ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* First Column (Image) */}
              <div className="w-full md:w-1/2 p-2 md:p-6">
                <div className="w-full h-64 md:h-96 overflow-hidden flex justify-center items-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Second Column (Text) */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h2
                  className={`text-2xl md:text-3xl font-semibold mb-4 ${
                    index % 2 === 0 ? "text-red-500" : "text-indigo-600"
                  }`}
                >
                  {service.title}
                </h2>
                <ul className="text-base md:text-lg space-y-2">
                  {service.description.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaTools
                        className={`mr-2 mt-1 ${
                          index % 2 === 0 ? "text-red-600" : "text-indigo-600"
                        }`}
                      />
                      <span
                        className={
                          index % 2 === 0 ? "text-gray-800" : "text-gray-700"
                        }
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainServices;
