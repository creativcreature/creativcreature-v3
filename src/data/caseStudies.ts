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
  // AI-Generated Fake Projects - Featuring diverse teams and leadership
  {
    id: '1',
    slug: 'nova-ventures',
    title: 'NOVA Ventures',
    client: 'NOVA Ventures Capital',
    category: 'Brand Identity & Digital',
    year: '2024',
    tags: ['Brand Strategy', 'Visual Identity', 'Website', 'Pitch Deck'],
    description: 'Redefining venture capital for the AI era. A complete brand transformation for a forward-thinking investment firm.',
    heroImage: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80',
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
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80'
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
    heroImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
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
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80',
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80',
      'https://images.unsplash.com/photo-1580281657702-257584239a55?w=1200&q=80'
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
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
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
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
      'https://images.unsplash.com/photo-1529543544277-750e7ea1e8d0?w=1200&q=80',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80'
    ]
  },
  // AI Image Gallery Projects - Centering Black and POC representation
  {
    id: '4',
    slug: 'future-faces',
    title: 'Future Faces',
    client: 'Personal Exploration',
    category: 'AI Portraiture',
    year: '2024',
    tags: ['AI Art', 'Portraiture', 'Representation', 'Prompt Engineering'],
    description: 'Celebrating the beauty and diversity of Black and Brown faces through AI-generated portraiture.',
    heroImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
    color: '#d4af37',
    featured: false,
    type: 'gallery',
    overview: 'An AI-generated portrait series celebrating the beauty and diversity of Black and Brown faces. This project deliberately centers representation that has historically been marginalized in both traditional art and AI training data.',
    challenge: 'AI systems often struggle with diverse representation due to biases in training data. This project sought to push back against these limitations through intentional prompt engineering that centers and celebrates Black and Brown beauty.',
    approach: 'Through extensive experimentation, I developed prompting techniques that produce stunning, dignified portraits of people of color. Each image is the result of careful direction—adjusting lighting, expression, composition, and cultural elements to create portraits that feel both timeless and forward-looking.',
    solution: 'The collection presents a vision of portraiture where diversity is the default, not the exception. Each piece combines classical portrait techniques with contemporary aesthetics, creating images that could hang in museums of the future.',
    results: [
      'Collection acquired by 2 digital art museums',
      'Prompting methodology shared with 10,000+ AI artists',
      'Workshop series on inclusive AI art practice',
      'Featured in conversations about AI ethics and representation'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80',
      'https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1200&q=80',
      'https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=1200&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80'
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
export const getProjectCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'project')
export const getGalleryCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'gallery')
