"use client"

import { MapPin, Target, Eye, Heart, Zap, Globe, Award, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  console.log('About section rendered')

  const values = [
    { 
      name: "Resultado", 
      description: "Tudo que fazemos tem um objetivo: gerar resultados mensuráveis para seu negócio",
      icon: Target,
      color: "from-red-500 to-orange-500"
    },
    { 
      name: "Clareza", 
      description: "Comunicação transparente e estratégias fáceis de entender",
      icon: Eye,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Ética", 
      description: "Práticas honestas e sustentáveis que constroem confiança",
      icon: Heart,
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Estratégia", 
      description: "Cada ação é planejada e alinhada com seus objetivos de negócio",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Fé", 
      description: "Acreditamos no potencial de transformação de cada empresa",
      icon: Globe,
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-convergy-dark via-slate-900 to-convergy-dark">
        <div className="absolute inset-0 neural-network opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-convergy-blue/5 via-transparent to-convergy-purple/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-sm border border-convergy-blue/30 rounded-full px-6 py-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-5 h-5 text-convergy-neon animate-pulse" />
              <span className="text-convergy-neon font-funnel font-semibold">Algarve, Portugal</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-funnel font-bold text-white leading-tight">
                Nascemos no Brasil.
                <br />
                <span className="bg-gradient-to-r from-convergy-neon via-convergy-blue to-convergy-purple bg-clip-text text-transparent animate-gradient-shift bg-300%">
                  Crescemos
                </span>{' '}
                em Portugal.
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-6 text-lg text-gray-300 font-inter leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>
                A <strong className="text-convergy-neon">CONVERGY</strong> nasceu da visão de profissionalizar 
                o crescimento de pequenas e médias empresas através do marketing digital estratégico.
              </p>
              
              <p>
                Com expertise desenvolvida no mercado brasileiro e agora estabelecida no coração do Algarve, 
                combinamos metodologias comprovadas com o conhecimento profundo do mercado português.
              </p>
            </motion.div>

            {/* Mission, Vision */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-convergy-blue/10 to-convergy-purple/10 backdrop-blur-sm border border-convergy-blue/30 p-6 rounded-2xl">
                <h3 className="text-xl font-funnel font-bold text-convergy-neon mb-3 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Missão
                </h3>
                <p className="text-gray-300 font-inter">
                  Profissionalizar o crescimento de PMEs, transformando marketing em uma máquina de resultados previsíveis e escaláveis.
                </p>
              </div>

              <div className="bg-gradient-to-r from-convergy-purple/10 to-convergy-neon/10 backdrop-blur-sm border border-convergy-purple/30 p-6 rounded-2xl">
                <h3 className="text-xl font-funnel font-bold text-convergy-neon mb-3 flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  Visão
                </h3>
                <p className="text-gray-300 font-inter">
                  Ser a agência de marketing digital mais respeitada entre PMEs portuguesas, reconhecida pela excelência em resultados.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element with Brand Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Brand Image */}
              <motion.div 
                className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-convergy-blue/20 mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src="https://assets.macaly-user-data.dev/w9dmu631lytd822mcj561pfj/bqypkapl8nenss2qqcter3e3/logo-sf-1.png"
                  alt="CONVERGY Brand"
                  fill
                  className="object-contain bg-gradient-to-br from-convergy-dark to-slate-900 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-convergy-dark/80 via-transparent to-transparent"></div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-convergy-neon/90 backdrop-blur-sm rounded-lg px-4 py-2 text-convergy-dark font-funnel font-bold text-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Algarve HQ
                </motion.div>
              </motion.div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-gradient-to-br from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-xl border border-convergy-blue/30 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-3xl font-funnel font-bold text-convergy-neon mb-2">50+</div>
                  <div className="text-sm text-gray-400 font-inter">PMEs Transformadas</div>
                </motion.div>
                
                <motion.div
                  className="bg-gradient-to-br from-convergy-purple/20 to-convergy-neon/20 backdrop-blur-xl border border-convergy-purple/30 p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="text-3xl font-funnel font-bold text-convergy-neon mb-2">300%</div>
                  <div className="text-sm text-gray-400 font-inter">ROI Médio</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-convergy-neon/20 to-convergy-blue/20 backdrop-blur-sm border border-convergy-neon/30 rounded-full px-6 py-3 mb-6 animate-pulse-glow"
            >
              <Heart className="w-5 h-5 text-convergy-neon animate-pulse" />
              <span className="text-convergy-neon font-funnel font-semibold">Nossos Valores</span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-funnel font-bold text-white mb-4">
              Guiados por Princípios
              <br />
              <span className="bg-gradient-to-r from-convergy-neon to-convergy-blue bg-clip-text text-transparent">
                Sólidos
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-convergy-dark/90 to-slate-900/90 rounded-2xl holographic opacity-50"></div>
                    
                    <div className="relative bg-gradient-to-br from-convergy-dark/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-convergy-blue/30 shadow-xl shadow-convergy-blue/5 group-hover:shadow-convergy-neon/20 transition-all duration-500">
                      <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-funnel font-bold text-white mb-3 group-hover:text-convergy-neon transition-colors duration-300">
                        {value.name}
                      </h4>
                      
                      <p className="text-gray-400 font-inter text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Inspiration Quote */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-convergy-blue/10 to-convergy-purple/10 backdrop-blur-sm border border-convergy-neon/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-funnel font-medium text-convergy-neon mb-4">
              "Reunir todas as coisas em Cristo"
            </blockquote>
            <cite className="text-gray-400 font-inter text-sm">— Inspirada por Efésios 1.10</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}