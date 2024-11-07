import React from "react";
import { FaTools, FaShieldAlt, FaThumbsUp, FaClock } from "react-icons/fa";

const ChooseUs = () => {
  const reasons = [
    {
      icon: <FaTools className="text-orange-500 w-12 h-12 mb-4" />,
      title: "Expert Technicians",
      description:
        "Our team of certified professionals are experienced in handling all types of home appliance repairs.",
    },
    {
      icon: <FaShieldAlt className="text-orange-500 w-12 h-12 mb-4" />,
      title: "Reliable Service",
      description:
        "We prioritize quality and guarantee our work to ensure customer satisfaction with every service.",
    },
    {
      icon: <FaThumbsUp className="text-orange-500 w-12 h-12 mb-4" />,
      title: "Affordable Prices",
      description:
        "Get top-quality service at competitive prices, with no hidden charges or surprise fees.",
    },
    {
      icon: <FaClock className="text-orange-500 w-12 h-12 mb-4" />,
      title: "Quick Turnaround",
      description:
        "We value your time, offering fast and efficient repair services without compromising quality.",
    },
  ];

  return (
    <div className=" p-6 md:p-12 lg:p-16">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600">
          Discover the reasons why our customers trust us for their home
          appliance repairs.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            {reason.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
