import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Benefits from './components/Benefits'
import SpecialOffer from './components/SpecialOffer'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Benefits />
        <SpecialOffer />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
