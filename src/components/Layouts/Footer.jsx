import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* About Section */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">SSC Notes</h2>
          <p className="text-gray-400">
            Your trusted source for SSC exam preparation. Quality notes, quick
            revision, and easy-to-understand materials to help you succeed.
          </p>
          <div className="flex space-x-5 mt-6 text-yellow-400">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="mailto:support@sscnotes.com"
              aria-label="Email"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Resources</h3>
            <ul>
              <li>
                <a
                  href="#notes"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Notes
                </a>
              </li>
              <li>
                <a
                  href="#revision"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Quick Revision
                </a>
              </li>
              <li>
                <a
                  href="#tests"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Practice Tests
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Support</h3>
            <ul>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-yellow-300 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SSC Notes. All rights reserved.
      </p>
      <p className="text-center mt-4 text-yellow-400 text-sm">
        Created by{" "}
        <a
          href="https://www.aumtech.solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-300 transition-colors duration-200"
        >
          AumTech Solution
        </a>
      </p>
    </footer>
  );
}
