import { useState } from 'react'
import { motion } from 'framer-motion'

type ProjectType = 'brand-identity' | 'brand-strategy' | 'experiential' | 'digital' | 'campaign'
type ProjectSize = 'small' | 'medium' | 'large' | 'enterprise'
type Timeline = 'rush' | 'standard' | 'flexible'

const projectTypes: { id: ProjectType; label: string; basePrice: number }[] = [
  { id: 'brand-identity', label: 'Brand Identity', basePrice: 5000 },
  { id: 'brand-strategy', label: 'Brand Strategy', basePrice: 7500 },
  { id: 'experiential', label: 'Experiential Design', basePrice: 10000 },
  { id: 'digital', label: 'Digital Design', basePrice: 8000 },
  { id: 'campaign', label: 'Campaign Direction', basePrice: 6000 },
]

const projectSizes: { id: ProjectSize; label: string; description: string; multiplier: number }[] = [
  { id: 'small', label: 'Starter', description: 'Single deliverable, focused scope', multiplier: 0.5 },
  { id: 'medium', label: 'Standard', description: 'Core package, multiple deliverables', multiplier: 1 },
  { id: 'large', label: 'Comprehensive', description: 'Full system, extensive deliverables', multiplier: 2 },
  { id: 'enterprise', label: 'Enterprise', description: 'Multi-brand, organization-wide', multiplier: 4 },
]

const timelines: { id: Timeline; label: string; multiplier: number }[] = [
  { id: 'rush', label: 'Rush (< 2 weeks)', multiplier: 1.5 },
  { id: 'standard', label: 'Standard (4-8 weeks)', multiplier: 1 },
  { id: 'flexible', label: 'Flexible (8+ weeks)', multiplier: 0.9 },
]

const Calculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>('brand-identity')
  const [projectSize, setProjectSize] = useState<ProjectSize>('medium')
  const [timeline, setTimeline] = useState<Timeline>('standard')

  const basePrice = projectTypes.find(p => p.id === projectType)?.basePrice || 5000
  const sizeMultiplier = projectSizes.find(s => s.id === projectSize)?.multiplier || 1
  const timelineMultiplier = timelines.find(t => t.id === timeline)?.multiplier || 1

  const estimate = Math.round(basePrice * sizeMultiplier * timelineMultiplier)
  const lowEstimate = Math.round(estimate * 0.8)
  const highEstimate = Math.round(estimate * 1.3)

  return (
    <section id="calculator" className="py-24 md:py-32 bg-dark-900 text-light-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] text-light-100/50 uppercase mb-4 block">
            Project Calculator
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Estimate Your Investment
          </h2>
          <p className="text-light-100/70 text-lg max-w-xl mx-auto">
            Get a ballpark estimate for your project. Every engagement is custom, 
            but this gives you a starting point.
          </p>
        </motion.div>

        {/* Calculator Form */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Project Type */}
          <div>
            <label className="text-xs tracking-[0.3em] text-light-100/50 uppercase mb-4 block">
              Project Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`px-4 py-3 text-sm font-medium transition-all ${
                    projectType === type.id
                      ? 'bg-light-100 text-dark-900'
                      : 'bg-light-100/10 text-light-100/70 hover:bg-light-100/20'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Size */}
          <div>
            <label className="text-xs tracking-[0.3em] text-light-100/50 uppercase mb-4 block">
              Project Scope
            </label>
            <div className="grid md:grid-cols-4 gap-3">
              {projectSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setProjectSize(size.id)}
                  className={`p-4 text-left transition-all ${
                    projectSize === size.id
                      ? 'bg-light-100 text-dark-900'
                      : 'bg-light-100/10 text-light-100/70 hover:bg-light-100/20'
                  }`}
                >
                  <span className="block font-medium mb-1">{size.label}</span>
                  <span className={`text-xs ${projectSize === size.id ? 'text-dark-600' : 'text-light-100/50'}`}>
                    {size.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="text-xs tracking-[0.3em] text-light-100/50 uppercase mb-4 block">
              Timeline
            </label>
            <div className="grid md:grid-cols-3 gap-3">
              {timelines.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTimeline(t.id)}
                  className={`px-6 py-4 text-sm font-medium transition-all ${
                    timeline === t.id
                      ? 'bg-light-100 text-dark-900'
                      : 'bg-light-100/10 text-light-100/70 hover:bg-light-100/20'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Estimate Display */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs tracking-[0.3em] text-light-100/50 uppercase mb-4">
            Estimated Investment Range
          </p>
          <p className="font-display text-5xl md:text-6xl font-bold mb-4">
            ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
          </p>
          <p className="text-light-100/50 text-sm mb-10">
            *Final pricing based on detailed scope discussion
          </p>

          <a
            href="mailto:hello@creativcreature.com?subject=Project Inquiry&body=Hi, I'm interested in discussing a project.%0A%0AProject Type: {projectType}%0AScope: {projectSize}%0ATimeline: {timeline}%0AEstimate: ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}"
            className="inline-flex items-center gap-2 px-10 py-5 bg-light-100 text-dark-900 font-medium tracking-wide hover:bg-light-200 transition-colors"
          >
            Let's Talk About Your Project
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Calculator
