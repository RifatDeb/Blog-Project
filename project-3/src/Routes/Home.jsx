import React from 'react'
import Navigation from '../Componets/Navigations/Navigatios'
import Hero from '../Componets/Hero-Section/Hero'

import Cards from '../Componets/card-section/Card'
import Card2 from '../Componets/card-section/Card-2'
import Footer from '../footer-section/Footer'

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Cards />
      <Card2 />
      <Footer />
    </>
  )
}

export default Home
