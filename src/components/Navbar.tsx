import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center px-8 lg:px-16 fixed top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-2xl font-bold hover:scale-105 transition-transform"
          onClick={closeMenu}
        >
          <span className="text-gray-200">kolber</span>
          <span className="text-yellow-500">.</span>
          <span className="text-red-500">tech</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="relative group text-base font-medium text-gray-300 hover:text-yellow-500 transition-colors"
        >
          Home
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"
          ></span>
        </a>
        <a
          href="#experience"
          className="relative group text-base font-medium text-gray-300 hover:text-yellow-500 transition-colors"
        >
          Experience
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"
          ></span>
        </a>
        <a
          href="#education"
          className="relative group text-base font-medium text-gray-300 hover:text-yellow-500 transition-colors"
        >
          Education
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"
          ></span>
        </a>

        <a
          href="#skills"
          className="relative group text-base font-medium text-gray-300 hover:text-yellow-500 transition-colors"
        >
          Skills
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"
          ></span>
        </a>

        <a
          href="#contact"
          className="relative group text-base font-medium text-gray-300 hover:text-yellow-500 transition-colors"
        >
          Contact
          <span
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"
          ></span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-yellow-500 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-gray-900/98 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${
          isMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
          >
            Home
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
          >
            Education
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
