import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies'
import Footer from '../components/Footer'

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>()
  const study = getCaseStudyBySlug(slug || '')
  
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <h1 className="text-4xl font-display text-cream mb-4">Project not found</h1>
          <Link to="/" className="text-accent-primary hover:underline">
            Return home
          </Link>
        </div>
      </div>
    )
  }

  // Get next project
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="bg-dark-900">
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          {/* Background image/gradient */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${study.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/60 to-dark-900" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-7xl mx-auto w-full">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors text-sm tracking-wide"
              >
                <span>←</span>
                <span>Back to Work</span>
              </Link>
            </motion.div>

            {/* Category */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-accent-primary text-xs tracking-[0.3em] uppercase mb-4"
            >
              {study.category}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream mb-6"
            >
              {study.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 text-cream/50 text-sm"
            >
              <div>
                <span className="text-cream/30 block mb-1">Client</span>
                <span>{study.client}</span>
              </div>
              <div>
                <span className="text-cream/30 block mb-1">Year</span>
                <span>{study.year}</span>
              </div>
              <div>
                <span className="text-cream/30 block mb-1">Scope</span>
                <span>{study.tags.slice(0, 3).join(', ')}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-[1px] h-16 bg-gradient-to-b from-accent-primary to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-display text-cream leading-relaxed"
          >
            {study.overview}
          </motion.p>
        </div>
      </section>

      {/* Scope tags */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {study.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 border border-dark-600 text-cream/60 text-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent-primary text-xs tracking-[0.3em] uppercase mb-4">
                The Challenge
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-accent-primary text-xs tracking-[0.3em] uppercase mb-4">
                The Approach
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {study.approach}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-accent-primary text-xs tracking-[0.3em] uppercase mb-4">
                The Solution
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {study.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {study.gallery.map((image: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-dark-800">
                  <img
                    src={image}
                    alt={`${study.title} - Image ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-accent-primary text-xs tracking-[0.3em] uppercase mb-4">
              Results & Impact
            </h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-cream">
              Measurable outcomes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {study.results.map((result: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 border border-dark-600"
              >
                <span className="text-accent-primary text-2xl font-display">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-cream/70">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="section-padding border-t border-dark-600">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-cream/40 text-sm tracking-widest uppercase mb-4">
              Next Project
            </p>
            <Link
              to={`/work/${nextProject.slug}`}
              className="group inline-block"
              data-cursor-hover
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream group-hover:text-accent-primary transition-colors duration-300">
                {nextProject.title}
              </h2>
              <motion.div
                className="mt-6 inline-flex items-center gap-2 text-accent-primary"
                whileHover={{ x: 10 }}
              >
                <span className="text-sm tracking-widest uppercase">View Project</span>
                <span className="text-xl">→</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default CaseStudy
