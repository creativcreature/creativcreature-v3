import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

interface CaseStudyCardProps {
  slug: string
  title: string
  client: string
  category: string
  thumbnail: string
  index: number
}

const CaseStudyCard = ({ slug, title, client, category, thumbnail, index }: CaseStudyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/work/${slug}`}
        className="group block relative overflow-hidden"
        data-cursor-hover
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-dark-800">
          {/* Placeholder/gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900"
            style={{
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-accent-primary/0 group-hover:bg-accent-primary/5 transition-colors duration-500" />
          
          {/* Number */}
          <div className="absolute top-6 left-6 text-accent-primary/30 text-6xl md:text-8xl font-display font-bold">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* View indicator */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-accent-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-accent-primary text-xs tracking-widest uppercase">View</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-6 pb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-accent-primary text-xs tracking-[0.2em] uppercase mb-2">
                {category}
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-cream group-hover:text-accent-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-cream/50 text-sm mt-2">
                {client}
              </p>
            </div>
            <motion.div
              className="text-accent-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ x: 5 }}
            >
              →
            </motion.div>
          </div>
          
          {/* Bottom line */}
          <div className="mt-6 h-[1px] bg-dark-600 overflow-hidden">
            <motion.div
              className="h-full bg-accent-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CaseStudyCard
