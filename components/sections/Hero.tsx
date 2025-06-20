"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Zap, TrendingUp, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  console.log('Hero section rendered')

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-convergy-dark via-slate-900 to-convergy-dark">
        <div className="absolute inset-0 bg-neural-network opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-convergy-blue/10 via-transparent to-convergy-purple/10"></div>
        
        {/* Animated geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-convergy-blue/20 rounded-full blur-xl animate-morph"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-convergy-purple/30 animate-morph"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-sm border border-convergy-blue/30 rounded-full px-6 py-3 text-sm font-funnel font-medium text-convergy-neon"
              >
                <Zap className="w-4 h-4 animate-pulse" />
                <span>Metodologia Exclusiva de Growth</span>
              </motion.div>

              <h1 className="text-4xl md:text-7xl font-funnel font-bold leading-tight text-white">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Transformamos 
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-gradient-to-r from-convergy-neon via-convergy-blue to-convergy-purple bg-clip-text text-transparent animate-gradient-shift bg-300% animate-neon-pulse"
                >
                  Marketing
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-white"
                >
                  em{' '}
                  <span className="relative">
                    Resultados
                    <motion.div
                      className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-convergy-blue to-convergy-neon"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </span>
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 leading-relaxed font-funnel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Estratégia que vende. Execução que entrega.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-400 max-w-2xl font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                Agência de marketing digital no Algarve especializada em transformar 
                PMEs em líderes de mercado através de estratégias de growth comprovadas.
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <Button 
                size="lg"
                className="relative bg-gradient-to-r from-convergy-blue to-convergy-purple hover:from-convergy-purple hover:to-convergy-blue text-white font-funnel font-semibold text-lg px-8 py-4 animate-pulse-glow overflow-hidden group"
                onClick={() => console.log('Primary CTA clicked - Diagnóstico gratuito')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <TrendingUp className="w-5 h-5 mr-2 animate-pulse" />
                Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-convergy-neon text-convergy-neon hover:bg-convergy-neon hover:text-convergy-dark font-funnel font-semibold text-lg px-8 py-4 backdrop-blur-sm transition-all duration-300"
                onClick={() => console.log('Secondary CTA clicked - Ver transformações')}
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Transformações
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="pt-8 border-t border-convergy-blue/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <p className="text-sm text-gray-400 mb-4 font-funnel">Transformações reais:</p>
              <div className="flex flex-wrap gap-6 items-center">
                <motion.div 
                  className="bg-gradient-to-r from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-sm border border-convergy-blue/30 px-4 py-2 rounded-lg text-sm font-funnel font-semibold text-convergy-neon"
                  whileHover={{ scale: 1.05 }}
                >
                  Best Motors
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-sm border border-convergy-blue/30 px-4 py-2 rounded-lg text-sm font-funnel font-semibold text-convergy-neon"
                  whileHover={{ scale: 1.05 }}
                >
                  Mecanitec
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-convergy-blue/20 to-convergy-purple/20 backdrop-blur-sm border border-convergy-blue/30 px-4 py-2 rounded-lg text-sm font-funnel font-semibold text-convergy-neon"
                  whileHover={{ scale: 1.05 }}
                >
                  +50 PMEs
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Visual Element - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="relative">
              {/* Main Hero Image */}
              <motion.div 
                className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-convergy-blue/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image
                  src="https://assets.macaly-user-data.dev/w9dmu631lytd822mcj561pfj/bqypkapl8nenss2qqcter3e3/18q06XCpEoOsKTHG0Enic/chat-gpt-image-19-06-2025-15-30-09.png"
                  alt="Marketing Digital que Gera Resultados"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-convergy-dark/60 via-transparent to-transparent"></div>
                
                {/* Floating success metrics */}
                <motion.div
                  className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-funnel font-semibold text-xs"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +300% ROI Médio
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 bg-convergy-blue/90 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-funnel font-semibold text-xs"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Marketing que Funciona
                </motion.div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-convergy-neon/20 rounded-full blur-xl animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-convergy-purple/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}