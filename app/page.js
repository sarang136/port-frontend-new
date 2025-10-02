"use client"

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Views from './components/Views'
import { useEffect, useRef } from 'react'
import axios from 'axios'

export default function Home() {
  const called = useRef(false);

  useEffect(() => {
    if (!called.current) {
      called.current = true;
      const postView = async () => {
        try {
          await axios.post('https://port-backend-new.onrender.com/view');
        } catch (err) {
          console.error(err);
        }
      };
      postView();
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Views />
    </main>
  )
}
