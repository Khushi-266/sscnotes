import React from "react";

const accessPoints = [
  {
    title: "Instant Access",
    description:
      "Unlock all features immediately after signing up — no delays, no waiting.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 13l4 4L19 7"></path>
      </svg>
    ),
  },
  {
    title: "WhatsApp Support",
    description:
      "Get direct chat support via WhatsApp whenever you need assistance.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: "Downloadable PDFs",
    description:
      "Access and download all important documents and guides in PDF format.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
  },
  {
    title: "Multi-device Access",
    description:
      "Use your account seamlessly across all your devices — phone, tablet, or desktop.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: "Secure & Private",
    description:
      "Your data and access are protected with industry-standard security measures.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"></path>
        <path d="M4 12v4c0 1.1.9 2 2 2h1v-6H4z"></path>
        <path d="M15 12v4h1c1.1 0 2-.9 2-2v-4h-3z"></path>
      </svg>
    ),
  },
  {
    title: "24/7 Customer Care",
    description:
      "Our team is available round the clock to assist you whenever needed.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    ),
  },
];

const Card = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-8 text-center min-w-[280px]">
    <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
      {icon}
    </div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Access = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-5 overflow-hidden">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Full Access, Instantly
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need is just one click away — enjoy instant, flexible
            access across all devices and formats.
          </p>
        </div>

        {/* Large devices: sliding rows */}
        <div className="hidden md:flex flex-col space-y-12">
          <div className="flex space-x-10 animate-slide-left">
            {accessPoints.slice(0, 3).map((point, index) => (
              <Card key={index} {...point} />
            ))}
          </div>
          <div className="flex space-x-10 animate-slide-right">
            {accessPoints.slice(3, 6).map((point, index) => (
              <Card key={index} {...point} />
            ))}
          </div>
        </div>

        {/* Small devices: stacked */}
        <div className="md:hidden space-y-8">
          {accessPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center animate-fade-up-bounce"
            >
              <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                {point.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {point.title}
              </h2>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a href="/notes" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-full shadow-md transition duration-300">
            Get Access Now
          </a>
        </div>

        <div className="mt-16 flex justify-center px-4">
          <div className="w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">
            <img
              src="/images/hero.jpg"
              alt="Access Preview"
              className="w-full max-h-[400px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Access;