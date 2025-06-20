"use client"

import { Target, Zap, Users, Settings } from 'lucide-react'

export function Pillars() {
  console.log('Pillars section rendered')

  const pillars = [
    {
      icon: Target,
      title: "Aquisição",
      description: "Tráfego pago estratégico, SEO local, Google Meu Negócio e social media que converte clientes reais para o seu negócio.",
      color: "text-convergy-blue"
    },
    {
      icon: Zap,
      title: "Conversão",
      description: "Sites otimizados, landing pages de alta performance, funis de vendas e copywriting que transforma visitantes em compradores.",
      color: "text-convergy-blue"
    },
    {
      icon: Users,
      title: "Retenção",
      description: "Automações inteligentes, follow-up estruturado, relacionamento contínuo e estratégias de fidelização de clientes.",
      color: "text-convergy-blue"
    },
    {
      icon: Settings,
      title: "Tecnologia",
      description: "Integração completa, dashboards de controle, CRM personalizado e ferramentas que automatizam o crescimento.",
      color: "text-convergy-blue"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-convergy-dark mb-4">
            Os 4 Pilares do Crescimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia testada e comprovada para transformar pequenas e médias empresas 
            em máquinas de crescimento sustentável.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div 
                key={pillar.title}
                className="group relative p-8 bg-gray-50 rounded-2xl hover:bg-convergy-light transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => console.log(`Pillar clicked: ${pillar.title}`)}
              >
                <div className="space-y-4">
                  <div className={`w-16 h-16 ${pillar.color} bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-convergy-dark">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-convergy-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Quer ver como estes pilares podem transformar o seu negócio?
          </p>
          <button 
            className="bg-convergy-blue hover:bg-convergy-blue/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            onClick={() => console.log('Pillars CTA clicked - Descobrir estratégia')}
          >
            Descobrir Minha Estratégia
          </button>
        </div>
      </div>
    </section>
  )
}