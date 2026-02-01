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
  awards?: string[]
}

export const caseStudies: CaseStudy[] = [
  // MELT - REAL PROJECT
  {
    id: '1',
    slug: 'melt-agency',
    title: 'MELT',
    client: 'MELT Agency',
    category: 'AI Strategy & Creative Direction',
    year: '2018-2024',
    tags: ['Senior Art Director', 'AI Integration', 'Brand Builds', 'Agency Innovation'],
    description: 'Pioneering AI-augmented creative workflows at a forward-thinking Atlanta agency.',
    heroImage: '/images/case-studies/melt-hero.jpg',
    thumbnail: '/images/case-studies/melt-hero.jpg',
    color: '#FF6B35',
    featured: true,
    type: 'project',
    overview: `Six years leading creative direction at MELT, an Atlanta-based agency known for bold brand work. During my tenure, I evolved from Senior Art Director to AI Strategy lead, pioneering the integration of generative tools into traditional agency workflows while delivering work for major clients.`,
    challenge: `Agencies were slow to adopt AI, viewing it as a threat rather than opportunity. The challenge was dual: continue delivering exceptional traditional creative work while simultaneously proving that AI could enhance—not replace—human creativity. Needed to bring skeptical clients and teammates along on the journey.`,
    approach: `Led by example. Started using AI tools in my own workflow first—mood boarding with Midjourney, concepting with ChatGPT, prototyping with generative design tools. Documented everything. When the results spoke for themselves, created internal presentations and workshops to train the broader team.

Key initiatives:
• Created agency's first AI workflow documentation
• Led client presentations on AI-augmented creative
• Developed internal training program for creative team
• Built proof-of-concept projects demonstrating AI value`,
    solution: `Established MELT as an AI-forward agency while maintaining creative excellence. The AI integration reduced concepting time by 60% while actually increasing creative exploration—we could show clients 10x more directions in the same timeframe.

Deliverables across tenure:
• Led creative on 50+ brand campaigns
• Developed AI strategy framework adopted agency-wide
• Trained 15+ creatives on AI tools
• Created client-facing AI capability presentations`,
    results: [
      'Reduced concepting phase by 60%',
      '10x increase in creative directions per project',
      'Agency adopted AI tools across all departments',
      'Featured in industry discussions on AI in advertising'
    ],
    gallery: []
  },

  // CAPTAIN PLANET FOUNDATION - REAL PROJECT  
  {
    id: '2',
    slug: 'captain-planet-foundation',
    title: 'Captain Planet Foundation',
    client: 'Captain Planet Foundation',
    category: 'Nonprofit Brand & Digital',
    year: '2013-2017',
    tags: ['Creative Direction', 'Brand Identity', 'Environmental', 'Nonprofit'],
    description: 'Shaping the visual identity of an iconic environmental foundation during a pivotal growth period.',
    heroImage: '/images/case-studies/cpf-hero.jpg',
    thumbnail: '/images/case-studies/cpf-hero.jpg',
    color: '#22C55E',
    featured: true,
    type: 'project',
    overview: `The Captain Planet Foundation carries forward the legacy of the iconic animated series, funding environmental education programs in schools across America. I joined during a pivotal growth period, helping shape their visual identity and digital presence as they expanded their reach.`,
    challenge: `The foundation needed to honor its nostalgic roots while appealing to modern educators, donors, and a new generation of young environmentalists. The brand had to feel both established and forward-looking—credible enough for major donors, accessible enough for elementary schools.`,
    approach: `Balanced reverence for the Captain Planet legacy with contemporary design sensibilities. Studied how other heritage brands had modernized successfully. Created materials that worked across wildly different contexts—from school cafeterias to corporate boardrooms to environmental conferences.

Design principles:
• Respect the legacy, don't exploit it
• Make environmental action feel achievable, not overwhelming
• Design for educators first—they're the real heroes
• Every touchpoint reinforces the mission`,
    solution: `Developed a cohesive visual system that bridged generations. The work appeared across school materials, donor communications, event collateral, and digital platforms. Focused on making environmental education feel exciting and empowering rather than doom-and-gloom.

Deliverables:
• Refreshed brand guidelines
• School program materials and toolkits
• Donor communication templates
• Event collateral and environmental design
• Digital platform design`,
    results: [
      'Supported foundation growth initiatives',
      'Materials reached thousands of schools',
      'Donor communication redesign improved engagement',
      'Brand system still in use today'
    ],
    gallery: []
  },

  // AI ART: Afrofuturist Visions - REAL WORK
  {
    id: '3',
    slug: 'afrofuturist-visions',
    title: 'Afrofuturist Visions',
    client: 'Personal Work',
    category: 'AI Art Direction',
    year: '2023-2024',
    tags: ['AI Art', 'Afrofuturism', 'Cultural Identity', 'Midjourney', 'Creative Direction'],
    description: 'An ongoing exploration of Black identity and future possibilities through AI-human creative collaboration.',
    heroImage: '/images/brands/portfolio-v4-images/afrofuturism/02-retro-space-warrior.png',
    thumbnail: '/images/brands/portfolio-v4-images/afrofuturism/01-cyberpunk-silhouette.png',
    color: '#8B5CF6',
    featured: true,
    type: 'gallery',
    overview: `This series uses AI as a creative collaborator to visualize Afrofuturist themes—imagining futures where Black culture, technology, and spirituality interweave. Over 500 pieces exploring themes of identity, ancestry, and possibility.`,
    challenge: `AI image generators weren't trained with representation in mind. Early experiments often revealed biases—defaulting to Eurocentric features, struggling with diverse skin tones, flattening cultural nuance. The challenge: guide AI toward authentic representation.`,
    approach: `Developed a methodology for culturally-informed AI art direction:

• Research: Deep study of Afrofuturist literature, art, and theory
• Reference: Curated visual libraries of African diaspora aesthetics  
• Refinement: Iterative prompting to overcome model biases
• Curation: Human judgment on what resonates vs. what tokenizes

Each piece starts with intention—a concept, emotion, or cultural reference point—before any generation begins.`,
    solution: `A cohesive body of work that demonstrates AI creative direction rather than AI art generation. The human judgment—about what represents, what resonates, what transcends—is the actual art. The AI is the instrument.

The collection spans portraiture, landscapes, and abstract compositions united by visual language that feels simultaneously ancient and futuristic. Golden tones, deep purples, cosmic imagery recur throughout.`,
    results: [
      '500+ pieces in the collection',
      'Featured on Behance with significant engagement',
      'Sparked discussions on AI and representation',
      'Methodology applicable to client work'
    ],
    gallery: [
      '/images/brands/portfolio-v4-images/afrofuturism/01-cyberpunk-silhouette.png',
      '/images/brands/portfolio-v4-images/afrofuturism/02-retro-space-warrior.png',
      '/images/brands/portfolio-v4-images/afrofuturism/03-black-superman-atlanta.png',
      '/images/brands/portfolio-v4-images/afrofuturism/04-ethereal-deity.png',
      '/images/brands/portfolio-v4-images/afrofuturism/05-tribal-god-portrait.png',
      '/images/brands/portfolio-v4-images/afrofuturism/06-superman-pyramids.png',
      '/images/brands/portfolio-v4-images/afrofuturism/07-warrior-father.png',
      '/images/brands/portfolio-v4-images/afrofuturism/08-mars-explorer.png',
      '/images/brands/portfolio-v4-images/afrofuturism/09-space-explorers.png',
      '/images/brands/portfolio-v4-images/afrofuturism/10-golden-deity.png'
    ]
  },

  // AI ART: Sacred Geometries - REAL WORK
  {
    id: '4',
    slug: 'sacred-geometries',
    title: 'Sacred Geometries',
    client: 'Personal Work',
    category: 'AI Art Direction',
    year: '2023-2024',
    tags: ['AI Art', 'Sacred Geometry', 'Spirituality', 'Abstract', 'Generative'],
    description: 'Exploring mathematical patterns and spiritual symbolism through AI-augmented creation.',
    heroImage: '/images/brands/portfolio-v4-images/neo-sacred/01-firebird-ornate.png',
    thumbnail: '/images/brands/portfolio-v4-images/neo-sacred/02-crystal-tree.png',
    color: '#F59E0B',
    featured: true,
    type: 'gallery',
    overview: `An investigation of sacred geometric patterns through AI generation—exploring how ancient mathematical forms can be reimagined through contemporary tools. The work sits at the intersection of spirituality, mathematics, and digital art.`,
    challenge: `Sacred geometry carries deep meaning across cultures—Islamic tessellation, Hindu yantras, Celtic knots, Kemetic symbols. The challenge: create work that respects these traditions while pushing into genuinely new visual territory.`,
    approach: `Research-driven generation:

• Studied geometric patterns across cultures and traditions
• Identified underlying mathematical principles
• Used this knowledge to inform prompts
• Applied human curation to select what honors vs. appropriates

The goal was contemplative digital art—pieces that invite meditation rather than just visual consumption.`,
    solution: `A collection featuring intricate patterns in rich, jewel-toned palettes. Some pieces are purely abstract; others incorporate figurative elements—hands, eyes, celestial bodies—that ground the geometry in human experience.

The work has found resonance with audiences interested in spirituality, mathematics, and visual meditation.`,
    results: [
      '300+ pieces in the collection',
      'Used as meditation visuals by practitioners',
      'Commissioned for album artwork',
      'Methodology informs commercial pattern work'
    ],
    gallery: [
      '/images/brands/portfolio-v4-images/neo-sacred/01-firebird-ornate.png',
      '/images/brands/portfolio-v4-images/neo-sacred/02-crystal-tree.png',
      '/images/brands/portfolio-v4-images/neo-sacred/03-blue-gods-garden.png',
      '/images/brands/portfolio-v4-images/neo-sacred/04-surreal-sculptures.png',
      '/images/brands/portfolio-v4-images/neo-sacred/05-mystic-tree.png',
      '/images/brands/portfolio-v4-images/neo-sacred/06-rapture-renaissance.png',
      '/images/brands/portfolio-v4-images/neo-sacred/07-underwater-realm.png',
      '/images/brands/portfolio-v4-images/neo-sacred/08-vaporwave-garden.png',
      '/images/brands/portfolio-v4-images/neo-sacred/09-zulu-soldiers.png',
      '/images/brands/portfolio-v4-images/neo-sacred/10-moses-silhouette.png'
    ]
  },

  // AI ART: Digital Portraits - REAL WORK
  {
    id: '5',
    slug: 'digital-portraits',
    title: 'Digital Ancestors',
    client: 'Personal Work',
    category: 'AI Art Direction',
    year: '2024',
    tags: ['AI Art', 'Portraiture', 'Heritage', 'Memory', 'Generative'],
    description: 'Imagining ancestors who were never photographed—honoring lineage through AI-generated imagery.',
    heroImage: '/images/brands/portfolio-v4-images/digital-portraits/02-blue-essence.png',
    thumbnail: '/images/brands/portfolio-v4-images/digital-portraits/08-golden-goddess.png',
    color: '#EC4899',
    featured: true,
    type: 'gallery',
    overview: `"Digital Ancestors" is a meditation on heritage, memory, and the photographs that were never taken. Using AI, I've created portraits of imagined ancestors—people who might have existed in my family line but were never documented.`,
    challenge: `Many Black families lack photographic records of their ancestors. The camera wasn't accessible; the subjects weren't deemed worthy of documentation. The challenge: create work that fills this void meaningfully—not replacing real history, but creating visual poetry about what might have been.`,
    approach: `Each portrait begins with a story:
• Who was this person?
• What was their life like?
• What did they carry forward?

These narratives inform every aspect—expression, clothing, setting, lighting. The aesthetic draws from historical photography while incorporating dreamlike elements. These are clearly imaginative works, not attempts to deceive.`,
    solution: `Portraits with a quality of dignified mystery. They feel like recovered artifacts from a parallel timeline—familiar yet impossible. Warm sepia tones give way to unexpected colors; traditional poses carry subtle surrealist touches.

This series has resonated deeply with viewers who share the experience of family history gaps.`,
    results: [
      '150+ portraits in the series',
      'Exhibition interest from cultural institutions',
      'Strong emotional resonance with viewers',
      'Featured in discussions about AI and memory'
    ],
    gallery: [
      '/images/brands/portfolio-v4-images/digital-portraits/01-ethereal-water.png',
      '/images/brands/portfolio-v4-images/digital-portraits/02-blue-essence.png',
      '/images/brands/portfolio-v4-images/digital-portraits/03-violet-gaze.png',
      '/images/brands/portfolio-v4-images/digital-portraits/04-futuristic-glamour.png',
      '/images/brands/portfolio-v4-images/digital-portraits/05-curls-vibrant.png',
      '/images/brands/portfolio-v4-images/digital-portraits/06-porcelain-fairy.png',
      '/images/brands/portfolio-v4-images/digital-portraits/07-feline-goddess.png',
      '/images/brands/portfolio-v4-images/digital-portraits/08-golden-goddess.png',
      '/images/brands/portfolio-v4-images/digital-portraits/09-third-eye-vision.png',
      '/images/brands/portfolio-v4-images/digital-portraits/10-deer-spirit.png'
    ]
  },

  // THE HUMAN CENTER ARKIVE - REAL PROJECT
  {
    id: '6',
    slug: 'human-center-arkive',
    title: 'The Human Center Arkive',
    client: 'Personal Project',
    category: 'Documentary & Brand',
    year: '2024',
    tags: ['Documentary', 'YouTube', 'Storytelling', 'Memory Preservation', 'Brand'],
    description: 'A living archive of human stories—preserving memories that would otherwise be lost to time.',
    heroImage: '/images/case-studies/arkive-hero.jpg',
    thumbnail: '/images/case-studies/arkive-hero.jpg',
    color: '#C9A962',
    featured: true,
    type: 'project',
    overview: `The Human Center Arkive is a documentary project dedicated to preserving human stories—the memories, experiences, and wisdom that exist only in the minds of those who lived them. Like Noah's Ark preserved life, the Arkive preserves legacy.`,
    challenge: `Every day, irreplaceable stories disappear. Grandparents pass without sharing their war stories. Parents forget the small moments that shaped their children. The challenge: create a platform that captures these ephemeral human experiences before they're lost forever.`,
    approach: `Started with family—learning to see my own mother not just as "Mom" but as Jennifer Kay Parker, a complete person with a full life I'd never thought to ask about. This personal journey became the template:

• Deep listening without agenda
• Questions that invite story, not facts
• Space for silence and emotion
• Preservation with dignity`,
    solution: `A YouTube documentary series creating space for intimate storytelling. Each episode captures the rarely-told stories of ordinary people—their struggles, triumphs, regrets, and wisdom. The Arkive becomes a permanent record of human experience.

48 interviews captured so far, with more in production.`,
    results: [
      'YouTube documentary channel launched',
      '48 human stories preserved',
      'Deepened personal family connections',
      'Framework for capturing generational wisdom'
    ],
    gallery: []
  },

  // ATLAS PROTOCOL - CONCEPT BRAND (Fortune 500 Quality)
  {
    id: '7',
    slug: 'atlas-protocol',
    title: 'Atlas Protocol',
    client: 'Concept Brand',
    category: 'Enterprise Brand Identity',
    year: '2024',
    tags: ['Brand Identity', 'Enterprise', 'AI/ML', 'Digital Product', 'Concept Work'],
    description: 'A complete brand identity for an enterprise AI infrastructure company. Demonstrating Fortune 500-level brand development capabilities.',
    heroImage: '/images/brands/portfolio-v4-images/atlas-protocol/website-hero.png',
    thumbnail: '/images/brands/portfolio-v4-images/atlas-protocol/logo-primary.png',
    color: '#0EA5E9',
    featured: true,
    type: 'project',
    overview: `Atlas Protocol represents a concept brand developed to demonstrate enterprise-level brand identity capabilities. The fictional company provides AI infrastructure and machine learning operations tools for Fortune 500 companies.

This project showcases the complete brand development process—from strategic positioning to visual identity to digital product design.`,
    challenge: `Enterprise AI companies often default to cold, technical aesthetics that fail to communicate trust and reliability. The challenge: create a brand that feels simultaneously cutting-edge and established, technical yet accessible, innovative while trustworthy.`,
    approach: `Applied Fortune 500 brand development methodology:

• Strategic Positioning: Defined market position, competitive landscape, and brand personality
• Visual Identity System: Logo system, color palette, typography, iconography
• Digital Product Design: Website, mobile app, social templates
• Application Guidelines: Ensured consistency across all touchpoints`,
    solution: `A cohesive brand identity that balances technical sophistication with approachable warmth. The visual system uses deep blues and teals suggesting depth and reliability, while geometric elements nod to the underlying data structures.

Deliverables include:
• Primary and alternate logo marks
• Complete color system with usage guidelines
• Mobile app interface design
• Website hero and landing pages
• Social media templates`,
    results: [
      'Complete enterprise brand identity system',
      'Mobile app UI/UX design',
      'Digital marketing collateral suite',
      'Brand guidelines documentation'
    ],
    gallery: [
      '/images/brands/portfolio-v4-images/atlas-protocol/logo-primary.png',
      '/images/brands/portfolio-v4-images/atlas-protocol/logo-alt.png',
      '/images/brands/portfolio-v4-images/atlas-protocol/color-palette.png',
      '/images/brands/portfolio-v4-images/atlas-protocol/website-hero.png',
      '/images/brands/portfolio-v4-images/atlas-protocol/mobile-app-screens.png',
      '/images/brands/portfolio-v4-images/atlas-protocol/social-banner.png'
    ]
  },

  // BLOOM COLLECTIVE - CONCEPT BRAND (Fortune 500 Quality)
  {
    id: '8',
    slug: 'bloom-collective',
    title: 'Bloom Collective',
    client: 'Concept Brand',
    category: 'Luxury Brand Identity',
    year: '2024',
    tags: ['Brand Identity', 'Luxury', 'Fashion', 'Packaging', 'Concept Work'],
    description: 'A premium lifestyle brand identity spanning fashion, beauty, and home. Demonstrating luxury brand development at scale.',
    heroImage: '/images/brands/portfolio-v4-images/bloom-collective/campaign-photo.png',
    thumbnail: '/images/brands/portfolio-v4-images/bloom-collective/logo-brandmark.png',
    color: '#D946EF',
    featured: true,
    type: 'project',
    overview: `Bloom Collective is a concept luxury lifestyle brand developed to showcase comprehensive brand identity work across multiple product categories—fashion, beauty, and home goods.

The project demonstrates the ability to create cohesive brand experiences that translate across diverse applications while maintaining premium positioning.`,
    challenge: `Luxury brands require exceptional attention to detail and consistency. Every touchpoint must reinforce premium positioning. The challenge: create a brand identity flexible enough for diverse product categories while maintaining unmistakable brand recognition.`,
    approach: `Luxury brand development process:

• Brand Architecture: Defined how the master brand relates to product categories
• Visual Language: Created a sophisticated aesthetic balancing minimalism with warmth
• Material Considerations: Designed with premium materials and finishes in mind
• Campaign Development: Shot editorial-style imagery that communicates brand values`,
    solution: `A refined brand identity built on natural textures, muted earth tones, and elegant typography. The visual system works equally well on product packaging, e-commerce, editorial spreads, and retail environments.

Deliverables include:
• Brandmark and wordmark system
• Premium packaging design
• E-commerce platform design
• Lookbook and campaign photography direction
• Social media content system`,
    results: [
      'Complete luxury brand identity',
      'Product packaging across categories',
      'E-commerce UX design',
      'Editorial campaign direction'
    ],
    gallery: [
      '/images/brands/portfolio-v4-images/bloom-collective/logo-brandmark.png',
      '/images/brands/portfolio-v4-images/bloom-collective/packaging-design.png',
      '/images/brands/portfolio-v4-images/bloom-collective/ecommerce-mockup.png',
      '/images/brands/portfolio-v4-images/bloom-collective/lookbook-1.png',
      '/images/brands/portfolio-v4-images/bloom-collective/lookbook-2.png',
      '/images/brands/portfolio-v4-images/bloom-collective/campaign-photo.png'
    ]
  },

  // MERIDIAN STUDIO - CONCEPT BRAND (Fortune 500 Quality)
  {
    id: '9',
    slug: 'meridian-studio',
    title: 'Meridian Studio',
    client: 'Concept Brand',
    category: 'Creative Agency Brand',
    year: '2024',
    tags: ['Brand Identity', 'Agency', 'Professional Services', 'B2B', 'Concept Work'],
    description: 'A sophisticated brand identity for a global creative consultancy. Demonstrating B2B brand development for professional services.',
    heroImage: '/images/brands/portfolio-v4-images/meridian-studio/website-mockup.png',
    thumbnail: '/images/brands/portfolio-v4-images/meridian-studio/logo-wordmark.png',
    color: '#1E293B',
    featured: true,
    type: 'project',
    overview: `Meridian Studio is a concept brand for a global creative consultancy serving Fortune 500 clients. The project demonstrates B2B brand development—where the brand must communicate credibility, expertise, and creative capability simultaneously.

Professional services branding requires a different approach than consumer brands—the audience is sophisticated, the stakes are high, and trust is paramount.`,
    challenge: `Creative agencies face a paradox: they must appear both highly creative AND reliably professional. Too creative risks seeming unreliable; too corporate risks appearing uninspired. The challenge: strike the perfect balance that attracts enterprise clients while showcasing creative excellence.`,
    approach: `B2B brand development methodology:

• Credibility Signals: Typography and color choices that communicate established expertise
• Creative Proof: Subtle design details that demonstrate capability without overwhelming
• Professional Touchpoints: Business cards, presentations, proposals designed for boardrooms
• Digital Presence: Website that functions as both portfolio and lead generation`,
    solution: `A refined, confident brand identity built on strong typography and restrained color use. The visual system feels established and trustworthy while subtle creative touches prove design capability.

Deliverables include:
• Wordmark and monogram system
• Premium business card design
• Presentation template system
• Website design
• Social media templates for LinkedIn focus`,
    results: [
      'Complete B2B brand identity',
      'Business collateral suite',
      'Presentation system',
      'Professional website design'
    ],
    gallery: [
      '/images/brands/portfolio-v4-images/meridian-studio/logo-wordmark.png',
      '/images/brands/portfolio-v4-images/meridian-studio/business-cards.png',
      '/images/brands/portfolio-v4-images/meridian-studio/website-mockup.png',
      '/images/brands/portfolio-v4-images/meridian-studio/presentation-template.png',
      '/images/brands/portfolio-v4-images/meridian-studio/social-template.png'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // REAL WORK - WEBSITES & APPS FROM WOKEGOD.WORLD
  // ═══════════════════════════════════════════════════════════════

  // EUANGELION - REAL PROJECT
  {
    id: '10',
    slug: 'euangelion',
    title: 'Euangelion',
    client: 'Personal Project',
    category: 'Spiritual Tech & Web Design',
    year: '2024',
    tags: ['Web Design', 'Spiritual', 'React', 'Daily Devotional', 'Full Stack'],
    description: 'A modern daily devotional platform blending ancient wisdom with contemporary digital experience.',
    heroImage: '/images/real-work/euangelion-hero.jpg',
    thumbnail: '/images/real-work/euangelion-hero.jpg',
    color: '#6366F1',
    featured: false,
    type: 'project',
    overview: `Euangelion reimagines the daily devotional for the digital age. The platform delivers contemplative spiritual content through a beautifully designed interface that respects the gravity of the material while making it accessible to modern seekers.`,
    challenge: `Spiritual content online often falls into two traps: either overly corporate megachurch aesthetics or amateur blog designs. The challenge: create a digital space that feels sacred without being stuffy, modern without being shallow.`,
    approach: `Design principles rooted in liturgical tradition:
• Typography that invites slow reading
• Breathing room and intentional white space
• Color palette inspired by stained glass and iconography
• Interactions that encourage presence, not distraction`,
    solution: `A React-based devotional platform featuring daily readings, contemplative imagery, and a reading experience designed for reflection rather than consumption.

Live at euangelion.wokegod.world`,
    results: [
      'Daily active users engaging with content',
      'Positive feedback on reading experience',
      'Template for future spiritual tech projects',
      'Foundation for expanded content library'
    ],
    gallery: []
  },

  // WAKE UP MAGAZINE - REAL PROJECT
  {
    id: '11',
    slug: 'wake-up-magazine',
    title: 'Wake Up',
    client: 'Personal Project',
    category: 'Digital Publishing & Design',
    year: '2024',
    tags: ['Web Design', 'Zine', 'Publishing', 'Spirituality', 'Editorial'],
    description: 'A digital zine for the spiritually restless—exploring faith, doubt, and everything in between.',
    heroImage: '/images/real-work/wakeup-hero.jpg',
    thumbnail: '/images/real-work/wakeup-hero.jpg',
    color: '#F97316',
    featured: false,
    type: 'project',
    overview: `"A Zine for the Spiritually Restless" — Wake Up is a digital publication exploring the messy middle ground of faith, doubt, deconstruction, and reconstruction.`,
    challenge: `Traditional religious publishing feels inaccessible to questioning seekers. The design needed to signal "this is safe space for doubt" while still treating spiritual matters with appropriate weight.`,
    approach: `Zine aesthetics meet editorial design:
• Bold typography with magazine-quality layouts
• Intentionally imperfect elements (torn edges, hand-drawn accents)
• Content that asks questions rather than provides pat answers`,
    solution: `A digital zine platform with curated articles, personal essays, and visual content that meets readers wherever they are on their spiritual journey.

Live at wakeup.wokegod.world`,
    results: [
      'Growing readership of questioning seekers',
      'Bridge between traditional faith and modern doubt',
      'Platform for guest writers and perspectives'
    ],
    gallery: []
  },

  // MELT ECOSYSTEM - REAL PROJECT
  {
    id: '12',
    slug: 'melt-ecosystem',
    title: 'MELT Digital Ecosystem',
    client: 'MELT Agency',
    category: 'Agency Web Development',
    year: '2018-2024',
    tags: ['Web Design', 'Agency', 'Multiple Sites', 'Brand Evolution', 'Full Stack'],
    description: 'A complete digital ecosystem for an Atlanta creative agency—from landing pages to internal tools to pitch decks.',
    heroImage: '/images/real-work/melt-landing-hero.jpg',
    thumbnail: '/images/real-work/melt-landing-hero.jpg',
    color: '#FF6B35',
    featured: false,
    type: 'project',
    overview: `Over six years at MELT, I built and evolved their entire digital presence—from the public-facing website through multiple iterations to internal tools and client-facing pitch platforms.`,
    challenge: `Agency websites are notoriously difficult: they need to showcase creative capability while still functioning as legitimate business tools. Each version needed to evolve with the agency's positioning and capabilities.`,
    approach: `Iterative development matching agency evolution:
• V1: Establishing brand presence
• V2: Capability showcase with case studies
• Capes: Internal capability assessment tool
• AI integration: Demonstrating forward-thinking positioning
• Pitch platforms: Client-specific presentation tools`,
    solution: `A family of interconnected sites serving different purposes:
• meltatl.com — Public agency site
• melt-v1, melt-v2 — Version archive
• melt-capesite — Capability assessment
• Pitch platforms — Client presentation tools

All available through wokegod.world/melt ecosystem`,
    results: [
      'Multiple site versions tracking agency evolution',
      'Internal tools adopted for client work',
      'Pitch platforms used for major client wins',
      'Complete agency digital infrastructure'
    ],
    gallery: []
  },

  // DEM GOOD VIBEZ - REAL PROJECT
  {
    id: '13',
    slug: 'dem-good-vibez',
    title: 'Dem Good Vibez',
    client: 'Personal Project',
    category: 'Lifestyle Brand & Web',
    year: '2024',
    tags: ['Web Design', 'Lifestyle', 'Community', 'Branding', 'Vibes'],
    description: 'A lifestyle brand and community platform celebrating positive energy and authentic living.',
    heroImage: '/images/real-work/demgoodvibez-hero.jpg',
    thumbnail: '/images/real-work/demgoodvibez-hero.jpg',
    color: '#10B981',
    featured: false,
    type: 'project',
    overview: `Dem Good Vibez is a lifestyle brand built around the simple premise: life is better when you intentionally cultivate positive energy.`,
    challenge: `"Good vibes" branding can easily slip into shallow toxic positivity. The challenge: create something genuinely uplifting without being dismissive of life's real difficulties.`,
    approach: `Authentic positivity through design:
• Warm, inviting color palette
• Playful but not juvenile typography
• Content that acknowledges struggle while celebrating joy`,
    solution: `A brand and web presence serving as home base for a community focused on intentional living and positive energy.

Live at demgoodvibez.wokegod.world`,
    results: [
      'Community platform established',
      'Brand identity and web presence live',
      'Foundation for lifestyle content'
    ],
    gallery: []
  },

  // DASH DASH - REAL PROJECT
  {
    id: '14',
    slug: 'dash-dash',
    title: 'Dash Dash',
    client: 'Personal Project',
    category: 'App/Tool Design',
    year: '2024',
    tags: ['App Design', 'Productivity', 'Tool', 'Web App'],
    description: 'A focused productivity tool designed for getting things done without the bloat.',
    heroImage: '/images/real-work/dashdash-hero.jpg',
    thumbnail: '/images/real-work/dashdash-hero.jpg',
    color: '#8B5CF6',
    featured: false,
    type: 'project',
    overview: `Dash Dash is a streamlined productivity tool born from frustration with overcomplicated task managers. Sometimes you just need to dash through your list.`,
    challenge: `Productivity apps tend toward feature creep. The challenge: stay focused on the core use case while still being useful enough to actually use.`,
    approach: `Ruthless simplification:
• Identify the core loop (add → do → done)
• Remove everything that doesn't serve that loop
• Design for speed over features`,
    solution: `A minimal, fast productivity tool that gets out of your way and lets you work.

Available at wokegod.world/dashdash/`,
    results: [
      'Personal productivity tool in daily use',
      'Proof of concept for focused app design',
      'Template for future tool projects'
    ],
    gallery: []
  },

  // GARAGESALE - REAL PROJECT
  {
    id: '15',
    slug: 'garagesale',
    title: 'GarageSale',
    client: 'Personal Project',
    category: 'E-commerce Design',
    year: '2024',
    tags: ['Web Design', 'E-commerce', 'Minimal', 'Marketplace'],
    description: 'A minimal e-commerce platform proving that selling online doesn\'t need to be complicated.',
    heroImage: '/images/real-work/garagesale-hero.jpg',
    thumbnail: '/images/real-work/garagesale-hero.jpg',
    color: '#78716C',
    featured: false,
    type: 'project',
    overview: `GarageSale strips e-commerce down to its essentials. No bloated platforms, no feature overwhelm—just a clean way to sell things online.`,
    challenge: `E-commerce platforms are either overly complex (Shopify learning curve) or too limited (basic listings). The challenge: find the sweet spot for simple, dignified online selling.`,
    approach: `Design like it's 2004, build like it's 2024:
• Focus on the product, not the platform
• Minimal UI, maximum clarity
• Fast loading, mobile-first`,
    solution: `A lightweight e-commerce template that prioritizes products over platform complexity.

Live at garagesale.wokegod.world`,
    results: [
      'Clean e-commerce template',
      'Fast-loading minimal design',
      'Proof of concept for simplified selling'
    ],
    gallery: []
  },

  // PITCHES - REAL PROJECT
  {
    id: '16',
    slug: 'pitches',
    title: 'Pitches',
    client: 'Personal Project',
    category: 'Presentation Platform',
    year: '2024',
    tags: ['Web Design', 'Presentations', 'Pitch Decks', 'Business'],
    description: 'A platform for creating and sharing compelling pitch presentations—"$1 × 1,000,000" thinking.',
    heroImage: '/images/real-work/pitches-hero.jpg',
    thumbnail: '/images/real-work/pitches-hero.jpg',
    color: '#059669',
    featured: false,
    type: 'project',
    overview: `Pitches is a presentation platform built around one philosophy: every great business starts with a compelling story. The "$1 × 1,000,000" framework.`,
    challenge: `Pitch decks are either boring corporate templates or overdesigned distractions. The challenge: create a platform that helps ideas shine without getting in the way.`,
    approach: `Story-first presentation design:
• Focus on narrative structure
• Clean, confident typography
• Slides that support speaking, not replace it`,
    solution: `A presentation platform for creating compelling pitch decks that get to the point.

Live at pitches.wokegod.world`,
    results: [
      'Pitch presentation platform live',
      'Used for actual client pitches',
      'Framework for story-driven presenting'
    ],
    gallery: []
  }
]

export const getFeaturedCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.featured)
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => caseStudies.find(cs => cs.slug === slug)
export const getProjectCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'project')
export const getGalleryCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'gallery')
