import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Awards from './components/Awards'
import GalleryAndAttractions from './components/GalleryAndAttractions'
import Activities from './components/Activities'
import Directions from './components/Directions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Philosophy />
      <Awards />
      <GalleryAndAttractions />
      <Activities />
      <Directions />
      <Footer />
    </div>
  )
}

export default App