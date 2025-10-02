'use client'

import { motion } from 'framer-motion'

// Simple animated text component without complex 3D effects
export function SimpleAnimatedText({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}

// Simple split text for section titles
export function SimpleSplitText({ text, className = "" }) {
  const words = text.split(' ')
  const midPoint = Math.ceil(words.length / 2)
  const leftWords = words.slice(0, midPoint)
  const rightWords = words.slice(midPoint)
  
  return (
    <div className={`relative ${className}`}>
      {/* Background text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-8xl sm:text-9xl lg:text-[12rem] font-black text-gray-300 dark:text-gray-700 select-none">
          {text}
        </span>
      </motion.div>
      
      {/* Animated text */}
      <div className="relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {/* Left side words */}
          <div className="flex flex-wrap justify-end items-center gap-2">
            {leftWords.map((word, index) => (
              <motion.span
                key={`left-${index}`}
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + (index * 0.1),
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          {/* Right side words */}
          <div className="flex flex-wrap justify-start items-center gap-2">
            {rightWords.map((word, index) => (
              <motion.span
                key={`right-${index}`}
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + (index * 0.1),
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Simple card animation
export function SimpleCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {children}
    </motion.div>
  )
}
