import React from "react";
import Footer from "../Layouts/Footer";
import TopBar from "../Layouts/Topbar";
import Navbar from "../Layouts/Navbar";

const notes = [
  {
    id: 1,
    section: "CET Group C",
    category: "Polity",
    title: "Indian Constitution - Complete Notes",
    img: "/images/polity.jpg",
    link: "#",
    color: "bg-indigo-500",
  },
  {
    id: 2,
    section: "CET Group C",
    category: "Geography",
    title: "Physical & Indian Geography",
    img: "/images/geography.jpg",
    link: "#",
    color: "bg-orange-500",
  },
  {
    id: 3,
    section: "CET Group D",
    category: "History",
    title: "Modern History Made Easy",
    img: "/images/history.jpg",
    link: "#",
    color: "bg-teal-500",
  },
  {
    id: 4,
    section: "CET Group D",
    category: "Maths",
    title: "Quantitative Aptitude Tricks",
    img: "/images/math.jpg",
    link: "#",
    color: "bg-pink-500",
  },
  {
    id: 5,
    section: "Haryana Police",
    category: "Computer Knowledge",
    title: "Computer Knowledge Basics",
    img: "/images/computer.jpg",
    link: "#",
    color: "bg-green-500",
  },
  {
    id: 6,
    section: "Haryana Police",
    category: "Science",
    title: "General Science Complete Pack",
    img: "/images/science.jpg",
    link: "#",
    color: "bg-purple-500",
  },
  {
    id: 7,
    section: "Other Exams",
    category: "Reasoning",
    title: "Reasoning Notes",
    img: "/images/reasoning.jpg",
    link: "#",
    color: "bg-red-500",
  },
  {
    id: 8,
    section: "Other Exams",
    category: "Current Affairs",
    title: "Monthly Current Affairs PDF",
    img: "https://dummyimage.com/420x260/f6e05e/000000&text=Current+Affairs",
    link: "#",
    color: "bg-yellow-500",
  },
];

const NotesSection = () => {
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.section]) acc[note.section] = [];
    acc[note.section].push(note);
    return acc;
  }, {});

  return (
    <>
      <TopBar />
      <Navbar />
      <section className="py-40 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            📚 Your <span className="text-indigo-600">SSC Study Notes</span> — All in One Place
          </h2>

          {/* Stylish Top Button */}
          <div className="mb-10 text-center">
            <a
              href="/premium-notes"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              💰 Pay only ₹299 and get <span className="underline">all notes</span> in one place!
            </a>
          </div>


          {Object.entries(groupedNotes).map(([sectionName, sectionNotes]) => (
            <div key={sectionName} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-indigo-600 pl-4">
                {sectionName}
              </h3>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:w-full w-[80%] mx-auto">
                {sectionNotes.map(({ id, category, title, img, link, color }) => (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-48">
                      <img alt={title} src={img} className="object-cover w-full h-full" />
                      <span
                        className={`absolute top-3 left-3 text-xs px-3 py-1 text-white font-semibold rounded-full ${color}`}
                      >
                        {category}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
                      <p className="text-sm text-gray-500 mb-3 flex-grow">
                        Boost your prep with curated notes.
                      </p>
                      <div className="mt-auto text-right">
                        <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                          View Notes
                        </button>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotesSection;
