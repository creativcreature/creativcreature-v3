import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudyCard from '../components/CaseStudyCard'
import Calculator from '../components/Calculator'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudies'

const Home = () => {
  const philosophyRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  
  const isPhilosophyInView = useInView(philosophyRef, { once: true, margin: '-100px' })
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

      {/* Services Section */}
      <Services />

      {/* Project Calculator */}
      <Calculator />

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
