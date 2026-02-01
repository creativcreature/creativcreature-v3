import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

interface CaseStudyCardProps {
  slug: string
  title: string
  client: string
  category: string
  thumbnail: string
  index: number
}

const CaseStudyCard = ({ slug, title, client, category, thumbnail, index }: CaseStudyCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link 
        to={`/work/${slug}`}
        className="group block"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/10] bg-light-300 mb-8">
          <img 
            src={thumbnail} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Number overlay */}
          <div className="absolute bottom-6 right-6">
            <span className="text-6xl md:text-7xl font-display font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500 drop-shadow-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-2 group-hover:opacity-60 transition-opacity">
              {title}
            </h3>
            <p className="text-dark-600 text-sm">
              {category}
            </p>
          </div>
          
          <span className="text-sm text-dark-600 group-hover:translate-x-2 transition-transform">
            View Project →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default CaseStudyCard
