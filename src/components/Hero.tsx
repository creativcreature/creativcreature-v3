import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 400], [0, 100])

  useEffect(() => {
    if (!titleRef.current) return

    const lines = titleRef.current.querySelectorAll('.hero-line')
    
    gsap.fromTo(lines, 
      { 
        opacity: 0, 
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.3
      }
    )
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-light-100"
    >
      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, y }}
      >
        {/* Main title */}
        <h1 
          ref={titleRef}
          className="font-display font-bold text-dark-900 leading-[0.95] mb-6"
        >
          <span className="hero-line block text-[clamp(2.5rem,8vw,6rem)] overflow-hidden">
            Christopher
          </span>
          <span className="hero-line block text-[clamp(2.5rem,8vw,6rem)] overflow-hidden">
            James Parker
          </span>
        </h1>

        {/* Value proposition - SPECIFIC */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-dark-800 font-medium">
            Creative Director who codes. Designer who ships.
          </p>
        </motion.div>

        {/* Neo RenAIssance explanation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="font-display text-lg md:text-xl text-dark-600 italic mb-2">
            Neo Ren<span className="text-amber-600 font-semibold not-italic">AI</span>ssance Man
          </p>
          <p className="text-dark-500 text-sm max-w-lg mx-auto">
            I use AI to explore 10x more creative directions, then apply 10 years of craft to ship what actually works.
          </p>
        </motion.div>

        {/* Key stats - scannable */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { value: '10+', label: 'Years' },
            { value: 'SCAD', label: 'Trained' },
            { value: 'MELT', label: 'Agency' },
            { value: '2.7K', label: 'AI Works' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-dark-900">{stat.value}</p>
              <p className="text-xs text-dark-500 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Recruiter-friendly CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a
            href="#work"
            className="px-8 py-4 bg-dark-900 text-light-100 font-medium tracking-wide"
          >
            View Work
          </a>
          <a
            href="https://linkedin.com/in/creativcreature"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-dark-900/20 text-dark-700 font-medium tracking-wide hover:border-dark-900/40 transition-colors"
          >
            LinkedIn Profile
          </a>
          <a
            href="mailto:hello@creativcreature.com?subject=Let's Connect"
            className="px-8 py-4 text-dark-600 font-medium tracking-wide hover:text-dark-900 transition-colors"
          >
            Email Me →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] tracking-[0.3em] text-dark-600/50 uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-dark-900/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
