import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Hero from '../components/Hero'
import CaseStudyCard from '../components/CaseStudyCard'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'

const Home = () => {
  const philosophyRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: '-100px' })
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' })
  const isContactInView = useInView(contactRef, { once: true, margin: '-100px' })

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <section 
        ref={philosophyRef}
        className="section-padding bg-dark-900"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent-primary text-xs tracking-[0.3em] uppercase block mb-6">
              Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream leading-tight mb-8">
              AI doesn't replace creativity—
              <br />
              <span className="gradient-text">it amplifies it.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-cream/60 leading-relaxed">
                As an AI-Augmented Creative Director, I've embraced artificial intelligence 
                not as a replacement for human creativity, but as its most powerful amplifier. 
                Where traditional workflows might take weeks, AI partnerships allow for 
                exploration at unprecedented scale and speed.
              </p>
              <p className="text-cream/60 leading-relaxed">
                The result isn't less human—it's more. By offloading the mechanical to machines, 
                we free ourselves to focus on what matters: strategy, emotion, meaning. 
                The vision remains human. The execution becomes superhuman.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={isPhilosophyInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {['Brand Strategy', 'Web Design', 'SaaS Products', 'Event Design', 'AI Art Direction'].map((service, i) => (
              <span 
                key={service}
                className="px-6 py-3 border border-dark-600 text-cream/60 text-sm tracking-wide hover:border-accent-primary hover:text-accent-primary transition-colors duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-accent-primary text-xs tracking-[0.3em] uppercase block mb-4">
                Selected Work
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream">
                Case Studies
              </h2>
            </div>
            <p className="text-cream/50 max-w-md md:text-right">
              A curated selection of brand transformations and AI-driven creative explorations.
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.slug}
                slug={study.slug}
                title={study.title}
                client={study.client}
                category={study.category}
                thumbnail={study.thumbnail}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className="section-padding bg-dark-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-accent-primary text-xs tracking-[0.3em] uppercase block mb-6">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-8">
                Christopher James Parker
              </h2>
              <div className="space-y-6 text-cream/60">
                <p className="text-lg">
                  I'm a creative director, designer, and technologist with a 
                  decade of experience building brands that matter.
                </p>
                <p>
                  My journey has taken me from the halls of SCAD to the 
                  innovation labs at MELT, with a Gates Millennium Scholarship 
                  providing the foundation. Along the way, I've developed a 
                  unique practice that sits at the intersection of traditional 
                  design craft and emerging AI capabilities.
                </p>
                <p>
                  Today, I work with forward-thinking companies who understand 
                  that the future of creativity is collaborative—human vision 
                  amplified by artificial intelligence.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="mt-12 flex flex-wrap gap-4">
                {['SCAD Graduate', 'Gates Scholar', 'MELT Alumni'].map((cred) => (
                  <span 
                    key={cred}
                    className="px-4 py-2 bg-dark-800 text-cream/50 text-xs tracking-wide"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '50+', label: 'Projects Delivered' },
                  { number: '2.7K', label: 'AI Artworks Created' },
                  { number: '∞', label: 'Ideas Explored' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="p-8 bg-dark-800 border border-dark-600 hover:border-accent-primary/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  >
                    <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                      {stat.number}
                    </p>
                    <p className="text-cream/40 text-sm tracking-wide">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={contactRef}
        className="section-padding bg-dark-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent-primary text-xs tracking-[0.3em] uppercase block mb-6">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-8">
              Let's create
              <br />
              <span className="gradient-text">the extraordinary.</span>
            </h2>
            <p className="text-cream/50 text-lg mb-12 max-w-2xl mx-auto">
              Whether you're looking to transform your brand, launch a new venture, 
              or explore the creative possibilities of AI—I'd love to hear from you.
            </p>
            <motion.a
              href="mailto:hello@creativcreature.com"
              className="inline-flex items-center gap-4 px-8 py-4 bg-accent-primary text-dark-900 font-semibold tracking-wide hover:bg-accent-glow transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-hover
            >
              <span>Start a Conversation</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Home
