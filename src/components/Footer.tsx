import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border border-accent-primary/50 flex items-center justify-center">
                <span className="font-display text-lg text-accent-primary">CJP</span>
              </div>
              <div>
                <span className="block font-display text-cream">Christopher James Parker</span>
                <span className="block text-xs text-cream/50">AI-Augmented Creative Director</span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Creating at the intersection of human creativity and artificial intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-accent-primary/80 mb-6">
              NAVIGATION
            </h4>
            <nav className="space-y-3">
              <a href="#work" className="block text-cream/60 hover:text-cream transition-colors">Work</a>
              <a href="#about" className="block text-cream/60 hover:text-cream transition-colors">About</a>
              <a href="#services" className="block text-cream/60 hover:text-cream transition-colors">Services</a>
              <a href="#contact" className="block text-cream/60 hover:text-cream transition-colors">Contact</a>
            </nav>
          </div>

          {/* Previous Versions */}
          <div>
            <h4 className="font-mono text-xs tracking-widest text-accent-primary/80 mb-6">
              ARCHIVE
            </h4>
            <nav className="space-y-3">
              <a 
                href="https://creativcreature.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-cream/60 hover:text-cream transition-colors"
              >
                V2 (Current)
              </a>
              <a 
                href="https://v1.creativcreature.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-cream/60 hover:text-cream transition-colors"
              >
                V1 (Archive)
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10">
          <motion.p 
            className="text-cream/40 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {currentYear} Christopher James Parker. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-cream/40 text-sm mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Designed & Built with AI Augmentation
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
