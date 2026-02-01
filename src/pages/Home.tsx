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
    <main className="bg-light-100">
      {/* Hero Section */}
      <Hero />

      {/* Philosophy Section */}
      <section 
        ref={philosophyRef}
        className="section-padding bg-light-100"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-dark-800 leading-relaxed text-center">
              AI doesn't replace creativity—<em>it amplifies it</em>. 
              As an AI-Augmented Creative Director, I partner with artificial intelligence 
              to explore possibilities at unprecedented scale, while keeping human vision 
              at the center of every decision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding bg-light-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 text-center">
              Selected Work
            </h2>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
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
        className="section-padding bg-light-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-8">
                About
              </h2>

              <div className="space-y-6 text-dark-700">
                <p className="text-lg leading-relaxed">
                  I'm a creative director, designer, and technologist with over a decade 
                  of experience building brands that matter.
                </p>
                <p className="leading-relaxed">
                  My journey has taken me from SCAD (Magna Cum Laude) to innovation labs 
                  at MELT, with a Gates Millennium Scholarship providing the foundation. 
                  I've developed a unique practice at the intersection of traditional 
                  design craft and emerging AI capabilities.
                </p>
                <p className="leading-relaxed">
                  Today, I work with forward-thinking companies who understand that 
                  the future of creativity is collaborative—human vision amplified 
                  by artificial intelligence.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="mt-10 flex flex-wrap gap-3">
                {['SCAD Magna Cum Laude', 'Gates Millennium Scholar', 'MELT Senior Art Director'].map((cred) => (
                  <span 
                    key={cred}
                    className="px-4 py-2 border border-dark-900/10 text-dark-600 text-xs tracking-wider"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '50+', label: 'Projects Delivered' },
                  { number: '2.7K', label: 'AI Artworks' },
                  { number: '∞', label: 'Ideas Explored' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  >
                    <p className="text-5xl md:text-6xl font-display font-bold text-dark-900 mb-2">
                      {stat.number}
                    </p>
                    <p className="text-dark-600 text-sm tracking-wider">
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
        className="section-padding bg-light-100"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-8">
              Let's create together.
            </h2>
            
            <p className="text-dark-600 text-lg mb-12 max-w-xl mx-auto">
              Whether you're looking to transform your brand, launch a new venture, 
              or explore AI's creative possibilities—I'd love to hear from you.
            </p>

            <a
              href="mailto:hello@creativcreature.com"
              className="inline-block px-10 py-5 bg-dark-900 text-light-100 font-medium tracking-wide transition-all duration-300 hover:bg-dark-800"
              data-cursor-hover
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Home
