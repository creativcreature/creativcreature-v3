import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies'
import Footer from '../components/Footer'

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const study = slug ? getCaseStudyBySlug(slug) : undefined

  if (!study) {
    return (
      <div className="min-h-screen bg-light-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-dark-900 mb-4">Project not found</h1>
          <Link to="/" className="text-dark-600 hover:text-dark-900">Return home</Link>
        </div>
      </div>
    )
  }

  // Get next project
  const currentIndex = caseStudies.findIndex(cs => cs.slug === slug)
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="bg-light-100 pt-20">
      {/* Back button */}
      <div className="fixed top-24 left-6 md:left-12 z-30">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-dark-600 hover:text-dark-900 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span>←</span>
          <span className="text-sm">Back</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-dark-600 text-sm tracking-wider mb-4">
              {study.category}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark-900 mb-6">
              {study.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              {study.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 border border-dark-900/10 text-dark-600 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 mb-20">
        <motion.div 
          className="max-w-7xl mx-auto aspect-[16/9] bg-light-300 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={study.heroImage} 
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-wider text-dark-600 uppercase mb-6">Overview</h2>
            <p className="text-xl md:text-2xl text-dark-800 leading-relaxed">
              {study.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="px-6 md:px-12 mb-20 py-20 bg-light-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm tracking-wider text-dark-600 uppercase mb-6">Challenge</h2>
              <p className="text-dark-700 leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="text-sm tracking-wider text-dark-600 uppercase mb-6">Approach</h2>
              <div className="text-dark-700 leading-relaxed whitespace-pre-line">
                {study.approach}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {study.gallery.length > 0 && (
        <section className="px-6 md:px-12 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm tracking-wider text-dark-600 uppercase mb-10">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.gallery.map((image, i) => (
                <div 
                  key={i}
                  className={`aspect-[4/3] bg-light-300 overflow-hidden ${i === 0 ? 'md:col-span-2 md:aspect-[16/9]' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`${study.title} - Image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-wider text-dark-600 uppercase mb-6">Solution</h2>
            <div className="text-dark-700 leading-relaxed whitespace-pre-line text-lg">
              {study.solution}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-12 mb-20 py-20 bg-light-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-wider text-dark-600 uppercase mb-10">Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.results.map((result, i) => (
              <div key={i} className="p-6 bg-light-100">
                <p className="text-dark-700 text-sm leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 md:px-12 py-24 border-t border-dark-900/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-dark-600 text-sm mb-4">Next Project</p>
          <Link 
            to={`/work/${nextProject.slug}`}
            className="group inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 group-hover:opacity-60 transition-opacity">
              {nextProject.title}
            </h2>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CaseStudy
