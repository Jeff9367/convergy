"use client"

import Link from 'next/link'
import { Mail, MessageCircle, MapPin, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  console.log('Footer component rendered')

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Tráfego Pago', href: '#services' },
      { name: 'SEO Local', href: '#services' },
      { name: 'Social Media', href: '#services' },
      { name: 'Websites', href: '#services' }
    ],
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Casos de Sucesso', href: '#clients' },
      { name: 'Metodologia', href: '#services' },
      { name: 'Contato', href: '#contact' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '/privacy' },
      { name: 'Termos de Uso', href: '/terms' },
      { name: 'RGPD', href: '/gdpr' }
    ]
  }

  return (
    <footer className="bg-convergy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                CONVERG<span className="text-convergy-blue">Y</span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Agência estratégica de marketing e growth no Algarve. 
                Transformamos PMEs em máquinas de crescimento sustentável.
              </p>
            </div>

            <div>
              <p className="text-convergy-blue font-semibold mb-2">
                Estratégia que vende. Execução que entrega.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-convergy-blue" />
                <span className="text-gray-300">Algarve, Portugal</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-convergy-blue" />
                <a 
                  href="mailto:contato@convergy.pt" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => console.log('Footer email clicked')}
                >
                  contato@convergy.pt
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-convergy-blue" />
                <span className="text-gray-300">+351 xxx xxx xxx</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-convergy-blue/20 rounded-full flex items-center justify-center hover:bg-convergy-blue transition-colors"
                onClick={() => console.log('Instagram clicked')}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-convergy-blue/20 rounded-full flex items-center justify-center hover:bg-convergy-blue transition-colors"
                onClick={() => console.log('LinkedIn clicked')}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => console.log(`Footer service link clicked: ${link.name}`)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => console.log(`Footer company link clicked: ${link.name}`)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} CONVERGY. Todos os direitos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={() => console.log(`Footer legal link clicked: ${link.name}`)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Inspiration */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm italic">
              Inspirada por Efésios 1.10
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}