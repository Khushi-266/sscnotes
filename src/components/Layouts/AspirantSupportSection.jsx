// src/components/AspirantSupportSection.jsx
import {
  FaUserGraduate,
  FaLightbulb,
  FaLanguage,
  FaBriefcase,
  FaUserEdit,
} from "react-icons/fa";

const supportPoints = [
  {
    icon: <FaUserGraduate />,
    title: "Starting Your Preparation Just Now",
    description:
      "A perfect start for your preparation with our materials. We’ve made it beginner friendly so you don’t feel overwhelmed.",
  },
  {
    icon: <FaLightbulb />,
    title: "Planning to Start Preparation",
    description:
      "Even if you haven’t started yet, this set will guide you step by step into preparation mode without confusion.",
  },
  {
    icon: <FaLanguage />,
    title: "Hindi / English Medium Aspirants",
    description:
      "We’ve made this set inclusive for both Hindi and English medium students, with clear bilingual content.",
  },
  {
    icon: <FaBriefcase />,
    title: "Working Professionals",
    description:
      "Our quick revision and short notes help you make the most of limited time — ideal for busy work schedules.",
  },
  {
    icon: <FaUserEdit />,
    title: "Self-Study Aspirants",
    description:
      "Even if you're preparing on your own, this set is easy to follow, structured, and self-guided for efficient learning.",
  },
];

export default function AspirantSupportSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center"
          data-aos="fade-up"
        >
          Who Is This For?
        </h2>

        <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
          {supportPoints.map((point, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon bubble */}
              <span className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                {point.icon}
              </span>

              <h3 className="text-lg font-semibold text-gray-800">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
