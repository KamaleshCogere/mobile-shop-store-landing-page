import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Introducing the future of productivity</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Transform Your
          <br />
          <span className="text-gradient">Business Today</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Streamline your workflow with our cutting-edge platform. Boost productivity by 10x with AI-powered automation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
            Watch Demo
          </button>
        </div>
        
        <div className="mt-20 glass rounded-2xl p-2 max-w-5xl mx-auto animate-float">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
            alt="Dashboard Preview"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
