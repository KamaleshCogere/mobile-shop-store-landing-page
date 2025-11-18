import React from 'react'
import { Zap } from 'lucide-react'

const SpecialOffer = () => {
  return (
    <section id="deals" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Save Up to <span className="text-gradient">40% Off</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Exclusive deals on flagship smartphones. Premium devices at unbeatable prices.
              </p>
              <button className="px-8 py-4 bg-gradient-primary rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105">
                Shop Sale
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop" 
                alt="Special offer phones"
                className="w-full rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
