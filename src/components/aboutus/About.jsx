import React from "react";
import TopBar from "../Layouts/Topbar";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

const AboutUs = () => {
  return (
<>
<TopBar/>
<Header/>
    <div className="bg-gradient-to-br from-white via-indigo-50 to-white text-gray-800">
      
      {/* Hero Intro */}
      <section className="text-center py-44 px-6 md:px-20 bg-indigo-400 text-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-4"> We’re a movement. 💥</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          SSC Notes Hub was built for the dreamers, the doers, and the everyday warriors preparing for exams that shape futures. 
          We're here to bring clarity, confidence, and strategy to your preparation — one page at a time.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">🎯 Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To make affordable, well-researched, exam-oriented notes accessible to every SSC aspirant across India — no matter their background.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">🌟 Our Vision</h2>
          <p className="text-gray-700 text-lg">
            A world where government exam prep isn’t stressful or overwhelming, but empowering and personalized.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-12">🚀 What Makes Us Different?</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 bg-indigo-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Notes That Don’t Feel Like Notes</h3>
              <p className="text-gray-700">
                We simplify. We summarize. We teach you the “why” behind the “what.” No more rote learning.
              </p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Curated for Haryana & SSC</h3>
              <p className="text-gray-700">
                Content tailored for CET Group C, D, Haryana Police, and all SSC levels. Hyper-relevant. No fillers.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-pink-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Built by Aspirants, for Aspirants</h3>
              <p className="text-gray-700">
                We’ve been through it. We know what helps. That’s why our notes work where others don’t.
              </p>
            </div>
            <div className="p-6 bg-green-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold">Always Updating, Always Listening</h3>
              <p className="text-gray-700">
                We adapt to the latest syllabus, paper trends, and your feedback. Real-time improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-20 bg-indigo-50">
        <h2 className="text-4xl font-bold text-center mb-12">🛤️ Our Journey So Far</h2>
        <div className="max-w-4xl mx-auto border-l-4 border-indigo-500 pl-6 space-y-10">
          <div>
            <h4 className="text-xl font-semibold">2022 — The Spark 🔥</h4>
            <p className="text-gray-600">Started as a small Telegram group sharing free PDFs and handwritten notes.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">2023 — Building the Hub 🛠️</h4>
            <p className="text-gray-600">Launched SSC Notes Hub as a full platform with paid and free resources, categorized by exam.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">2024 — 20,000+ Students 🙌</h4>
            <p className="text-gray-600">Community exploded with thousands of daily users — and we’re just getting started.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Join the Movement. 🎓</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you’re preparing for SSC CGL, CHSL, Haryana CET, or your first Group D exam — we’ve got your back.
          Explore our notes. Ask questions. Build your dream career.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-6 rounded-full transition"
        >
          📩 Get in Touch
        </a>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
