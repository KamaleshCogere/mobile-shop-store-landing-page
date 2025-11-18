import React from 'react'
import { Truck, Shield, Headphones, CreditCard } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Fast and free delivery on all orders over $50'
  },
  {
    icon: Shield,
    title: '2-Year Warranty',
    description: 'Comprehensive coverage for peace of mind'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert assistance whenever you need it'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Safe and encrypted transactions guaranteed'
  }
]

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex p-6 bg-gradient-primary rounded-2xl mb-4 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all transform group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
