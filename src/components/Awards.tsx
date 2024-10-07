import React from 'react'
import { Award } from 'lucide-react'

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold text-center mb-2">Best Eco-Friendly Guesthouse 2023</h3>
            <p className="text-gray-600 text-center">Awarded by Green Travel Association</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold text-center mb-2">Outstanding Customer Service 2022</h3>
            <p className="text-gray-600 text-center">Recognized by Hospitality Excellence</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold text-center mb-2">Top-Rated Guesthouse 2023</h3>
            <p className="text-gray-600 text-center">Based on guest reviews on TripAdvisor</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards