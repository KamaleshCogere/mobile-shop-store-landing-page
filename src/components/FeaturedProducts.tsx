import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Galaxy Ultra Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 2847
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1592286927505-b0501e6f0f18?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 3521
  },
  {
    id: 3,
    name: 'Pixel 8 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 1893
  },
  {
    id: 4,
    name: 'OnePlus 12',
    price: 899,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 1456
  }
]

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Devices</h2>
          <p className="text-xl text-muted-foreground">Handpicked premium smartphones for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="glass rounded-2xl p-6 hover:bg-white/15 transition-all transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient">${product.price}</span>
                <button className="p-3 bg-gradient-primary rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
