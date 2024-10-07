import React from 'react'
import { Leaf, Heart, Home as HomeIcon } from 'lucide-react'

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">We are committed to eco-friendly practices and minimizing our environmental impact.</p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Hospitality</h3>
            <p className="text-gray-600">Our guests are at the heart of everything we do, ensuring a warm and welcoming experience.</p>
          </div>
          <div className="text-center">
            <HomeIcon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Home Away from Home</h3>
            <p className="text-gray-600">We strive to create a comfortable and familiar atmosphere for all our guests.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy