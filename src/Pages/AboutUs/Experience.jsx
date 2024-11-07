import React, { useState, useEffect } from "react";
import { FaUsers, FaRegCalendarAlt, FaProjectDiagram } from "react-icons/fa";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counterInterval);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(counterInterval);
  }, [target, duration]);

  return <span>{count}</span>;
};

const Experience = () => {
  const counters = [
    {
      id: 1,
      icon: <FaUsers size={40} />,
      target: 500,
      label: "Satisfied Customers",
    },
    {
      id: 1,
      icon: <FaProjectDiagram size={40} />,
      target: 50,
      label: "Expert Team Members",
    },

    {
      id: 3,
      icon: <FaRegCalendarAlt size={40} />,
      target: 10,
      label: "Years of Experience",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 p-8  ">
      {counters.map(({ id, icon, target, label }) => (
        <div key={id} className="flex flex-col items-center text-center gap-4">
          <div className="text-orange-500">{icon}</div>
          <h2 className="text-3xl font-bold text-blue-900 ">
            <Counter target={target} duration={2000} />+
          </h2>
          <p className="text-gray-600">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
