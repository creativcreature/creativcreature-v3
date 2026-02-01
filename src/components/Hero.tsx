import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Particles from './Particles'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const chars = titleRef.current.querySelectorAll('.char')
    
    gsap.fromTo(chars, 
      { 
        opacity: 0, 
        y: 100,
        rotateX: -90 
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: 'power4.out',
        delay: 0.5
      }
    )
  }, [])

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className="char inline-block"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <Particles />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-accent-primary/5 blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-accent-glow/5 blur-[120px]"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Pre-title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 border border-accent-primary/30 font-mono text-xs tracking-[0.3em] text-accent-primary/80">
            AI-AUGMENTED CREATIVE DIRECTOR
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-none mb-6"
          style={{ perspective: '1000px' }}
        >
          <span className="block overflow-hidden">
            {splitText('Christopher')}
          </span>
          <span className="block overflow-hidden mt-2">
            {splitText('James Parker')}
          </span>
        </h1>

        {/* Tagline */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.p
            className="font-display text-2xl md:text-3xl lg:text-4xl text-accent-primary italic"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            Neo Renaissance Man
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-8 max-w-2xl mx-auto text-cream/60 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Mastering the intersection of strategy, design, and technology. 
          Where human creativity meets artificial intelligence.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <a
            href="#work"
            className="group relative px-8 py-4 bg-accent-primary text-dark-900 font-medium tracking-wide overflow-hidden transition-all duration-300"
            data-cursor="hover"
          >
            <span className="relative z-10">View Selected Work</span>
            <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-cream/30 text-cream font-medium tracking-wide hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
            data-cursor="hover"
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-mono text-xs tracking-widest text-cream/40">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-24 left-6 md:left-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="w-16 h-16 border-l border-t border-accent-primary/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-24 right-6 md:right-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
        >
          <div className="w-16 h-16 border-r border-b border-accent-primary/30" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
