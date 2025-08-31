import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NotesList from './components/notes/Notes';
import ContactUs from './components/contactus/Contact';
import AboutUs from './components/aboutus/About';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* User Route */}
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
