"use client"

import { TrendingUp, Target, Users, Zap, Globe, Smartphone, Search, MessageSquare, BarChart3, Settings, Rocket, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Services() {
  console.log('Services section rendered')

  const services = [
    {
      category: "Aquisição",
      icon: Target,
      color: "from-red-500 to-orange-500",
      neonColor: "text-red-400",
      services: [
        { name: "Tráfego Pago", description: "Campanhas otimizadas no Google Ads e Meta Ads", icon: Zap },
        { name: "Social Media", description: "Gestão estratégica de redes sociais", icon: MessageSquare },
        { name: "Google Meu Negócio", description: "Otimização para visibilidade local", icon: Globe },
        { name: "SEO Local", description: "Posicionamento orgânico regional", icon: Search }
      ]
    },
    {
      category: "Conversão",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      neonColor: "text-blue-400",
      services: [
        { name: "Sites de Conversão", description: "Websites otimizados para vendas", icon: Globe },
        { name: "Landing Pages", description: "Páginas de alta conversão", icon: Target },
        { name: "Funis de Vendas", description: "Automação de vendas completa", icon: BarChart3 },
        { name: "Copywriting", description: "Textos que vendem e persuadem", icon: MessageSquare }
      ]
    },
    {
      category: "Retenção",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      neonColor: "text-green-400",
      services: [
        { name: "Follow-up Automático", description: "Nutrição de leads automatizada", icon: Rocket },
        { name: "Automações", description: "Fluxos inteligentes de comunicação", icon: Settings },
        { name: "Relacionamento", description: "Estratégias de engajamento", icon: Users },
        { name: "Fidelização", description: "Programas de retenção de clientes", icon: Shield }
      ]
    },
    {
      category: "Tecnologia",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      neonColor: "text-purple-400",
      services: [
        { name: "Integração de Sistemas", description: "Conectamos todas suas ferramentas", icon: Settings },
        { name: "Dashboard Executivo", description: "Métricas em tempo real", icon: BarChart3 },
        { name: "SimplyBook Integration", description: "Agendamento automatizado", icon: Smartphone },
        { name: "WhatsApp API", description: "Automação via WhatsApp Business", icon: MessageSquare }
      ]
    }
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-convergy-dark to-slate-900">
        <div className="absolute inset-0 neural-network opacity-20"></div>
        <div className="absolute inset-0 particles"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-sm border border-convergy-blue/30 rounded-full px-6 py-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Rocket className="w-5 h-5 text-convergy-neon animate-pulse" />
            <span className="text-convergy-neon font-funnel font-semibold">Metodologia 360°</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-funnel font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-convergy-neon via-convergy-blue to-convergy-purple bg-clip-text text-transparent animate-gradient-shift bg-300%">
              4 Pilares
            </span>
            <br />
            <span className="text-white">do Crescimento</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Nossa metodologia proprietária que transforma marketing em uma máquina de resultados previsíveis
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((pillar, index) => {
            const PillarIcon = pillar.icon
            return (
              <motion.div
                key={pillar.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  {/* Background with holographic effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-convergy-dark/90 to-slate-900/90 rounded-3xl holographic"></div>
                  
                  <div className="relative bg-gradient-to-br from-convergy-dark/95 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 border border-convergy-blue/30 shadow-2xl shadow-convergy-blue/10 group-hover:shadow-convergy-neon/20 transition-all duration-500">
                    {/* Pillar Header */}
                    <motion.div 
                      className="flex items-center space-x-4 mb-8"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center animate-pulse-glow`}>
                        <PillarIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-funnel font-bold text-white">{pillar.category}</h3>
                        <div className={`w-20 h-1 bg-gradient-to-r ${pillar.color} rounded-full mt-2`}></div>
                      </div>
                    </motion.div>

                    {/* Services List */}
                    <div className="space-y-4">
                      {pillar.services.map((service, serviceIndex) => {
                        const ServiceIcon = service.icon
                        return (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (serviceIndex * 0.1), duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group/item"
                          >
                            <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-convergy-blue/10 to-convergy-purple/10 backdrop-blur-sm border border-convergy-blue/20 hover:border-convergy-neon/50 transition-all duration-300 group-hover/item:bg-gradient-to-r group-hover/item:from-convergy-blue/20 group-hover/item:to-convergy-purple/20">
                              <div className={`w-10 h-10 bg-gradient-to-r ${pillar.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:animate-pulse`}>
                                <ServiceIcon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-funnel font-semibold text-white mb-1 group-hover/item:text-convergy-neon transition-colors duration-300">
                                  {service.name}
                                </h4>
                                <p className="text-gray-400 text-sm font-inter group-hover/item:text-gray-300 transition-colors duration-300">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration Showcase */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-convergy-dark/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-12 border border-convergy-neon/30 shadow-2xl shadow-convergy-neon/10 text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-convergy-neon/20 to-convergy-blue/20 backdrop-blur-sm border border-convergy-neon/30 rounded-full px-6 py-3 mb-6 animate-pulse-glow"
            >
              <Zap className="w-5 h-5 text-convergy-neon animate-pulse" />
              <span className="text-convergy-neon font-funnel font-semibold">Stack Tecnológico Próprio</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-funnel font-bold text-white mb-4">
              Tudo Integrado.<br />
              <span className="bg-gradient-to-r from-convergy-neon to-convergy-blue bg-clip-text text-transparent">
                Tudo Automatizado.
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Nossa plataforma proprietária conecta todas as ferramentas e automatiza seus processos de marketing e vendas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}