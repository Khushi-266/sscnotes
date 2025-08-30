import React from "react";

const notes = [
  {
    id: 1,
    category: "Polity",
    title: "Indian Constitution - Complete Notes",
    price: 49,
    img: "https://dummyimage.com/420x260/667eea/ffffff&text=Polity",
    link: "#",
    color: "bg-indigo-500",
  },
  {
    id: 2,
    category: "Geography",
    title: "Physical & Indian Geography",
    price: 39,
    img: "https://dummyimage.com/420x260/f6ad55/ffffff&text=Geography",
    link: "#",
    color: "bg-orange-500",
  },
  {
    id: 3,
    category: "History",
    title: "Modern History Made Easy",
    price: 59,
    img: "https://dummyimage.com/420x260/38b2ac/ffffff&text=History",
    link: "#",
    color: "bg-teal-500",
  },
  {
    id: 4,
    category: "Maths",
    title: "Quantitative Aptitude Tricks",
    price: 35,
    img: "https://dummyimage.com/420x260/ed64a6/ffffff&text=Maths",
    link: "#",
    color: "bg-pink-500",
  },
  {
    id: 5,
    category: "Economy",
    title: "Indian Economy Basics",
    price: 45,
    img: "https://dummyimage.com/420x260/48bb78/ffffff&text=Economy",
    link: "#",
    color: "bg-green-500",
  },
  {
    id: 6,
    category: "Science",
    title: "General Science Complete Pack",
    price: 40,
    img: "https://dummyimage.com/420x260/9f7aea/ffffff&text=Science",
    link: "#",
    color: "bg-purple-500",
  },
  {
    id: 7,
    category: "English",
    title: "English Grammar Notes",
    price: 30,
    img: "https://dummyimage.com/420x260/f56565/ffffff&text=English",
    link: "#",
    color: "bg-red-500",
  },
  {
    id: 8,
    category: "Current Affairs",
    title: "Monthly Current Affairs PDF",
    price: 20,
    img: "https://dummyimage.com/420x260/f6e05e/000000&text=Current+Affairs",
    link: "#",
    color: "bg-yellow-500",
  },
];

const NotesSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 leading-snug">
        📚 Your <span className="text-indigo-600">SSC Study Notes</span> — All in One Place
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {notes.map(({ id, category, title, price, img, link, color }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto w-full"
          >
            <div className="relative h-48 rounded-t-xl overflow-hidden">
              <img
                alt={title}
                src={img}
                className="object-cover w-full h-full"
              />
              <span
                className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded ${color} text-white`}
              >
                {category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-gray-700 text-sm tracking-wide mb-1 uppercase font-semibold">{category}</h3>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
              <p className="text-indigo-600 font-bold text-lg">₹{price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NotesSection;
