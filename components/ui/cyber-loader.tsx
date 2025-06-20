"use client"

import { motion } from 'framer-motion'

export function CyberLoader() {
  return (
    <div className="fixed inset-0 bg-convergy-dark z-50 flex items-center justify-center">
      <div className="relative">
        {/* Main logo container */}
        <motion.div
          className="w-32 h-32 border-4 border-convergy-blue rounded-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-convergy-blue to-convergy-neon opacity-20"
            animate={{ 
              x: ['-100%', '100%'],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* CONVERGY text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-white font-funnel font-bold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              C
            </motion.span>
          </div>
        </motion.div>
        
        {/* Orbital rings */}
        <motion.div
          className="absolute inset-0 w-32 h-32 border border-convergy-neon/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute inset-2 w-28 h-28 border border-convergy-blue/50 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Progress indicator */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-convergy-neon font-funnel text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Carregando...
        </motion.div>
      </div>
    </div>
  )
}