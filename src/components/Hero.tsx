import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary)) 0%, transparent 50%)',
        opacity: 0.3
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Future of Mobile
            <span className="block text-gradient">In Your Hands</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover cutting-edge smartphones with unbeatable prices. Premium quality, lightning-fast delivery, and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-primary rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/20 transition-all">
              View Deals
            </button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1592286927505-b0501e6f0f18?w=1200&h=600&fit=crop" 
            alt="Latest smartphones"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl animate-float relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
