import React, { useEffect, useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import FloatingResume from './components/FloatingResume';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // Pause scroll while loading
    if (isLoading) {
        lenis.stop();
        document.body.style.overflow = 'hidden';
    } else {
        lenis.start();
        document.body.style.overflow = '';
    }

    // Listen for custom events to control Lenis from children (e.g. Modals)
    const handleLenisStop = () => lenis.stop();
    const handleLenisStart = () => lenis.start();

    window.addEventListener('lenis-stop', handleLenisStop);
    window.addEventListener('lenis-start', handleLenisStart);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('lenis-stop', handleLenisStop);
      window.removeEventListener('lenis-start', handleLenisStart);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="app-container">
      <CustomCursor />
      
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader setLoading={setIsLoading} />}
      </AnimatePresence>
      
      {!isLoading && <FloatingResume />}
      
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
