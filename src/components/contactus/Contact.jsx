import React from "react";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import TopBar from "../Layouts/Topbar";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

const ContactUs = () => {
    return (
        <>
            <TopBar />
            <Navbar />

            <section className="bg-gradient-to-tr from-indigo-100 via-white to-indigo-50 py-36 px-6 md:px-12">
                {/* Intro Text */}
                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-3">📚 SSC Notes Hub — Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        We provide high-quality, affordable study materials for <strong>SSC CET Group C & D</strong>,
                        <strong> Haryana Police</strong>, and other government exams.
                        Have questions or suggestions? We're just a message away.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-14 border border-indigo-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        🤝 Let’s Talk — How can we help you?
                    </h2>

                    {/* Contact Options */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center mb-12">
                        <div className="flex flex-col items-center">
                            <FiMail className="text-indigo-600 text-4xl mb-3" />
                            <p className="font-semibold text-gray-700">hello@example.com</p>
                            <span className="text-sm text-gray-500">Email Us</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FiPhone className="text-indigo-600 text-4xl mb-3" />
                            <p className="font-semibold text-gray-700">+91 98765 43210</p>
                            <span className="text-sm text-gray-500">Call Us</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FiMessageSquare className="text-indigo-600 text-4xl mb-3" />
                            <p className="font-semibold text-gray-700">Live Chat</p>
                            <span className="text-sm text-gray-500">We're online</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="What's on your mind?"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition transform hover:scale-[1.01]"
                        >
                            🚀 Send Message
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ContactUs;
