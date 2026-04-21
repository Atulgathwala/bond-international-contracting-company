import React from 'react'
import "./global.css"
import HomeSection from './pages/HeroSection'
import MainNavbar from './components/NavbarComponents/MainNavbar'
import EquipmentSection from './pages/EquipmentSection'
import WhoWeAre from './pages/WhoWeAre'
import HappyClients from './pages/HappyClients'
import WhyChooseUs from './pages/WhyChooseUs'
import WhatWeOffer from './pages/WhatWeOffer'

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
    
    </div>
  )
}

export default App
