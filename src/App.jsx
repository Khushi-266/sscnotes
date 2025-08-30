import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NotesList from './components/notes/Notes';

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
