import React from 'react'
import { Link } from 'react-router-dom'
import lines from '../assets/lines.webp'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <img 
        src={lines}
        alt="Decorative lines"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-mandova/20 leading-none select-none">
              404
            </h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-texts mb-4">
              Puslapis <span className="text-mandova">nerastas</span>
            </h2>
            <div className="w-24 h-1 bg-mandova mx-auto mb-6"></div>
            <p className="text-xl text-orange max-w-2xl mx-auto leading-relaxed">
              Atsiprašome, bet ieškomas puslapis neegzistuoja arba buvo perkeltas. 
              Patikrinkite URL adresą arba grįžkite į pagrindinį puslapį.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/"
              className="bg-mandova hover:bg-mandova-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Grįžti į pradžią
            </Link>
            
            <Link 
              to="/kontaktai"
              className="border-2 border-mandova text-mandova hover:bg-mandova hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Susisiekti su mumis
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-8 text-orange">
            <p>Reikia pagalbos? Susisiekite su mumis:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a 
                href="tel:+37060000000" 
                className="flex items-center space-x-2 hover:text-mandova transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+370 600 00000</span>
              </a>
              
              <a 
                href="mailto:info@mandova.lt" 
                className="flex items-center space-x-2 hover:text-mandova transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>info@mandova.lt</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage