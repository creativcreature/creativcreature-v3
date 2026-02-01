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
  // THE HUMAN CENTER ARKIVE - FEATURED REAL PROJECT
  {
    id: '0',
    slug: 'the-human-center-arkive',
    title: 'The Human Center Arkive',
    client: 'Personal Project',
    category: 'Documentary & Brand',
    year: '2024',
    tags: ['Documentary', 'YouTube', 'Storytelling', 'Memory Preservation'],
    description: 'A living archive of human memory. Preserving stories that would otherwise be lost to time.',
    heroImage: '/images/case-studies/human-center-01.png',
    thumbnail: '/images/case-studies/human-center-01.png',
    color: '#c9a962',
    featured: true,
    type: 'project',
    overview: 'The Human Center Arkive is a documentary project dedicated to preserving human stories—the memories, experiences, and wisdom that exist only in the minds of those who lived them. Like Noah\'s Ark preserved life, the Arkive preserves legacy.',
    challenge: 'Every day, irreplaceable stories disappear. Grandparents pass without sharing their war stories. Parents forget the small moments that shaped their children. The challenge was creating a platform that could capture these ephemeral human experiences before they\'re lost forever.',
    approach: 'Starting with family—learning to see my own mother not just as "Mom" but as Jennifer Kay Parker, a complete person with a full life I\'d never thought to ask about. This personal journey became the template for a broader mission of preserving human memory.',
    solution: 'A YouTube documentary series that creates space for intimate storytelling. Each episode captures the rarely-told stories of ordinary people—their struggles, triumphs, regrets, and wisdom. The Arkive becomes a permanent record of human experience.',
    results: [
      'Launched YouTube documentary channel',
      'Deepened personal family connections',
      'Template for capturing generational stories',
      'Framework for human memory preservation'
    ],
    gallery: [
      '/images/case-studies/human-center-01.png',
      '/images/case-studies/human-center-01.png',
      '/images/case-studies/human-center-01.png'
    ]
  },
  // MELT - REAL PROJECT
  {
    id: '1',
    slug: 'melt',
    title: 'MELT',
    client: 'MELT',
    category: 'Brand Strategy & AI Integration',
    year: '2018-2024',
    tags: ['Senior Art Director', 'AI Strategy', 'Brand Builds', 'Creative Direction'],
    description: 'Leading creative and AI strategy at a forward-thinking agency. Building brands and pioneering AI-augmented workflows.',
    heroImage: '/images/case-studies/synthesis-labs-01.png',
    thumbnail: '/images/case-studies/synthesis-labs-01.png',
    color: '#10b981',
    featured: true,
    type: 'project',
    overview: 'As Senior Art Director at MELT, I led creative direction across multiple client engagements while pioneering the integration of AI tools into agency workflows. This role combined traditional brand building with cutting-edge technology exploration.',
    challenge: 'Agencies were slow to adopt AI, seeing it as a threat rather than an opportunity. The challenge was demonstrating how AI could enhance creative output without replacing human insight and strategic thinking.',
    approach: 'Developed internal presentations on AI strategy, created proof-of-concept workflows using emerging tools, and led client-facing initiatives that showcased the power of human-AI creative collaboration.',
    solution: 'Built comprehensive brand identities while simultaneously developing AI-augmented creative processes. Created presentations that helped the agency and clients understand the transformative potential of AI in creative work.',
    results: [
      'Led creative direction for major brand builds',
      'Pioneered AI strategy presentations for agency',
      'Developed AI-augmented creative workflows',
      'Trained teams on emerging AI tools and techniques'
    ],
    gallery: [
      '/images/case-studies/synthesis-labs-01.png',
      '/images/case-studies/nova-ventures-01.png',
      '/images/case-studies/nova-ventures-02.png'
    ]
  },
  // CAPTAIN PLANET FOUNDATION - REAL PROJECT
  {
    id: '2',
    slug: 'captain-planet-foundation',
    title: 'Captain Planet Foundation',
    client: 'Captain Planet Foundation',
    category: 'Nonprofit Brand & Digital',
    year: '2013-2017',
    tags: ['Brand Identity', 'Environmental', 'Nonprofit', 'Digital Design'],
    description: 'Empowering the next generation of environmental stewards through brand and design.',
    heroImage: '/images/case-studies/meridian-events-01.png',
    thumbnail: '/images/case-studies/meridian-events-01.png',
    color: '#22c55e',
    featured: true,
    type: 'project',
    overview: 'The Captain Planet Foundation continues the legacy of the iconic animated series, funding environmental education programs in schools across America. I helped shape their visual identity and digital presence during a pivotal growth period.',
    challenge: 'The foundation needed to honor its nostalgic roots while appealing to modern educators, donors, and a new generation of young environmentalists. The brand had to feel both established and forward-looking.',
    approach: 'Balanced reverence for the Captain Planet legacy with contemporary design sensibilities. Created materials that worked across school environments, donor communications, and digital platforms.',
    solution: 'Developed cohesive brand materials that connected the foundation\'s mission to tangible environmental action. Designed digital experiences that engaged educators and made it easy for schools to participate in environmental programs.',
    results: [
      'Supported foundation\'s growth initiatives',
      'Created cohesive brand materials across platforms',
      'Designed engaging educator resources',
      'Contributed to environmental education for thousands of students'
    ],
    gallery: [
      '/images/case-studies/meridian-events-01.png',
      '/images/case-studies/ethereal-forms-01.png',
      '/images/case-studies/organic-machines-01.png'
    ]
  }
]

// PERSONAL AI ART GALLERY - FEATURED
const personalArtEntry: CaseStudy = {
  id: '3',
  slug: 'ai-art-explorations',
  title: 'AI Art Explorations',
  client: 'Personal Work',
  category: 'Generative Art',
  year: '2018-2024',
  tags: ['AI Art', 'Midjourney', 'Generative', 'Personal Expression'],
  description: 'A collection of AI-generated artwork exploring themes of identity, culture, spirituality, and the African diaspora.',
  heroImage: '/images/gallery/personal-art/035A430C-8FA7-4C9A-BC8D-057679C358BA.JPG',
  thumbnail: '/images/gallery/personal-art/035A430C-8FA7-4C9A-BC8D-057679C358BA.JPG',
  color: '#8b5cf6',
  featured: true,
  type: 'gallery',
  overview: 'An ongoing exploration of AI as a creative medium. These works span years of experimentation with generative tools—from early Midjourney explorations to refined prompt engineering techniques. The collection celebrates Black culture, spirituality, and personal narrative.',
  challenge: 'How do you use AI as a genuine creative tool rather than just a novelty? How do you develop a distinctive voice when the medium is accessible to everyone?',
  approach: 'Treating AI as a collaborator, not a replacement. Each piece starts with intention—a concept, a feeling, a story to tell. The AI becomes a partner in realizing visions that would be impossible to execute alone.',
  solution: 'A body of work that demonstrates AI creative direction—the human judgment, cultural context, and artistic vision that transforms prompts into meaningful art. Featured on Behance and LinkedIn.',
  results: [
    '2,700+ AI-generated artworks created',
    'Featured on Behance portfolio',
    'Explored themes of identity and diaspora',
    'Developed refined AI creative workflow'
  ],
  gallery: [
    '/images/gallery/personal-art/035A430C-8FA7-4C9A-BC8D-057679C358BA.JPG',
    '/images/gallery/personal-art/037BCA5E-D294-4D56-A091-1AE8CCEA55A7.JPG',
    '/images/gallery/personal-art/0412B5F4-B41E-4C28-9999-FEE197794567.jpg',
    '/images/gallery/personal-art/04F2498E-2EF1-477B-AB1D-994EC79BA8E3.jpg',
    '/images/gallery/personal-art/0509F924-E74F-43BD-B3E5-1E5F515B3B5B.jpg',
    '/images/gallery/personal-art/0511E9FA-7230-499D-9C30-C46BC3AB4226.jpg',
    '/images/gallery/personal-art/054BFF37-EBFA-44C9-B6F3-530D0E0C8C63.jpg',
    '/images/gallery/personal-art/0619A3CD-8B3D-43E5-9A5A-9ACDBC691552.jpg'
  ]
}

caseStudies.push(personalArtEntry)

export const getFeaturedCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.featured)
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => caseStudies.find(cs => cs.slug === slug)
export const getProjectCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'project')
export const getGalleryCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'gallery')
