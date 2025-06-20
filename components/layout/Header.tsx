"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  console.log('Header component rendered')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Clientes', href: '#clients' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-convergy-dark/95 backdrop-blur-xl border-b border-convergy-blue/30 shadow-2xl shadow-convergy-blue/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative w-10 h-10">
              <Image
                src="https://assets.macaly-user-data.dev/w9dmu631lytd822mcj561pfj/bqypkapl8nenss2qqcter3e3/logo-sf-1.png"
                alt="CONVERGY Logo"
                fill
                className="object-contain"
              />
            </div>
            <Link href="/" className="text-2xl font-funnel font-bold text-white">
              CONVERG<span className="text-convergy-neon animate-neon-pulse">Y</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-300 hover:text-convergy-neon font-medium font-funnel transition-colors duration-300 group"
                  onClick={() => console.log(`Navigation clicked: ${item.name}`)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-convergy-blue to-convergy-neon transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                className="relative bg-gradient-to-r from-convergy-blue to-convergy-purple hover:from-convergy-purple hover:to-convergy-blue text-white font-semibold font-funnel animate-pulse-glow overflow-hidden group"
                onClick={() => console.log('CTA button clicked - Agendar sessão')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-convergy-neon/20 to-convergy-purple/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <Zap className="w-4 h-4 mr-2 animate-pulse" />
                Sessão Estratégica
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                console.log('Mobile menu toggled:', !isMenuOpen)
              }}
              className="text-white hover:text-convergy-neon transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-convergy-blue/30 bg-convergy-dark/95 backdrop-blur-xl"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-convergy-neon font-medium font-funnel py-2 block transition-colors duration-300"
                      onClick={() => {
                        setIsMenuOpen(false)
                        console.log(`Mobile navigation clicked: ${item.name}`)
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-convergy-blue to-convergy-purple text-white font-semibold font-funnel mt-4 w-full"
                    onClick={() => {
                      setIsMenuOpen(false)
                      console.log('Mobile CTA button clicked - Agendar sessão')
                    }}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Sessão Estratégica
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}