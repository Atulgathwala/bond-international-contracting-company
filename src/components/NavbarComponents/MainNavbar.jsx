import React, { useEffect, useEffectEvent, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import JCBMOV from "../../assets/images/pushingjcb.png";

 let isjcb = window.screen.width>=500;




const MainNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-200 shadow-md">
      
      <nav className="max-w-7xl mx-auto px-6 h-[75px] flex items-center justify-between">
        
        <Logo />

        <div className="flex items-center gap-10 relative">
          
          {/* JCB (subtle for white bg) */}
          {isjcb &&  <img
            src={JCBMOV}
            alt="JCB"
            className="absolute -left-30 w-20  jcb-move pointer-events-none"
          />}

          <Menu open={open} setOpen={setOpen} />
        </div>

      </nav>

      {/* Accent line (branding touch) */}
      <div className="h-[2px] bg-[var(--accent)] w-full"></div>
    </header>
  );
};

export default MainNavbar;