import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { FaDownload, FaUsers, FaFileAlt, FaBookOpen } from "react-icons/fa";

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.7) {
        setStartCount(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // check on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    {
      id: 1,
      icon: <FaDownload className="text-blue-600 w-12 h-12 mb-3" />,
      value: 2700,
      label: "Downloads",
      suffix: "+",
    },
    {
      id: 2,
      icon: <FaUsers className="text-blue-600 w-12 h-12 mb-3" />,
      value: 1300,
      label: "Active Users",
      suffix: "+",
    },
    {
      id: 3,
      icon: <FaFileAlt className="text-blue-600 w-12 h-12 mb-3" />,
      value: 74,
      label: "Notes & PDFs",
    },
    {
      id: 4,
      icon: <FaBookOpen className="text-blue-600 w-12 h-12 mb-3" />,
      value: 46,
      label: "Topics Covered",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-20 px-6 sm:px-10 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Empower Your SSC Preparation
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl">
          Trusted by thousands of aspirants, our notes and resources help you prepare smarter and faster for SSC exams.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {stats.map(({ id, icon, value, label, suffix }) => (
          <div
            key={id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-8 w-48 sm:w-56 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {icon}
            <h3 className="text-4xl font-bold text-blue-600">
              {startCount ? <CountUp end={value} duration={2} /> : "0"}
              {suffix || ""}
            </h3>
            <p className="mt-2 text-gray-600 font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
