"use client"

import { Star, TrendingUp, Users, DollarSign, Zap, Award, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Clients() {
  console.log('Clients section rendered')

  const cases = [
    {
      company: "Best Motors",
      sector: "Loja de Veículos",
      location: "Algarve",
      challenge: "Baixa conversão online e dificuldade para atrair compradores qualificados no mercado automóvel",
      results: [
        { metric: "Vendas online", value: "+280%", icon: TrendingUp },
        { metric: "Leads qualificados", value: "+350%", icon: Users },
        { metric: "ROI campanhas", value: "420%", icon: DollarSign }
      ],
      testimonial: "A CONVERGY revolucionou nossa estratégia digital. Passamos de 2-3 vendas por mês para mais de 15 veículos vendidos mensalmente através do marketing digital.",
      author: "Carlos Mendes, Diretor de Vendas"
    },
    {
      company: "Mecanitec",
      sector: "Oficina Mecânica",
      location: "Algarve",
      challenge: "Competição local intensa e dificuldade para se destacar no mercado de serviços automotivos",
      results: [
        { metric: "Agendamentos", value: "+300%", icon: TrendingUp },
        { metric: "Clientes recorrentes", value: "+250%", icon: Users },
        { metric: "Receita mensal", value: "+180%", icon: DollarSign }
      ],
      testimonial: "Nunca imaginei que marketing digital funcionaria para uma oficina mecânica. A CONVERGY provou que estava errado. Nossa agenda está sempre lotada agora.",
      author: "António Silva, Proprietário"
    }
  ]

  const clientLogos = [
    "Best Motors",
    "Mecanitec", 
    "AutoServ Algarve",
    "MotoMax",
    "Garage Premium",
    "CarTech Solutions"
  ]

  return (
    <section id="clients" className="py-20 bg-convergy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-convergy-dark mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Resultados reais de empresas que confiaram na nossa metodologia estratégica. 
            Prova social que você pode tocar.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {cases.map((case_, index) => (
            <motion.div 
              key={case_.company}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Background with cyber grid */}
              <div className="absolute inset-0 bg-gradient-to-br from-convergy-dark/95 to-slate-900/95 rounded-3xl cyber-grid"></div>
              
              <div className="relative bg-gradient-to-br from-convergy-dark/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-convergy-blue/30 shadow-2xl shadow-convergy-blue/10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Case Info */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-convergy-blue to-convergy-neon rounded-xl flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-funnel font-bold text-white">{case_.company}</h3>
                          <p className="text-convergy-neon font-funnel font-semibold">{case_.sector}</p>
                        </div>
                        <span className="bg-gradient-to-r from-convergy-blue to-convergy-purple text-white px-4 py-2 rounded-full text-sm font-funnel font-medium">
                          {case_.location}
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/30 p-6 rounded-2xl">
                        <div className="flex items-center space-x-2 mb-3">
                          <Target className="w-5 h-5 text-red-400" />
                          <h4 className="font-funnel font-semibold text-red-400">Desafio:</h4>
                        </div>
                        <p className="text-gray-300 font-inter">{case_.challenge}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 p-6 rounded-2xl"
                    >
                      <div className="flex items-center space-x-2 mb-6">
                        <Zap className="w-5 h-5 text-green-400 animate-pulse" />
                        <h4 className="font-funnel font-semibold text-green-400">Transformação:</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        {case_.results.map((result, idx) => {
                          const Icon = result.icon
                          return (
                            <motion.div 
                              key={result.metric} 
                              className="text-center group"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.9 + idx * 0.1, duration: 0.6 }}
                            >
                              <div className="w-16 h-16 bg-gradient-to-r from-convergy-blue to-convergy-neon rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse-glow">
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="text-3xl font-funnel font-bold bg-gradient-to-r from-convergy-neon to-convergy-blue bg-clip-text text-transparent">
                                {result.value}
                              </div>
                              <div className="text-xs text-gray-400 font-inter">{result.metric}</div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  </div>

                  {/* Testimonial */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <div className="bg-gradient-to-br from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-xl border border-convergy-neon/30 p-8 rounded-2xl relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-convergy-neon/20 to-transparent rounded-full blur-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 1 + i * 0.1 }}
                            >
                              <Star className="w-6 h-6 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                        <blockquote className="text-xl text-white mb-6 font-inter leading-relaxed">
                          "{case_.testimonial}"
                        </blockquote>
                        <cite className="text-convergy-neon font-funnel font-semibold">— {case_.author}</cite>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-convergy-dark mb-8">
            Empresas que confiam na CONVERTY
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={logo}
                className="bg-white px-6 py-4 rounded-lg shadow-sm font-semibold text-gray-700 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => console.log(`Client logo clicked: ${logo}`)}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-8 bg-convergy-blue rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Quer ser o próximo caso de sucesso?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Vamos analisar o seu negócio e criar uma estratégia personalizada 
            para alcançar resultados similares ou superiores.
          </p>
          <button 
            className="bg-white text-convergy-blue hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            onClick={() => console.log('Clients CTA clicked - Iniciar minha transformação')}
          >
            Iniciar Minha Transformação
          </button>
        </div>
      </div>
    </section>
  )
}