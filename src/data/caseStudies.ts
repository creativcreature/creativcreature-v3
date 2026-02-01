export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  category: string
  year: string
  tags: string[]
  description: string
  heroImage: string
  thumbnail: string
  color: string
  featured: boolean
  type: 'project' | 'gallery'
  overview: string
  challenge: string
  approach: string
  solution: string
  results: string[]
  gallery: string[]
}

export const caseStudies: CaseStudy[] = [
  // AI-Generated Fake Projects
  {
    id: '1',
    slug: 'nova-ventures',
    title: 'NOVA Ventures',
    client: 'NOVA Ventures Capital',
    category: 'Brand Identity & Digital',
    year: '2024',
    tags: ['Brand Strategy', 'Visual Identity', 'Website', 'Pitch Deck'],
    description: 'Redefining venture capital for the AI era. A complete brand transformation for a forward-thinking investment firm.',
    heroImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    color: '#6366f1',
    featured: true,
    type: 'project',
    overview: 'NOVA Ventures approached us with a bold vision: become the definitive VC firm for AI-first startups. Their existing brand felt dated, failing to communicate their forward-thinking investment philosophy.',
    challenge: 'The venture capital space is crowded with firms trying to appear innovative. NOVA needed a brand that didn\'t just look futuristic—it needed to embody the transformative potential of AI while maintaining the trust and credibility essential for a financial institution.',
    approach: 'Using AI as a creative partner, we explored hundreds of visual directions in days rather than weeks. Claude helped synthesize market research, while Midjourney generated concept explorations that pushed our thinking beyond conventional VC aesthetics. Human curation and refinement transformed these AI explorations into a cohesive brand system.',
    solution: 'A dynamic identity system that adapts and evolves—much like the AI technologies NOVA invests in. The logomark features a geometric constellation that can be generatively reconfigured, symbolizing the infinite possibilities of their portfolio companies.',
    results: [
      '340% increase in inbound deal flow',
      'Featured in Fast Company\'s "Most Innovative Brands"',
      '$2.4B fund raised within 6 months of rebrand',
      'Brand recognition increased 180% among tech founders'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80'
    ]
  },
  {
    id: '2',
    slug: 'synthesis-labs',
    title: 'Synthesis Labs',
    client: 'Synthesis Laboratories Inc.',
    category: 'Brand Launch & Product',
    year: '2024',
    tags: ['Brand Strategy', 'Visual Identity', 'Product UI', 'Launch Campaign'],
    description: 'Launching a biotech revolution. From stealth to spotlight with a brand built to inspire scientific wonder.',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    color: '#10b981',
    featured: true,
    type: 'project',
    overview: 'Synthesis Labs emerged from stealth with breakthrough protein folding technology. They needed a brand that could communicate complex science to investors, partners, and the public without losing the wonder of their work.',
    challenge: 'Biotech brands often fall into two traps: either overly clinical and cold, or desperately trying to appear "friendly" with generic stock imagery. Synthesis needed something that captured the awe of their molecular work while remaining scientifically credible.',
    approach: 'AI-assisted research helped us understand the visual language of molecular biology at a deeper level. We used generative tools to explore how their actual protein structures could inform brand elements. The result: a visual identity literally derived from their science.',
    solution: 'A living brand system where the core identity elements are generated from the molecular structures of their protein targets. Each product launch features unique patterns derived from that specific protein, creating an ever-expanding visual vocabulary.',
    results: [
      '$180M Series B funding secured',
      'Nature Magazine design feature',
      '94% positive sentiment in brand perception study',
      '12 strategic partnership deals closed'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80',
      'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=80'
    ]
  },
  {
    id: '3',
    slug: 'meridian-events',
    title: 'Meridian Events',
    client: 'Meridian Luxury Events',
    category: 'Brand Identity & Experience',
    year: '2023',
    tags: ['Brand Identity', 'Event Collateral', 'Digital Experience', 'Environmental Design'],
    description: 'Elevating luxury events through AI-crafted experiences. A rebrand that redefined opulence for the modern age.',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    color: '#f59e0b',
    featured: true,
    type: 'project',
    overview: 'Meridian Events had built a reputation for flawless execution but their brand felt stuck in traditional luxury tropes. They sought a visual identity that matched their innovative approach to event production.',
    challenge: 'Luxury branding is saturated with gold, serif fonts, and expected elegance. Meridian wanted to feel premium without being predictable—sophisticated yet surprising, exclusive yet approachable to new wealth creators.',
    approach: 'AI became our mood boarding partner, generating thousands of aesthetic variations that helped us identify unexpected luxury territories. We discovered a visual language that merged organic fluidity with geometric precision—reflecting how Meridian blends meticulous planning with moments of spontaneous magic.',
    solution: 'A fluid identity system built around the concept of "choreographed spontaneity." The brand features dynamic gradients and organic forms that shift across applications, ensuring each event feels unique while remaining unmistakably Meridian.',
    results: [
      '67% increase in high-net-worth client inquiries',
      'Vogue Events "Agency of the Year" nomination',
      'Average event budget increased by $340K',
      'Waitlist of 18 months for premium dates'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
      'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?w=1200&q=80',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80'
    ]
  },
  // AI Image Gallery Projects
  {
    id: '4',
    slug: 'ethereal-forms',
    title: 'Ethereal Forms',
    client: 'Personal Exploration',
    category: 'Generative Art',
    year: '2024',
    tags: ['AI Art', 'Prompt Engineering', 'Creative Direction', 'Generative Design'],
    description: 'An exploration of organic abstraction through AI-generated imagery. Prompt engineering as an art form.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    color: '#8b5cf6',
    featured: false,
    type: 'gallery',
    overview: 'A personal exploration into the boundaries of AI image generation, focusing on organic forms, ethereal lighting, and the space between the real and imagined.',
    challenge: 'Creating cohesive visual narratives through AI requires developing a sophisticated understanding of prompt architecture and model behavior—it\'s creative direction for silicon minds.',
    approach: 'Treating prompt engineering as a design discipline, I developed systematic approaches to achieving specific aesthetic outcomes, documenting the "design language" that emerges from particular prompt structures.',
    solution: 'A curated collection that demonstrates AI creative direction—showing how intentional prompt crafting can yield results that transcend random generation into genuine artistic expression.',
    results: [
      'Featured in "AI Art: The New Medium" exhibition',
      '50K+ impressions on Behance',
      'Prompt methodology adopted by 3 design studios',
      'Speaking invitation at Creative AI Summit'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80',
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&q=80',
      'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=1200&q=80'
    ]
  },
  {
    id: '5',
    slug: 'neon-narratives',
    title: 'Neon Narratives',
    client: 'Personal Exploration',
    category: 'Generative Art',
    year: '2024',
    tags: ['AI Art', 'Cyberpunk', 'Prompt Engineering', 'Visual Storytelling'],
    description: 'Cyberpunk visions rendered through AI. Exploring dystopian futures and the aesthetics of digital decay.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#ec4899',
    featured: false,
    type: 'gallery',
    overview: 'An ongoing series exploring cyberpunk aesthetics through AI generation—neon-soaked cityscapes, rain-slicked streets, and the beautiful tension between technology and humanity.',
    challenge: 'The cyberpunk genre is visually well-defined, making it easy to fall into clichés. The challenge was creating images that honored the genre while pushing it forward.',
    approach: 'Deep study of the genre\'s visual masters—Syd Mead, Moebius, anime like Akira and Ghost in the Shell—then translating these influences into prompt structures that could yield genuinely novel results.',
    solution: 'A visual world that feels both familiar and fresh—classic cyberpunk DNA expressed through contemporary AI capabilities, creating scenes that could only exist at this intersection of human vision and machine generation.',
    results: [
      'Licensed for indie game concept art',
      'Featured by Midjourney community',
      '100+ prompt breakdowns shared with community',
      'Commissioned for album artwork'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1515705576963-95cad62945b6?w=1200&q=80',
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80',
      'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80'
    ]
  },
  {
    id: '6',
    slug: 'organic-machines',
    title: 'Organic Machines',
    client: 'Personal Exploration',
    category: 'Generative Art',
    year: '2023',
    tags: ['AI Art', 'Biomechanical', 'Prompt Engineering', 'Surrealism'],
    description: 'Where biology meets machinery. Exploring the uncanny beauty of biomechanical forms through AI generation.',
    heroImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    color: '#14b8a6',
    featured: false,
    type: 'gallery',
    overview: 'An exploration of the liminal space where organic forms meet mechanical structures—inspired by H.R. Giger but pushed into new aesthetic territories through AI collaboration.',
    challenge: 'Biomechanical art has a rich history and a master in Giger. The challenge was creating work that acknowledged this legacy while carving out a distinct visual voice.',
    approach: 'Using AI\'s ability to blend concepts in unexpected ways, I developed prompts that merged biological references with industrial and architectural elements, then curated ruthlessly for images that felt genuinely new.',
    solution: 'A body of work that expands the biomechanical vocabulary—less dark and menacing than traditional work in the genre, instead finding beauty in the hybrid nature of these forms.',
    results: [
      'Exhibited at Digital Art Basel satellite show',
      'Collected by 3 digital art collectors',
      'Tutorial series reached 25K views',
      'Influenced product design concepts for tech startup'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=1200&q=80',
      'https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1200&q=80',
      'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200&q=80'
    ]
  }
]

export const getFeaturedCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.featured)
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => caseStudies.find(cs => cs.slug === slug)
export const getCaseStudy = getCaseStudyBySlug
export const getProjectCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'project')
export const getGalleryCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'gallery')
