import React from 'react'
import { Smartphone, ShoppingCart, Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold text-gradient">MobileHub</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
            <a href="#deals" className="text-foreground hover:text-accent transition-colors">Deals</a>
            <a href="#support" className="text-foreground hover:text-accent transition-colors">Support</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
