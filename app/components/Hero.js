'use client'

import { useState, useEffect } from 'react'
import { CSSAnimatedText } from './CSSAnimatedText'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const texts = [
      'Full Stack Developer',
      'Professional Coder',
      'Freelancer',
      'UI/UX Enthusiast',
    ]

    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main Content */}
          <CSSAnimatedText delay={0.2} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m{' '}
                <span className="text-primary-600 dark:text-primary-400">
                  SARANG PADULKAR
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center">
                <span className="border-r-2 border-primary-600 dark:border-primary-400 pr-2 animate-pulse">
                  {currentText}
                </span>
              </div>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I create beautiful, responsive, and user-friendly web applications
                using modern technologies. Passionate about clean code and
                exceptional user experiences.
              </p>
            </div>
          </CSSAnimatedText>

          {/* CTA Buttons */}
          <CSSAnimatedText delay={2.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </CSSAnimatedText>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
