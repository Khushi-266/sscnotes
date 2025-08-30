import { FaBookOpen, FaClock, FaFileAlt, FaMobileAlt, FaStar, FaSync, FaPenFancy, FaBolt } from "react-icons/fa";

const features = [
  { icon: <FaBookOpen />, title: "Comprehensive Notes", description: "Well-structured notes for every SSC subject and topic." },
  { icon: <FaClock />, title: "Time-Saving", description: "Focused and exam-relevant material to boost your preparation." },
  { icon: <FaFileAlt />, title: "PDF Downloads", description: "Easily downloadable PDFs to study offline anytime." },
  { icon: <FaSync />, title: "Regular Updates", description: "Content updated frequently as per the latest exam patterns." },
  { icon: <FaStar />, title: "Expert Curated", description: "Notes prepared by experienced educators and toppers." },
  { icon: <FaMobileAlt />, title: "Mobile Friendly", description: "Optimized for mobile and tablet devices." },
  { icon: <FaPenFancy />, title: "Practice Questions", description: "Get topic-wise practice sets with answers." },
  { icon: <FaBolt />, title: "Fast Access", description: "Lightning-fast loading with Vite and optimized delivery." },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-6 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 text-center">What You'll Get</h2>
        
        <ul className="space-y-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-4 relative">
              {/* Icon */}
              <div className="text-blue-600 text-2xl shrink-0 mt-1">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>

              {/* Divider */}
              {index < features.length - 1 && (
                <hr className="absolute left-0 bottom-[-1.5rem] w-full border-t border-gray-200 sm:left-8" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
