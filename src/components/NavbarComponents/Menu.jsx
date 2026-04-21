import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaServicestack,
  FaInfoCircle,
  FaPhoneAlt,
  FaTools,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu - No Icons */}
      <ul className="hidden md:flex gap-8 text-[#172E64] font-medium items-center">
        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#home">Home</a>
        </li>

        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#about">About</a>
        </li>

        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#services">Services</a>
        </li>

        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#equipment">Equipment</a>
        </li>

        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#clients">Clients</a>
        </li>

        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#testimonials">Reviews</a>
        </li>

        <li className="hover:text-[var(--accent)] transition duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden text-2xl text-[#172E64] cursor-pointer z-50 relative">
        {open ? (
          <FaTimes onClick={() => setOpen(false)} />
        ) : (
          <FaBars onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Mobile Menu - With Icons */}
      <ul
        className={`fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-8 py-10 text-[#172E64] font-medium transition-all duration-300 md:hidden z-40 ${
          open ? "block" : "hidden"
        }`}
      >
        <li onClick={() => setOpen(false)}>
          <a href="#home" className="flex items-center gap-3 text-lg">
            <FaHome /> Home
          </a>
        </li>

        <li onClick={() => setOpen(false)}>
          <a href="#about" className="flex items-center gap-3 text-lg">
            <FaInfoCircle /> About
          </a>
        </li>

        <li onClick={() => setOpen(false)}>
          <a href="#services" className="flex items-center gap-3 text-lg">
            <FaServicestack /> Services
          </a>
        </li>

        <li onClick={() => setOpen(false)}>
          <a href="#equipment" className="flex items-center gap-3 text-lg">
            <FaTools /> Equipment
          </a>
        </li>

        <li onClick={() => setOpen(false)}>
          <a href="#clients" className="flex items-center gap-3 text-lg">
            <FaUsers /> Clients
          </a>
        </li>

        <li onClick={() => setOpen(false)}>
          <a href="#testimonials" className="flex items-center gap-3 text-lg">
            <FaStar /> Reviews
          </a>
        </li>

        <li onClick={() => setOpen(false)}>
          <a href="#contact" className="flex items-center gap-3 text-lg">
            <FaPhoneAlt /> Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;