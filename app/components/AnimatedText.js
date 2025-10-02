'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Animated letter component for 3D effects
export function AnimatedLetter({ letter, index, delay = 0, className = "" }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ 
        opacity: 0, 
        y: 50, 
        rotateX: -90,
        scale: 0.5
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: 1
      }}
      transition={{
        duration: 0.8,
        delay: delay + (index * 0.1),
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={{
        scale: 1.2,
        rotateY: 15,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  )
}

// Animated word component
export function AnimatedWord({ word, delay = 0, className = "" }) {
  const letters = word.split('')
  
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {letters.map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter}
          index={index}
          delay={delay}
          className={className}
        />
      ))}
    </motion.span>
  )
}

// Split text animation for section titles
export function SplitText({ text, className = "" }) {
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
        <motion.div
          className="flex flex-wrap justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Left side words */}
          <div className="flex flex-wrap justify-end items-center gap-2">
            {leftWords.map((word, index) => (
              <motion.span
                key={`left-${index}`}
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
                initial={{ 
                  opacity: 0, 
                  x: -100, 
                  rotateY: -45,
                  scale: 0.5
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  rotateY: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + (index * 0.2),
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
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
                initial={{ 
                  opacity: 0, 
                  x: 100, 
                  rotateY: 45,
                  scale: 0.5
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  rotateY: 0,
                  scale: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7 + (index * 0.2),
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: -10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Floating 3D text effect
export function FloatingText({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: 100, 
        rotateX: -90,
        scale: 0.3
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      whileHover={{
        y: -10,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  )
}

// 3D Card effect
export function Card3D({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: 50, 
        rotateX: -15,
        scale: 0.8
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: 1
      }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{
        y: -5,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  )
}
