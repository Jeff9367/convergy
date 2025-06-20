"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export function Contact() {
  console.log('Contact section rendered')

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    challenge: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(`Form field changed: ${name} = ${value}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // TODO: Integrate with form handling service
    alert('Obrigado pelo interesse! Entraremos em contato em breve.')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-convergy-dark mb-4">
            Vamos Crescer Juntos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agende uma sessão gratuita e descubra como a CONVERGY pode transformar 
            o seu marketing numa máquina de resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-convergy-dark mb-4">
                Conte-nos sobre seu desafio
              </h3>
              <p className="text-gray-600">
                Preencha o formulário e nossa equipe entrará em contato para uma 
                análise gratuita do seu negócio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+351 xxx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-2">
                  Qual o seu maior desafio hoje? *
                </label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  required
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                  placeholder="Descreva o principal desafio que sua empresa enfrenta em marketing e vendas..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-convergy-blue hover:bg-convergy-blue/90 text-white font-semibold py-4 text-lg"
              >
                Solicitar Análise Gratuita
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Resposta garantida em até 24 horas úteis
              </p>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-convergy-light p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-convergy-dark mb-6">
                Contato Direto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-convergy-blue rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-convergy-dark">WhatsApp Business</p>
                    <p className="text-gray-600">+351 xxx xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-convergy-blue rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-convergy-dark">E-mail</p>
                    <p className="text-gray-600">contato@convergy.pt</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-convergy-blue rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-convergy-dark">Localização</p>
                    <p className="text-gray-600">Algarve, Portugal</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-6 space-y-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => console.log('WhatsApp button clicked')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Conversar no WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-convergy-blue text-convergy-blue hover:bg-convergy-blue hover:text-white"
                  onClick={() => console.log('Email button clicked')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar E-mail
                </Button>
              </div>
            </div>

            {/* SimplyBook Placeholder */}
            <div className="bg-gradient-to-br from-convergy-dark to-convergy-blue p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Agendamento Online</h3>
              <p className="text-blue-100 mb-6">
                Em breve: sistema de agendamento automático para sessões estratégicas. 
                Por enquanto, entre em contato diretamente.
              </p>
              <div className="bg-white/10 p-4 rounded-lg border-2 border-dashed border-white/30 text-center">
                <p className="text-sm">SimplyBook Integration</p>
                <p className="text-xs text-blue-200">Coming Soon</p>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-convergy-dark mb-3">Área de Atuação</h4>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Algarve (presencial) • Portugal (remoto) • Brasil (execução)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-convergy-dark rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Pronto para transformar seu marketing?
          </h3>
          <p className="text-gray-300 mb-6">
            Análise gratuita • Estratégia personalizada • Resultados mensuráveis
          </p>
          <Button 
            size="lg"
            className="bg-convergy-blue hover:bg-convergy-blue/90 text-white font-semibold px-8 py-4"
            onClick={() => console.log('Final CTA clicked - Começar agora')}
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  )
}