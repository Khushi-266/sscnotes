import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-8 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">
          <Link to="/">SSC Notes</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-black hover:text-red-600 transition">Home</Link>
          <Link to="/notes" className="text-black hover:text-red-600 transition">Notes</Link>
          <Link to="/contact" className="text-black hover:text-red-600 transition">Contact Us</Link>
          <Link to="/about" className="text-black hover:text-red-600 transition">About Us</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 text-xl text-black">
          <Link to="/profile" className="hover:text-red-600 transition">
            <FaUserCircle />
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-black" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-black hover:text-red-600" onClick={toggleMenu}>Home</Link>
            <Link to="/notes" className="text-black hover:text-red-600" onClick={toggleMenu}>Notes</Link>
            <Link to="/contact" className="text-black hover:text-red-600" onClick={toggleMenu}>Contact Us</Link>
            <Link to="/about" className="text-black hover:text-red-600" onClick={toggleMenu}>About Us</Link>
            <div className="flex gap-6 pt-2 text-xl">
              <Link to="/profile" className="text-black hover:text-red-600" onClick={toggleMenu}>
                <FaUserCircle />
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
