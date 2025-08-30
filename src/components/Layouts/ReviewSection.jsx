// src/components/ReviewSection.jsx
import { FaStar, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    name: "Amit Sharma",
    role: "SSC Aspirant",
    rating: 5,
    comment:
      "These notes are a game-changer. Easy to understand and very well-organized. Helped me stay on track every day.",
  },
  {
    name: "Priya Verma",
    role: "Working Professional",
    rating: 4,
    comment:
      "I don’t have much time to study, but the short notes and PDFs made it easy for me to revise even after work.",
  },
  {
    name: "Ravi Yadav",
    role: "Hindi Medium Student",
    rating: 5,
    comment:
      "Loved that the materials are available in Hindi. Clear explanations and perfect for self-study. Thank you!",
  },
  {
    name: "Sneha Gupta",
    role: "Beginner Aspirant",
    rating: 5,
    comment:
      "Just started preparing and this is exactly what I needed. Simple, structured, and beginner-friendly content.",
  },
  {
    name: "Manoj Tiwari",
    role: "Self-Study Student",
    rating: 4,
    comment:
      "No coaching, just self-study — and these notes made it 10x easier. Highly recommend to anyone going solo.",
  },
  {
    name: "Ankita Joshi",
    role: "Bilingual User",
    rating: 5,
    comment:
      "Loved the Hindi + English coverage. Great for understanding tough concepts in your comfort language.",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-100 via-white to-yellow-100 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center mb-2">
            <FaStar className="text-yellow-400 text-3xl" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mx-2">
              What Students Say
            </h2>
            <FaStar className="text-yellow-400 text-3xl" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Real feedback from students just like you — preparing smart with our notes.
          </p>
        </div>

        {/* Review Grid */}
        <div className=" rounded-tl-xl rounded-br-xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300 hover:ring-2 hover:ring-yellow-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Stars */}
              <div className="flex items-center mb-3 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < review.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                  )
                )}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm mb-4 italic">"{review.comment}"</p>

              {/* Name + Role */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-800">{review.name}</p>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
