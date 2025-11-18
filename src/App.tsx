import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 bg-gradient-radial from-primary/20 via-background to-background pointer-events-none" />
      <div className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
