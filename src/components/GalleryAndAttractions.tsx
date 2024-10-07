import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const attractions = [
  {
    title: "Serene Lake",
    description: "A pristine lake surrounded by lush forests, perfect for kayaking and picnics.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Tranquil Hiking Trails",
    description: "Miles of scenic trails offering breathtaking views of the valley and wildlife.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Sunset Viewpoint",
    description: "An elevated spot to witness stunning sunsets over the mountains.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Local Artisan Market",
    description: "A charming market showcasing local crafts, foods, and artwork.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
]

const GalleryAndAttractions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextAttraction = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % attractions.length)
  }

  const prevAttraction = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + attractions.length) % attractions.length)
  }

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery & Attractions</h2>
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src={attractions[currentIndex].image}
              alt={attractions[currentIndex].title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <button
            onClick={prevAttraction}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
            aria-label="Previous attraction"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextAttraction}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
            aria-label="Next attraction"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold mb-4">{attractions[currentIndex].title}</h3>
          <p className="text-gray-600 mb-6">{attractions[currentIndex].description}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full inline-flex items-center hover:bg-blue-600 transition duration-300">
            <Play className="w-5 h-5 mr-2" />
            Watch Video Tour
          </button>
        </div>
      </div>
    </section>
  )
}

export default GalleryAndAttractions