import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import NoiseOverlay from './components/NoiseOverlay'
import PageTransition from './components/PageTransition'

// Pages
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <NoiseOverlay />
          <Navigation />
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } 
              />
              <Route 
                path="/work/:slug" 
                element={
                  <PageTransition>
                    <CaseStudy />
                  </PageTransition>
                } 
              />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default App
