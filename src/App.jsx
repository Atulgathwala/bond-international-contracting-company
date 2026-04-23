import React, { useEffect, useState } from "react";
import "./global.css";

import HomeSection from "./pages/HeroSection";
import MainNavbar from "./components/NavbarComponents/MainNavbar";
import EquipmentSection from "./pages/EquipmentSection";
import WhoWeAre from "./pages/WhoWeAre";
import HappyClients from "./pages/HappyClients";
import WhyChooseUs from "./pages/WhyChooseUs";
import WhatWeOffer from "./pages/WhatWeOffer";
import Testimonials from "./pages/Testimonials";
import CTABanner from "./pages/CtaBanner";
import ContactFooter from "./pages/ContactFooter";
import { FaPhoneAlt } from "react-icons/fa";
import bgremovedLogo from "./assets/images/logobgremoved.png"
import Vision from "./pages/Vision";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {showLoader && (
        <div className="fixed top-0 left-0 w-full h-screen z-[9999] bg-gradient-to-r bg-[#eee] flex flex-col justify-center items-center overflow-hidden">
          

            {/* Loading Text */}
          <h1 className="mt-6 text-3xl font-bold text-gray-800 tracking-widest animate-pulse">
            <img src={bgremovedLogo} alt="BIC" className="h-[50px]" />
          </h1>
          {/* Moving Bulldozer */}
          <img
            src="https://media.tenor.com/L6_Vddsh7p8AAAAi/tractor-tractores.gif"
            alt="loader"
            className="h-[90px] animate-bounce"
          />

          

          <p className="mt-2 text-lg text-gray-600 animate-pulse">
            Loading Powerful Equipment...
          </p>

          {/* Progress Bar */}
          <div className="w-[260px] h-3 bg-gray-300 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-yellow-500 animate-[loading_3s_linear_forwards]"></div>
          </div>
        </div>
      )}

      {/* Main Website */}
      {!showLoader && (
        <div className="bg-[#eee]">
          <MainNavbar />
          <HomeSection />
     
          <WhoWeAre />
               <Vision/>
          <WhatWeOffer />
          <EquipmentSection />
          <HappyClients />
          <WhyChooseUs />
          <Testimonials />
          <CTABanner />
          <ContactFooter />
        </div>
      )}


      <div><a href="tel:+966550081047">
            <button className="cursor-pointer px-4 py-2 rounded-full border border-[#172E64] text-[#172E64] font-semibold hover:bg-[#172E64] hover:text-white transition duration-300 flex items-center gap-2 fixed z-999 h-[50px] bottom-10 right-10 bg-white">
              <FaPhoneAlt />
             
            </button>
          </a></div>
    </>
  );
};

export default App;