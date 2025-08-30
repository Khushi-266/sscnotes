import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Delay playback by 2 seconds
    timeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Some browsers block autoplay unless muted
        });
      }
    }, 2000);

    // Pause on scroll
    const handleScroll = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    // Pause when tab becomes inactive
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-50 to-white text-gray-800 py-50">
        <div className="container mx-auto flex px-6 md:px-12 flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              SSC Notes &amp; Study Material <br />
              <span className="text-indigo-500">For All Competitive Exams</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access topic-wise SSC notes, previous year papers, and smart revision resources.
              Perfect for SSC CGL, CET GROUP-D, CET GROUP-C, CHSL, MTS, GD, and more — all in one place, and totally free.
            </p>
            <div className="flex justify-center md:justify-start gap-4 py-10">
              <a
                href="#notes"
                className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Browse Notes
              </a>
              <a
                href="#about"
                className="inline-block bg-white text-indigo-600 border border-indigo-200 px-6 py-3 rounded-lg shadow-sm hover:bg-indigo-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="w-full  md:w-1/2 mb-12 md:mb-0 md:ml-10 flex justify-center px-4 md:px-0">
            <video
              ref={videoRef}
              className="w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-video object-cover drop-shadow-xl rounded-lg"
              src="/video/ssc2.mp4"
              muted
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
