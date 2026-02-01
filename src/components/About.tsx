import { motion } from 'framer-motion'

const credentials = [
  { label: 'Education', value: 'SCAD Graduate, Drawing Minor' },
  { label: 'Certification', value: 'Adobe Certified Expert (Photoshop, Illustrator)' },
  { label: 'Experience', value: '14+ Years in Brand & Design' },
  { label: 'Location', value: 'Atlanta, Georgia' },
]

const clients = [
  'Aflac', 'Ghirardelli', 'Coca-Cola', 'Comfort Colors', 
  'Bath & Body Works', 'ESPN', 'Publix', 'Captain Planet Foundation'
]

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-light-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs tracking-[0.3em] text-dark-600 uppercase mb-4 block">
              About
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-6">
              Christopher James Parker
            </h2>
            <p className="font-display text-xl text-dark-700 italic mb-6">
              Neo Ren<span className="text-amber-600 font-semibold not-italic">AI</span>ssance Man
            </p>
            
            <div className="space-y-4 text-dark-600 leading-relaxed">
              <p>
                I'm a SCAD-trained Art Director and Visual Strategist with 14+ years of experience 
                creating brand identities, experiential designs, and digital experiences for 
                Fortune 500 companies and ambitious startups alike.
              </p>
              <p>
                My approach combines traditional craft with AI-enhanced exploration—using tools 
                like Midjourney and Stable Diffusion to explore 10x more creative directions, 
                then applying years of design expertise to refine and ship what actually works.
              </p>
              <p>
                Currently serving as Creative Director at MELT Atlanta, where I lead brand 
                strategy and design for clients including Aflac, Ghirardelli, and Coca-Cola.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {credentials.map((cred) => (
                <div key={cred.label}>
                  <p className="text-xs tracking-wider text-dark-500 uppercase mb-1">
                    {cred.label}
                  </p>
                  <p className="text-dark-900 font-medium text-sm">
                    {cred.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Clients & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Client List */}
            <div className="bg-light-200 p-8 mb-8">
              <h3 className="text-xs tracking-[0.3em] text-dark-600 uppercase mb-6">
                Select Clients
              </h3>
              <div className="flex flex-wrap gap-3">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="text-dark-900 font-medium text-sm px-3 py-2 bg-light-100"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-light-200">
                <p className="font-display text-3xl font-bold text-dark-900 mb-1">14+</p>
                <p className="text-xs text-dark-500 uppercase tracking-wider">Years</p>
              </div>
              <div className="text-center p-6 bg-light-200">
                <p className="font-display text-3xl font-bold text-dark-900 mb-1">50+</p>
                <p className="text-xs text-dark-500 uppercase tracking-wider">Brands</p>
              </div>
              <div className="text-center p-6 bg-light-200">
                <p className="font-display text-3xl font-bold text-dark-900 mb-1">2.7K</p>
                <p className="text-xs text-dark-500 uppercase tracking-wider">AI Works</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://linkedin.com/in/creativcreature"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-4 bg-dark-900 text-light-100 font-medium tracking-wide hover:bg-dark-800 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@creativcreature.com"
                className="flex-1 text-center px-6 py-4 border border-dark-900/20 text-dark-700 font-medium tracking-wide hover:border-dark-900/40 transition-colors"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
