import { motion } from 'framer-motion'

const services = [
  {
    title: 'Brand Strategy',
    description: 'Strategic positioning, brand architecture, and go-to-market planning that creates lasting competitive advantage.',
    icon: '◇',
    deliverables: ['Brand Positioning', 'Competitive Analysis', 'Brand Architecture', 'Messaging Framework']
  },
  {
    title: 'Brand Identity',
    description: 'Complete visual identity systems—from logo design to comprehensive brand guidelines.',
    icon: '◆',
    deliverables: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Asset Libraries']
  },
  {
    title: 'Experiential Design',
    description: 'Immersive brand experiences that create emotional connections and drive engagement.',
    icon: '○',
    deliverables: ['Event Design', 'Spatial Branding', 'Interactive Installations', 'Trade Show Design']
  },
  {
    title: 'Digital Design',
    description: 'User-centered digital experiences—websites, apps, and digital products that convert.',
    icon: '●',
    deliverables: ['Web Design', 'UI/UX Design', 'Digital Products', 'Design Systems']
  },
  {
    title: 'Art Direction',
    description: 'Creative vision and direction for campaigns, shoots, and content that captures attention.',
    icon: '□',
    deliverables: ['Campaign Direction', 'Photo Direction', 'Video Direction', 'Content Strategy']
  },
  {
    title: 'AI-Enhanced Creative',
    description: 'Leveraging AI tools to explore 10x more creative directions while maintaining craft quality.',
    icon: '■',
    deliverables: ['AI Concept Generation', 'Rapid Prototyping', 'Visual Exploration', 'Efficiency Gains']
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-light-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] text-dark-600 uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            What I Do
          </h2>
          <p className="text-dark-600 text-lg max-w-2xl">
            14+ years of experience distilled into focused capabilities. 
            Every service designed to drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-light-100 p-8 group hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-3xl mb-4 block text-dark-900/20 group-hover:text-dark-900/40 transition-colors">
                {service.icon}
              </span>
              <h3 className="font-display text-xl font-bold text-dark-900 mb-3">
                {service.title}
              </h3>
              <p className="text-dark-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-dark-500 bg-dark-900/5 px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-900 text-light-100 font-medium tracking-wide hover:bg-dark-800 transition-colors"
          >
            Estimate Your Project
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
