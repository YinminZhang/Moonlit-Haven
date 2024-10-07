import React, { useState } from 'react'
import { Home, Menu, Globe } from 'lucide-react'

const Header: React.FC = () => {
  const [language, setLanguage] = useState('EN')

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'ZH' : 'EN')
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Home className="w-8 h-8 text-gray-800" />
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#philosophy" className="text-gray-600 hover:text-gray-900">Our Philosophy</a>
          <a href="#awards" className="text-gray-600 hover:text-gray-900">Awards</a>
          <a href="#directions" className="text-gray-600 hover:text-gray-900">Directions</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Globe className="w-5 h-5 mr-1" />
            {language}
          </button>
          <Menu className="md:hidden w-6 h-6 text-gray-800" />
        </div>
      </div>
    </header>
  )
}

export default Header