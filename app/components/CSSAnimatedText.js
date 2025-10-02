'use client'

import { useEffect, useState } from 'react'

// CSS-based animated text component
export function CSSAnimatedText({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// CSS-based split text for section titles
export function CSSSplitText({ text, className = "" }) {
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(' ')
  const midPoint = Math.ceil(words.length / 2)
  const leftWords = words.slice(0, midPoint)
  const rightWords = words.slice(midPoint)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Background text */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
      >
        <span className="text-8xl sm:text-9xl lg:text-[12rem] font-black text-gray-400 dark:text-gray-700 select-none">
          {text}
        </span>
      </div>
      
      {/* Animated text */}
      <div className="relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {/* Left side words */}
          <div className="flex flex-wrap justify-end items-center gap-2">
            {leftWords.map((word, index) => (
              <span
                key={`left-${index}`}
                className={`text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-all duration-600 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{
                  transitionDelay: `${500 + index * 100}ms`
                }}
              >
                {word}
              </span>
            ))}
          </div>
          
          {/* Right side words */}
          <div className="flex flex-wrap justify-start items-center gap-2">
            {rightWords.map((word, index) => (
              <span
                key={`right-${index}`}
                className={`text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white transition-all duration-600 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12'
                }`}
                style={{
                  transitionDelay: `${700 + index * 100}ms`
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// CSS-based card animation
export function CSSCard({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-105 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}
