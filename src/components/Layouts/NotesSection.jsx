import React from "react";
import { FaBookOpen } from "react-icons/fa6";

const notes = [
  {
    id: 1,
    title: "Master Indian Polity",
    category: "Polity",
    img: "/images/polity.jpg", 
  },
  {
    id: 2,
    title: "Geography Tricks for SSC",
    category: "Geography",
    img: "/images/geography.jpg",
  },
  {
    id: 3,
    title: "Science Quick Notes",
    category: "Science",
    img: "/images/science.jpg",
  },
];


const NotesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            🔍 Preview <span className="text-indigo-600">Top Notes</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Handpicked notes for your quick revision — simple, fast & effective.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-[70%] mx-auto ">
          {notes.map((note) => (
            <div
              key={note.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={note.img}
                  alt={note.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-indigo-600 text-white p-2 rounded-full shadow">
                  <FaBookOpen className="text-base" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-sm uppercase text-indigo-500 font-semibold tracking-wide">
                  {note.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-800 group-hover:text-indigo-700 transition">
                  {note.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Quick revision material for SSC and CET.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/notes"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition"
          >
            View All Notes
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;
