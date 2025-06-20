"use client"

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    console.log('Floating CTA clicked - WhatsApp')
    // TODO: Add WhatsApp link
    window.open('https://wa.me/351xxxxxxxxx?text=Olá! Gostaria de saber mais sobre os serviços da CONVERGY.', '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <div 
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
          isExpanded ? 'w-64 h-16' : 'w-16 h-16'
        }`}
        onClick={isExpanded ? handleClick : () => setIsExpanded(true)}
      >
        {!isExpanded ? (
          <div className="w-full h-full flex items-center justify-center">
            <MessageCircle className="w-8 h-8" />
          </div>
        ) : (
          <div className="flex items-center justify-between px-4 h-full">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6" />
              <div className="text-left">
                <p className="text-sm font-semibold">Fale conosco</p>
                <p className="text-xs">WhatsApp</p>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                setIsExpanded(false)
                console.log('Floating CTA collapsed')
              }}
              className="hover:bg-green-700 rounded-full p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Pulse animation when collapsed */}
      {!isExpanded && (
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      )}
    </div>
  )
}