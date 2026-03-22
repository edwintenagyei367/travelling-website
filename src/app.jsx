import React from 'react'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Tours from './components/tours.jsx'
import Pricing from './components/pricing.jsx'
import Calendar from './components/calendar.jsx'
import Testimonials from './components/testimonials.jsx'
import Gallery from './components/gallery.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'

const App = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Tours />
      <Pricing />
      <Calendar />
      <Testimonials />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
