import React from 'react'
import { Mail } from 'lucide-react'

const Newsletter = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex p-4 bg-gradient-primary rounded-2xl mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to get exclusive deals, new arrivals, and tech news delivered to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 glass rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-primary rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
