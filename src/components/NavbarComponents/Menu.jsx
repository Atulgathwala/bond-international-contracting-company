import React from "react";

const Menu = () => {
  return (
    <ul className="flex gap-8 text-[#172E64] font-medium">
      
      <li className="cursor-pointer hover:text-[var(--accent)] transition duration-300">
        Home
      </li>

      <li className="cursor-pointer hover:text-[var(--accent)] transition duration-300">
        Services
      </li>

      <li className="cursor-pointer hover:text-[var(--accent)] transition duration-300">
        About
      </li>

      <li className="cursor-pointer hover:text-[var(--accent)] transition duration-300">
        Contact
      </li>

    </ul>
  );
};

export default Menu;