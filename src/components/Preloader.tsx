import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500
    const interval = 30
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 2
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsExiting(true)
        setTimeout(onComplete, 1000)
      }, 500)
    }
  }, [progress, onComplete])

  const name = "CHRISTOPHER JAMES PARKER"
  const letters = name.split('')

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-dark-900 flex flex-col items-center justify-center"
          exit={{
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900" />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(201, 169, 98, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(201, 169, 98, 0.5) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Animated name */}
            <div className="overflow-hidden mb-8">
              <motion.div 
                className="flex justify-center flex-wrap gap-1"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-wider"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      color: letter === ' ' ? 'transparent' : '#f5f0e8',
                      width: letter === ' ' ? '0.5em' : 'auto',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.div
              className="overflow-hidden mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.p
                className="text-sm md:text-base tracking-[0.3em] text-accent-primary uppercase"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                AI-Augmented Creative Director
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-80 mx-auto">
              <div className="h-[1px] bg-dark-600 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="mt-4 text-xs tracking-widest text-cream/40 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {Math.round(progress)}%
              </motion.p>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-accent-primary/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-accent-primary/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-accent-primary/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-accent-primary/20" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
