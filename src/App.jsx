import React from 'react'
import "./global.css"
import HomeSection from './pages/HeroSection'
import MainNavbar from './components/NavbarComponents/MainNavbar'
import EquipmentSection from './pages/EquipmentSection'
import WhoWeAre from './pages/WhoWeAre'
import HappyClients from './pages/HappyClients'
import WhyChooseUs from './pages/WhyChooseUs'
import WhatWeOffer from './pages/WhatWeOffer'
import Testimonials from './pages/Testimonials'
import CTABanner from './pages/CtaBanner'
import ContactFooter from './pages/ContactFooter'


const App = () => {
  return (
    <div className=''>
        <MainNavbar/>
    <HomeSection/>
    <WhoWeAre/>
    <WhatWeOffer/>
    <EquipmentSection/>
    
    <HappyClients/>
    <WhyChooseUs/>
    <Testimonials/>
    <CTABanner/>
    <ContactFooter/>
  
    
    </div>
  )
}

export default App
