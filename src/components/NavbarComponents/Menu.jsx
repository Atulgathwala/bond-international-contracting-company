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
  FaWhatsapp,
} from "react-icons/fa";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-[#172E64] font-medium items-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#who-we-are">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#equipment">Equipment</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>

        {/* Premium WhatsApp Button */}
        <li>
          <a href="https://wa.me/966550081047" target="_blank">
            <button className="cursor-pointer px-6 py-2 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:scale-105 hover:bg-green-600 transition duration-300 flex items-center gap-2">
              <FaWhatsapp />
              WhatsApp
            </button>
          </a>
        </li>

        {/* Premium Call Us Button
        <li>
          <a href="tel:+966550081047">
            <button className="cursor-pointer px-6 py-2 rounded-full border border-[#172E64] text-[#172E64] font-semibold hover:bg-[#172E64] hover:text-white transition duration-300 flex items-center gap-2">
              <FaPhoneAlt />
              Call Us
            </button>
          </a>
        </li> */}
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden text-2xl text-[#172E64] cursor-pointer z-50 relative">
        {open ? (
          <FaTimes onClick={() => setOpen(false)} />
        ) : (
          <FaBars onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-7 py-10 text-[#172E64] font-medium transition-all duration-300 md:hidden z-40 ${
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

        {/* Mobile WhatsApp */}
        <li className="  flex  gap-6">
          <a
            href="https://wa.me/966550081047"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
       
          <a
            href="tel:+966550081047"
            className="border border-[#172E64] px-6 py-3 rounded-full flex items-center gap-2"
          >
            <FaPhoneAlt />
            Call Us
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;