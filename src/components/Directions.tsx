import React from 'react'
import { MapPin, Car, Plane, Train } from 'lucide-react'

const Directions: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-123.4567890!3d45.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQwJzQ0LjAiTiAxMjPCsDI3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
  const fullMapUrl = "https://www.google.com/maps/dir//Serenity+Haven+Guesthouse,123+Tranquil+Lane,Peaceful+Valley,PV+12345"

  return (
    <section id="directions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-red-500" />
              Our Location
            </h3>
            <p className="text-gray-600 mb-4">
              Serenity Haven Guesthouse<br />
              123 Tranquil Lane<br />
              Peaceful Valley, PV 12345
            </p>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">Nearby Landmarks</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>5 minutes from Peaceful Valley National Park</li>
                <li>10 minutes from Serene Lake</li>
                <li>15 minutes from Tranquil Town Center</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Car className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Take Highway 1 North, exit at Peaceful Valley (Exit 23). Follow signs for Tranquil Lane.</p>
                </div>
                <div className="flex items-start">
                  <Plane className="w-6 h-6 mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Fly to Peaceful Valley International Airport (PVI). We offer a complimentary shuttle service for guests.</p>
                </div>
                <div className="flex items-start">
                  <Train className="w-6 h-6 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Take the Tranquil Express to Peaceful Valley Station. Taxis and ride-sharing services are available at the station.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-[75%] h-0">
              <iframe 
                src={mapUrl} 
                className="absolute top-0 left-0 w-full h-full" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Serenity Haven Guesthouse Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href={fullMapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Directions