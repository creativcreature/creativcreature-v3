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
  // ═══════════════════════════════════════════════════════════════
  // REAL PAID WORK - MAJOR CLIENTS
  // ═══════════════════════════════════════════════════════════════

  // AFLAC X FINAL FOUR
  {
    id: '1',
    slug: 'aflac-final-four',
    title: 'Aflac x Final Four',
    client: 'Aflac / MELT Atlanta',
    category: 'Experiential Design & Brand Activation',
    year: 'April 2022',
    tags: ['Art Direction', 'Graphic Design', 'Brand Strategy', 'App Design', 'Environmental Graphics', 'Event Design'],
    description: 'The House of the Unexpected: A full experiential activation for March Madness Final Four 2022 in New Orleans.',
    heroImage: '/images/original/aflac_header.jpg',
    thumbnail: '/images/original/home_aflac.png',
    color: '#00A3E0',
    featured: true,
    type: 'project',
    overview: `A comprehensive brand activation for Aflac at the NCAA Final Four Fan Fest in New Orleans. We created "The House of the Unexpected" - an immersive walkthrough experience that educated consumers about supplemental insurance while delivering memorable engagement.`,
    challenge: `Consumers are unaware that their health insurance doesn't cover everything. We found an opportunity to educate them on how Aflac can help close that gap with those unexpected medical bills - before the pain hits their wallet. Anchoring in the TVC and knowing that majority of accidents happen in and around the house, we developed our experience to reflect how Aflac can make sure an unexpected incident doesn't have an unfortunate outcome on your bank account.`,
    approach: `The inspiration was pulled from New Orleans' local environment. Mardi Gras is a major cultural aspect of the city, and we drew inspiration from the 'House Floats' that became popular city-wide during the pandemic. New Orleans residents dressed their houses like the floats used during the Mardi Gras parade. Using this as a structural basis, we incorporated the idea of a fun house to create a moment of "unexpectedness."

We also developed an AR scavenger hunt where consumers found various possible hazards throughout the home environment, earning points and educational copy about how Aflac covers said hazard.`,
    solution: `The experience utilized commercial spots as the foundation for learning about the brand. We created the Aflac House of the Unexpected with two things in mind: making a structure that was eye-catching to draw consumers in, and creating a walkthrough experience that made fans feel as if they were walking through an actual Aflac commercial while being educated about the brand.

Deliverables included brand ambassador uniforms, environmental graphics, AR app development, event design, and video/photography documentation.`,
    results: [
      'Thousands of Final Four attendees engaged',
      'AR experience drove educational engagement',
      'Brand awareness significantly increased',
      'Successful paid activation for MELT Atlanta'
    ],
    gallery: [
      '/images/original/aflac_header.jpg',
      '/images/original/aflac_logo.jpg',
      '/images/original/aflac_influences1.jpg',
      '/images/original/aflac_process1.jpg',
      '/images/original/aflac_process2.jpg',
      '/images/original/aflac_footprint.jpg',
      '/images/original/aflac_uniforms.jpg',
      '/images/original/aflac_ar1.jpg',
      '/images/original/aflac_event.jpg'
    ]
  },

  // GHIRARDELLI
  {
    id: '2',
    slug: 'ghirardelli',
    title: 'Ghirardelli Summer S\'mores Tour',
    client: 'Ghirardelli / MELT Atlanta',
    category: 'Brand Activation & Event Design',
    year: 'Summer 2022',
    tags: ['Logo Design', 'Apparel Design', 'Branding', 'Photography', 'Video'],
    description: 'A traveling s\'mores experience touring destination spots across the country.',
    heroImage: '/images/original/home_ghirardelli.png',
    thumbnail: '/images/original/home_ghirardelli.png',
    color: '#8B4513',
    featured: true,
    type: 'project',
    overview: `The Ghirardelli S'more Summer 2022 Tour was a brand awareness event activation campaign for MELT Atlanta. The ask was to create an event activation that could tour to various "destination" spots throughout the country to raise consumer awareness about how Ghirardelli Makes S'mores a Bite Better.`,
    challenge: `Create a memorable, shareable experience that highlights Ghirardelli's unique caramel-centered chocolate product while touring multiple locations with consistent brand impact.`,
    approach: `We created a tour utilizing a partnership with Airstream and combined elements of roadtripping, camping, and of course, s'mores. We decided to utilize solo stoves to emulate a campfire and allow consumers to make their own s'mores on the spot!`,
    solution: `I created Brand Ambassador uniforms with a California rustic flair, as well as patches and stickers as giveaways. I also created the Summer Tour Logo used across social media and the Ghirardelli website. In addition to design work, I did photography and videography to capture consumers enjoying the experience and promote the tour.`,
    results: [
      'Multi-city tour successfully executed',
      'Summer Tour branding adopted company-wide',
      'Photo/video content used in marketing',
      'Increased brand awareness at destination markets'
    ],
    gallery: []
  },

  // PUBLIX
  {
    id: '3',
    slug: 'publix',
    title: 'Publix Partnership Pitch',
    client: 'Publix / MELT Atlanta',
    category: 'Pitch & Presentation Design',
    year: '2020',
    tags: ['Pitch Deck', 'Presentation Design', 'Brand Strategy', 'Partnership'],
    description: 'A partnership pitch presentation to the largest employee-owned supermarket chain in the United States.',
    heroImage: '/images/original/home_publix.png',
    thumbnail: '/images/original/home_publix.png',
    color: '#3D8B37',
    featured: true,
    type: 'project',
    overview: `A partnership pitch presentation developed for Publix, the largest and fastest-growing employee-owned supermarket chain in the United States.`,
    challenge: `Develop a compelling partnership pitch that communicates value proposition to a major national retailer with established brand guidelines and high expectations.`,
    approach: `Strategic positioning focused on mutual brand alignment and market opportunity, supported by clean, professional presentation design that respected Publix's established visual identity.`,
    solution: `A comprehensive pitch deck that told a compelling story about partnership potential while maintaining the professional standards expected by a Fortune 500 company.`,
    results: [
      'Successfully presented to Publix stakeholders',
      'Professional presentation framework established',
      'Template created for future major pitches'
    ],
    gallery: []
  },

  // CORKY'S MEMPHIS
  {
    id: '4',
    slug: 'corkys-memphis',
    title: 'Corky\'s Memphis',
    client: 'Corky\'s BBQ / MELT Atlanta',
    category: 'Brand Refresh & Menu Design',
    year: 'Nov 2018 – Mar 2019',
    tags: ['Graphic Design', 'Brand Strategy', 'Logo Development', 'Menu Design', 'Packaging', 'Environmental Graphics'],
    description: 'Modernizing a world-famous Memphis BBQ brand while honoring its authentic roots.',
    heroImage: '/images/original/home_corkys.png',
    thumbnail: '/images/original/home_corkys.png',
    color: '#8B0000',
    featured: true,
    type: 'project',
    overview: `Corky's, a world famous B-B-Q joint in Memphis, TN needed to modernize its brand. This meant refreshing the logo, revising the menus, and putting together a full marketing campaign to reintroduce Corky's to a new generation, while still honoring the customers that helped build the company.`,
    challenge: `The restaurant's image was very 80's kitsch. The logo was not extremely legible, and overall the brand was very bland. We needed to modernize while maintaining the authentic smokehouse feel that made Corky's famous.`,
    approach: `Corky's is a legitimate smokehouse BBQ joint with authentic Memphis style, and our approach was to highlight this authenticity by drawing reference from smokehouse staples such as parchment papers and woods. We used texture as a driving, grounding, and uniting design element, while emphasizing boldness and hierarchy for menus and branded visuals.`,
    solution: `The logo was updated with improved legibility. I drove a large portion of the visual aesthetic - rustic, bold typography to drive home the earthy, smokehouse feel. Red was used as an impact color. Wood and parchment textures paid homage to the sit-down restaurant experience.

Deliverables included refreshed logo, menu designs, gift cards, business cards, and environmental graphics.`,
    results: [
      'Complete brand refresh executed',
      'Menu system redesigned',
      'Environmental graphics updated across locations',
      'Brand positioned for new generation of customers'
    ],
    gallery: [
      '/images/original/corky__header.png',
      '/images/original/corky__barmenu.jpg',
      '/images/original/corky__bizcard.jpg',
      '/images/original/corky__giftcard.jpg'
    ]
  },

  // CAPTAIN PLANET FOUNDATION
  {
    id: '5',
    slug: 'captain-planet-foundation',
    title: 'Captain Planet Foundation',
    client: 'Captain Planet Foundation',
    category: 'Nonprofit Brand Identity',
    year: '2013-2017',
    tags: ['Creative Direction', 'Brand Identity', 'Environmental', 'Nonprofit', 'Web Design'],
    description: 'Shaping the visual identity of an iconic environmental foundation.',
    heroImage: '/images/original/cpf_homepage_fullscreen.png',
    thumbnail: '/images/original/home_cpf.png',
    color: '#22C55E',
    featured: true,
    type: 'project',
    overview: `I had the privilege to work on the core identity for this non-profit whose namesake is the iconic 1990's cartoon. The Captain Planet Foundation carries forward the legacy, funding environmental education programs in schools across America.`,
    challenge: `The foundation needed to honor its nostalgic roots while appealing to modern educators, donors, and a new generation of young environmentalists. The brand had to feel both established and forward-looking.`,
    approach: `Balanced reverence for the Captain Planet legacy with contemporary design sensibilities. Created materials that worked across wildly different contexts—from school cafeterias to corporate boardrooms to environmental conferences.`,
    solution: `Developed a cohesive visual system that bridged generations. The work appeared across school materials, donor communications, event collateral, and digital platforms.

Deliverables included brand guidelines, website design, school program materials, and donor communication templates.`,
    results: [
      'Supported foundation growth initiatives',
      'Materials reached thousands of schools',
      'Brand system still in use today',
      'Website redesign improved engagement'
    ],
    gallery: [
      '/images/original/cpf_homepage_fullscreen.png',
      '/images/original/cpf_logo_full.png',
      '/images/original/cpf_web1.png'
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // PERSONAL BRANDS & SIDE PROJECTS
  // ═══════════════════════════════════════════════════════════════

  // DEM GOOD VIBEZ
  {
    id: '6',
    slug: 'dem-good-vibez',
    title: 'Dem Good Vibez',
    client: 'Personal Brand (Owner)',
    category: 'Lifestyle Brand & E-commerce',
    year: '2019 – Present',
    tags: ['Brand Strategy', 'Logo Design', 'Apparel Design', 'Social Media', 'Photography', 'Illustration'],
    description: 'A lifestyle brand spreading positivity and joy through fashionable, positive messaging.',
    heroImage: '/images/original/home_dgv.png',
    thumbnail: '/images/original/home_dgv.png',
    color: '#FFD700',
    featured: true,
    type: 'project',
    overview: `Dem Good Vibez started with a sticky note drawn to help a friend through a tough time. DGV is on a mission to make the world more loving & happy. We offer products that encourage community and wellbeing for individuals looking for fashionable, positive messaging in apparel and homegoods.`,
    challenge: `Launch a lifestyle brand during COVID-19 that spreads positivity while the world is on fire. Balance wit, humor, and positive energy while keeping overhead costs low.`,
    approach: `The design work encapsulates wit, humor, and positive energy. This expressed itself in pastel colors, fun illustrations, and quirky design elements like the smiley face with stars in its eyes. Yellow is the main color because it's bright, happy, alive—signifying the light in the darkness.`,
    solution: `The brand has evolved, morphing into something that can be printed at low cost while maintaining design integrity. The outcome is a work in progress that will hopefully remain unfinished—always growing, always spreading good vibes.`,
    results: [
      'Brand launched and operating',
      'Product line expanded',
      'Community of supporters built',
      'Positive impact during difficult times'
    ],
    gallery: []
  },

  // ATLANTA MOBILE MARKET
  {
    id: '7',
    slug: 'atlanta-mobile-market',
    title: 'Atlanta Mobile Market',
    client: 'Atlanta Mobile Market (Nonprofit)',
    category: 'Nonprofit Brand Identity',
    year: '2018',
    tags: ['Brand Identity', 'Logo Design', 'Nonprofit', 'Food Access', 'Community'],
    description: 'Brand identity for a nonprofit providing food access to communities in need.',
    heroImage: '/images/original/home_amm.png',
    thumbnail: '/images/original/home_amm.png',
    color: '#4CAF50',
    featured: false,
    type: 'project',
    overview: `Atlanta Mobile Market is a non-profit dedicated to providing food access to communities in need across Atlanta.`,
    challenge: `Create a brand identity that communicates care, accessibility, and community while being versatile enough for various applications from trucks to print materials.`,
    approach: `Focus on warmth, accessibility, and the connection between fresh food and community health. Design system needed to work on mobile units as well as traditional print.`,
    solution: `Comprehensive brand identity including logo, business cards, letterhead, and vehicle graphics. Clean, approachable design that communicates the organization's mission.`,
    results: [
      'Brand identity system completed',
      'Materials deployed across organization',
      'Consistent visual presence established'
    ],
    gallery: [
      '/images/original/amm_logo.jpg',
      '/images/original/amm_logo_long.jpg',
      '/images/original/amm_stylescape.jpg',
      '/images/original/amm_bizcards.jpg',
      '/images/original/amm_bizcardsletterhead.jpg'
    ]
  },

  // CULTURE CHEST
  {
    id: '8',
    slug: 'culture-chest',
    title: 'Culture Chest',
    client: 'Culture Chest',
    category: 'Apparel Brand Identity',
    year: '2020',
    tags: ['Brand Identity', 'Apparel Design', 'Cultural', 'Messaging'],
    description: 'An apparel brand centering underrepresented groups through powerful messaging.',
    heroImage: '/images/original/home_cc.png',
    thumbnail: '/images/original/home_cc.png',
    color: '#1A1A1A',
    featured: false,
    type: 'project',
    overview: `Culture Chest is an apparel brand looking to center underrepresented groups through powerful messaging and design.`,
    challenge: `Create brand identity and apparel designs that authentically represent underrepresented communities without appropriation or tokenism.`,
    approach: `Deep research into cultural symbols and messaging, working closely with community members to ensure authentic representation.`,
    solution: `Brand identity and apparel line featuring powerful, culturally-informed designs that celebrate and uplift underrepresented communities.`,
    results: [
      'Brand identity established',
      'Initial apparel collection launched',
      'Positive community reception'
    ],
    gallery: [
      '/images/original/CC__header.jpg',
      '/images/original/CC__logo.jpg',
      '/images/original/CC__brandguide.jpg',
      '/images/original/CC__diaspora.jpg',
      '/images/original/CC__family.jpg',
      '/images/original/CC__free.jpg',
      '/images/original/CC__og.jpg',
      '/images/original/CC__sapiosexual.jpg',
      '/images/original/CC__tribalmark1.jpg',
      '/images/original/CC__tribalmark2.jpg'
    ]
  },

  // F&B ATLANTA
  {
    id: '9',
    slug: 'fandb-atlanta',
    title: 'F&B Atlanta',
    client: 'F&B Atlanta',
    category: 'Restaurant Brand Identity',
    year: '2019',
    tags: ['Brand Identity', 'Restaurant', 'French Bistro', 'Menu Design'],
    description: 'Brand identity for a French Bistro in the heart of Buckhead, Atlanta.',
    heroImage: '/images/original/home_fb.png',
    thumbnail: '/images/original/home_fb.png',
    color: '#2C3E50',
    featured: false,
    type: 'project',
    overview: `A French Bistro in the heart of Buckhead, Atlanta. C'est la vie et bon appétit.`,
    challenge: `Capture authentic French bistro ambiance while appealing to Atlanta's sophisticated Buckhead clientele.`,
    approach: `Classic French design sensibilities with modern Southern hospitality warmth.`,
    solution: `Brand identity that evokes Parisian charm while feeling at home in Atlanta's upscale dining scene.`,
    results: [
      'Brand identity completed',
      'Menu system designed',
      'Restaurant opened successfully'
    ],
    gallery: []
  },

  // VALSER
  {
    id: '10',
    slug: 'valser',
    title: 'Valser',
    client: 'Valser',
    category: 'Beverage Brand Identity',
    year: '2018',
    tags: ['Brand Identity', 'Packaging', 'Beverage', 'Premium'],
    description: 'Swedish spring water bringing the taste of the Swiss alps to an American audience.',
    heroImage: '/images/original/home_valser.png',
    thumbnail: '/images/original/home_valser.png',
    color: '#87CEEB',
    featured: false,
    type: 'project',
    overview: `Swedish spring water bringing the taste of the Swiss alps to an American audience.`,
    challenge: `Position a European premium water brand for the American market while maintaining its heritage and quality perception.`,
    approach: `Clean, premium design that communicates purity and Alpine freshness while appealing to American consumers.`,
    solution: `Brand positioning and visual identity that bridges European heritage with American market expectations.`,
    results: [
      'Brand positioning established',
      'Visual identity developed',
      'Market entry strategy defined'
    ],
    gallery: []
  },

  // HERB & LOU'S
  {
    id: '11',
    slug: 'herb-and-lous',
    title: 'Herb & Lou\'s',
    client: 'Herb & Lou\'s',
    category: 'Beverage Brand & Packaging',
    year: '2019',
    tags: ['Brand Identity', 'Packaging', 'Cocktails', 'Product Design'],
    description: 'Infused ice cubes that make cocktails a breeze for those lacking bartending skills.',
    heroImage: '/images/original/home_herbandlou.png',
    thumbnail: '/images/original/home_herbandlou.png',
    color: '#D4AF37',
    featured: false,
    type: 'project',
    overview: `Infused ice cubes that make cocktails a breeze for those lacking bartending skills.`,
    challenge: `Create approachable branding for an innovative cocktail product that appeals to both novice home bartenders and cocktail enthusiasts.`,
    approach: `Fun, accessible design that communicates simplicity and quality without being intimidating.`,
    solution: `Brand identity and packaging that makes premium cocktails feel achievable for everyone.`,
    results: [
      'Brand identity completed',
      'Packaging design delivered',
      'Product launched to market'
    ],
    gallery: []
  },

  // TRASH MASTERPIECES
  {
    id: '12',
    slug: 'trash-masterpieces',
    title: 'Trash Masterpieces',
    client: 'Personal Project',
    category: 'Art Project & Brand',
    year: '2020',
    tags: ['Art', 'Portraits', 'Experimental', 'Personal'],
    description: '$5 Portraits, for 5 minutes worth of time. Pay per minute.',
    heroImage: '/images/original/home_tm.png',
    thumbnail: '/images/original/home_tm.png',
    color: '#FF69B4',
    featured: false,
    type: 'project',
    overview: `$5 Portraits, for 5 minutes worth of time. Pay per minute. An experimental art project exploring value, time, and portraiture.`,
    challenge: `Create an art project that questions traditional notions of artistic value while remaining accessible and engaging.`,
    approach: `Simple pricing model ($1/minute) creates transparency and accessibility while the "trash" framing sets appropriate expectations and adds humor.`,
    solution: `A unique portrait service that democratizes commissioned art while maintaining creative integrity.`,
    results: [
      'Numerous portraits completed',
      'Concept proved viable',
      'Positive reception from participants'
    ],
    gallery: []
  },

  // ═══════════════════════════════════════════════════════════════
  // STUDENT & EARLY CAREER WORK
  // ═══════════════════════════════════════════════════════════════

  // KILLER CONVENIENCE
  {
    id: '13',
    slug: 'killer-convenience',
    title: 'Killer Convenience',
    client: 'SCAD Senior Project',
    category: 'Social Impact Design',
    year: '2014',
    tags: ['Social Impact', 'Food Deserts', 'Education', 'Campaign'],
    description: 'A passion project addressing the growing epidemic of food deserts in the United States.',
    heroImage: '/images/original/home_killerconvenience.png',
    thumbnail: '/images/original/home_killerconvenience.png',
    color: '#DC143C',
    featured: false,
    type: 'project',
    overview: `Killer Convenience is a passion project I created during my senior year at the Savannah College of Art and Design concerning the growing epidemic of food deserts in the United States.`,
    challenge: `Raise awareness about food deserts in an engaging way that motivates action and education.`,
    approach: `Use striking visuals and clear messaging to communicate the severity of the food desert problem.`,
    solution: `An awareness campaign that educates the public about food deserts and their impact on community health.`,
    results: [
      'Senior thesis completed',
      'Campaign materials developed',
      'Foundation for future food access work'
    ],
    gallery: []
  },

  // FOX IN A BOX
  {
    id: '14',
    slug: 'fox-in-a-box',
    title: 'Fox in a Box',
    client: 'Fox Theatre / SCAD',
    category: 'Educational Outreach Design',
    year: '2014',
    tags: ['Education', 'Youth Outreach', 'Collaboration', 'Theatre'],
    description: 'Educational outreach program engaging Atlanta youth through the Fox Theatre.',
    heroImage: '/images/original/home_fox.png',
    thumbnail: '/images/original/home_fox.png',
    color: '#B8860B',
    featured: false,
    type: 'project',
    overview: `In 2014, I was given the opportunity to participate in a collaborative class at SCAD, working with the Fox Theater to create an educational outreach program to engage youth throughout Atlanta.`,
    challenge: `Design an educational program that makes theatre accessible and exciting for young people from diverse backgrounds.`,
    approach: `Collaborate with the Fox Theatre and fellow students to develop engaging, age-appropriate content.`,
    solution: `An educational outreach program that brings the magic of theatre to Atlanta's youth.`,
    results: [
      'Program developed and launched',
      'Youth engagement achieved',
      'Successful collaboration with Fox Theatre'
    ],
    gallery: []
  },

  // HOMEGROWN GARDEN
  {
    id: '15',
    slug: 'homegrown-garden',
    title: 'Homegrown Garden',
    client: 'SCAD Student Project',
    category: 'Social Impact Design',
    year: '2013',
    tags: ['Social Impact', 'Food Deserts', 'Education', 'Gardening'],
    description: 'Raising awareness and educating the public about growing food at home.',
    heroImage: '/images/original/home_homegrown.png',
    thumbnail: '/images/original/home_homegrown.png',
    color: '#228B22',
    featured: false,
    type: 'project',
    overview: `Homegrown is a student project created to address Food Deserts in the United States by raising awareness and educating the public about growing food at home.`,
    challenge: `Make home gardening feel accessible and relevant to people living in food deserts.`,
    approach: `Educational approach focusing on practical, achievable steps for growing food at home.`,
    solution: `Educational materials that empower individuals to grow their own food regardless of their circumstances.`,
    results: [
      'Educational materials created',
      'Awareness raised about food deserts',
      'Foundation for continued food access advocacy'
    ],
    gallery: []
  },

  // EBONY MARCHELLE
  {
    id: '16',
    slug: 'ebony-marchelle',
    title: 'Ebony Marchelle',
    client: 'Ebony Marchelle',
    category: 'Personal Brand Identity',
    year: '2019',
    tags: ['Personal Branding', 'Luxury', 'Fashion Styling', 'Women'],
    description: 'Brand identity for a luxury stylist helping women create purpose-driven personal brands.',
    heroImage: '/images/original/home_ebony.png',
    thumbnail: '/images/original/home_ebony.png',
    color: '#9370DB',
    featured: false,
    type: 'project',
    overview: `Ebony Marchelle is a women's luxury stylist focusing on helping women create and maintain a purpose-driven image and personal brand that will aid in the achievement of their personal and professional goals.`,
    challenge: `Create a brand identity that communicates luxury, empowerment, and professionalism for a personal styling business.`,
    approach: `Elegant, sophisticated design that appeals to professional women seeking to elevate their personal brand.`,
    solution: `A refined brand identity that positions Ebony as a premium personal styling service.`,
    results: [
      'Brand identity completed',
      'Marketing materials designed',
      'Business launched successfully'
    ],
    gallery: []
  },

  // KAPRIUS
  {
    id: '17',
    slug: 'kaprius',
    title: 'Kaprius',
    client: 'Kaprius',
    category: 'Artisan Brand & Packaging',
    year: '2018',
    tags: ['Brand Identity', 'Packaging', 'Artisan', 'Honey'],
    description: 'A honey brand representing an affinity for craftsmanship and artisan goods.',
    heroImage: '/images/original/home_kaprius.png',
    thumbnail: '/images/original/home_kaprius.png',
    color: '#DAA520',
    featured: false,
    type: 'project',
    overview: `Kaprius is a honey-based brand dreamt up by two lovers. The product represents an affinity for craftsmanship and artisan goods.`,
    challenge: `Create packaging and brand identity that communicates artisan quality and romantic origin story.`,
    approach: `Warm, handcrafted aesthetic that tells the story of two people united by their love of quality.`,
    solution: `Brand identity and packaging that feels personal, premium, and artisanal.`,
    results: [
      'Brand identity completed',
      'Packaging designed',
      'Product launched'
    ],
    gallery: []
  },

  // ═══════════════════════════════════════════════════════════════
  // AI ART COLLECTIONS
  // ═══════════════════════════════════════════════════════════════

  // AFROFUTURIST VISIONS
  {
    id: '18',
    slug: 'afrofuturist-visions',
    title: 'Afrofuturist Visions',
    client: 'Personal Work',
    category: 'AI Art Direction',
    year: '2023-2024',
    tags: ['AI Art', 'Afrofuturism', 'Cultural Identity', 'Midjourney', 'Creative Direction'],
    description: 'An exploration of Black identity and future possibilities through AI-human creative collaboration.',
    heroImage: '/images/brands/portfolio-v4-images/afrofuturism/02-retro-space-warrior.png',
    thumbnail: '/images/brands/portfolio-v4-images/afrofuturism/01-cyberpunk-silhouette.png',
    color: '#8B5CF6',
    featured: true,
    type: 'gallery',
    overview: `This series uses AI as a creative collaborator to visualize Afrofuturist themes—imagining futures where Black culture, technology, and spirituality interweave.`,
    challenge: `AI image generators weren't trained with representation in mind. The challenge: guide AI toward authentic representation.`,
    approach: `Developed a methodology for culturally-informed AI art direction including research, reference curation, iterative prompting, and human curation.`,
    solution: `A cohesive body of work demonstrating AI creative direction. The human judgment about what represents, resonates, and transcends is the actual art.`,
    results: [
      '500+ pieces in the collection',
      'Featured on Behance',
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

  // SACRED GEOMETRIES
  {
    id: '19',
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
    featured: false,
    type: 'gallery',
    overview: `An investigation of sacred geometric patterns through AI generation—exploring how ancient mathematical forms can be reimagined through contemporary tools.`,
    challenge: `Sacred geometry carries deep meaning across cultures. The challenge: create work that respects these traditions while pushing into new visual territory.`,
    approach: `Research-driven generation studying geometric patterns across cultures, identifying mathematical principles, and applying human curation.`,
    solution: `A collection featuring intricate patterns in jewel-toned palettes, inviting meditation rather than just visual consumption.`,
    results: [
      '300+ pieces in the collection',
      'Used as meditation visuals',
      'Commissioned for album artwork',
      'Methodology informs commercial work'
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

  // DIGITAL PORTRAITS
  {
    id: '20',
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
    featured: false,
    type: 'gallery',
    overview: `"Digital Ancestors" is a meditation on heritage, memory, and the photographs that were never taken. Using AI to create portraits of imagined ancestors.`,
    challenge: `Many Black families lack photographic records of their ancestors. The challenge: fill this void meaningfully—not replacing history, but creating visual poetry.`,
    approach: `Each portrait begins with a story: Who was this person? What was their life like? What did they carry forward?`,
    solution: `Portraits with dignified mystery—recovered artifacts from a parallel timeline. Warm sepia tones giving way to unexpected colors.`,
    results: [
      '150+ portraits in the series',
      'Exhibition interest from institutions',
      'Strong emotional resonance',
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

  // ═══════════════════════════════════════════════════════════════
  // CONCEPT BRANDS - FORTUNE 500 QUALITY DEMONSTRATION
  // ═══════════════════════════════════════════════════════════════

  // ATLAS PROTOCOL
  {
    id: '21',
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
    featured: false,
    type: 'project',
    overview: `Atlas Protocol represents a concept brand developed to demonstrate enterprise-level brand identity capabilities. The fictional company provides AI infrastructure and machine learning operations tools for Fortune 500 companies.`,
    challenge: `Enterprise AI companies often default to cold, technical aesthetics. The challenge: create a brand that feels cutting-edge and established, technical yet accessible.`,
    approach: `Applied Fortune 500 brand development methodology: Strategic Positioning, Visual Identity System, Digital Product Design, Application Guidelines.`,
    solution: `A cohesive brand identity balancing technical sophistication with approachable warmth. Deep blues and teals suggest depth and reliability.`,
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

  // BLOOM COLLECTIVE
  {
    id: '22',
    slug: 'bloom-collective',
    title: 'Bloom Collective',
    client: 'Concept Brand',
    category: 'Luxury Brand Identity',
    year: '2024',
    tags: ['Brand Identity', 'Luxury', 'Fashion', 'Packaging', 'Concept Work'],
    description: 'A premium lifestyle brand identity spanning fashion, beauty, and home.',
    heroImage: '/images/brands/portfolio-v4-images/bloom-collective/campaign-photo.png',
    thumbnail: '/images/brands/portfolio-v4-images/bloom-collective/logo-brandmark.png',
    color: '#D946EF',
    featured: false,
    type: 'project',
    overview: `Bloom Collective is a concept luxury lifestyle brand showcasing comprehensive brand identity work across fashion, beauty, and home goods.`,
    challenge: `Luxury brands require exceptional attention to detail. Every touchpoint must reinforce premium positioning across diverse product categories.`,
    approach: `Brand Architecture, Visual Language balancing minimalism with warmth, Material Considerations for premium finishes, Campaign Development.`,
    solution: `A refined brand identity built on natural textures, muted earth tones, and elegant typography.`,
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

  // MERIDIAN STUDIO
  {
    id: '23',
    slug: 'meridian-studio',
    title: 'Meridian Studio',
    client: 'Concept Brand',
    category: 'Creative Agency Brand',
    year: '2024',
    tags: ['Brand Identity', 'Agency', 'Professional Services', 'B2B', 'Concept Work'],
    description: 'A sophisticated brand identity for a global creative consultancy.',
    heroImage: '/images/brands/portfolio-v4-images/meridian-studio/website-mockup.png',
    thumbnail: '/images/brands/portfolio-v4-images/meridian-studio/logo-wordmark.png',
    color: '#1E293B',
    featured: false,
    type: 'project',
    overview: `Meridian Studio is a concept brand for a global creative consultancy serving Fortune 500 clients. B2B brand development where credibility, expertise, and creative capability must communicate simultaneously.`,
    challenge: `Creative agencies must appear both highly creative AND reliably professional. Strike the perfect balance for enterprise clients.`,
    approach: `B2B methodology: Credibility Signals, Creative Proof, Professional Touchpoints, Digital Presence.`,
    solution: `A refined, confident brand identity built on strong typography and restrained color use.`,
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
  // WOKEGOD.WORLD PROJECTS - WEBSITES & APPS
  // ═══════════════════════════════════════════════════════════════

  // EUANGELION
  {
    id: '24',
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
    overview: `Euangelion reimagines the daily devotional for the digital age. The platform delivers contemplative spiritual content through a beautifully designed interface.`,
    challenge: `Spiritual content online often falls into corporate megachurch aesthetics or amateur blog designs. Create a digital space that feels sacred without being stuffy.`,
    approach: `Design principles rooted in liturgical tradition: typography that invites slow reading, intentional white space, color palette inspired by stained glass.`,
    solution: `A React-based devotional platform featuring daily readings and contemplative imagery. Live at euangelion.wokegod.world`,
    results: ['Daily active users', 'Positive feedback on reading experience', 'Template for future spiritual tech'],
    gallery: []
  },

  // WAKE UP MAGAZINE
  {
    id: '25',
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
    overview: `"A Zine for the Spiritually Restless" — Wake Up explores the messy middle ground of faith, doubt, deconstruction, and reconstruction.`,
    challenge: `Traditional religious publishing feels inaccessible to questioning seekers. Signal "safe space for doubt" while treating spiritual matters with weight.`,
    approach: `Zine aesthetics meet editorial design: bold typography, intentionally imperfect elements, content that asks questions.`,
    solution: `A digital zine platform with curated articles and visual content. Live at wakeup.wokegod.world`,
    results: ['Growing readership', 'Bridge between traditional faith and modern doubt', 'Platform for guest writers'],
    gallery: []
  },

  // THE ARKIVE
  {
    id: '26',
    slug: 'the-arkive',
    title: 'The Human Center Arkive',
    client: 'Personal Project',
    category: 'Documentary & Brand',
    year: '2024',
    tags: ['Documentary', 'YouTube', 'Storytelling', 'Memory Preservation', 'Brand'],
    description: 'A living archive of human stories—preserving memories that would otherwise be lost to time.',
    heroImage: '/images/real-work/arkive-hero.jpg',
    thumbnail: '/images/real-work/arkive-hero.jpg',
    color: '#C9A962',
    featured: false,
    type: 'project',
    overview: `The Arkive is a documentary project preserving human stories—memories, experiences, and wisdom that exist only in the minds of those who lived them.`,
    challenge: `Every day, irreplaceable stories disappear. Create a platform that captures these ephemeral human experiences before they're lost forever.`,
    approach: `Started with family—learning to see my own mother as a complete person with a full life I'd never thought to ask about.`,
    solution: `A YouTube documentary series creating space for intimate storytelling. 48 interviews captured. Live at arkive.wokegod.world`,
    results: ['YouTube channel launched', '48 human stories preserved', 'Framework for capturing generational wisdom'],
    gallery: []
  },

  // MELT DIGITAL ECOSYSTEM
  {
    id: '27',
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
    overview: `Over six years at MELT, I built and evolved their entire digital presence—from public-facing website through multiple iterations to internal tools.`,
    challenge: `Agency websites need to showcase creative capability while functioning as business tools. Each version evolved with the agency's positioning.`,
    approach: `Iterative development: V1 establishing presence, V2 capability showcase, Capes internal tool, AI integration, pitch platforms.`,
    solution: `A family of interconnected sites: meltatl.com, melt-v1, melt-v2, melt-capesite, pitch platforms. All at wokegod.world`,
    results: ['Multiple site versions', 'Internal tools adopted', 'Pitch platforms for client wins'],
    gallery: [
      '/images/real-work/melt-landing-hero.jpg',
      '/images/real-work/melt-v1-hero.jpg',
      '/images/real-work/melt-v2-hero.jpg',
      '/images/real-work/melt-capes-hero.jpg',
      '/images/real-work/melt-pitch-hero.jpg'
    ]
  },

  // DASH DASH
  {
    id: '28',
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
    overview: `Dash Dash is a streamlined productivity tool born from frustration with overcomplicated task managers.`,
    challenge: `Productivity apps tend toward feature creep. Stay focused on the core use case.`,
    approach: `Ruthless simplification: identify the core loop (add → do → done), remove everything else.`,
    solution: `A minimal, fast productivity tool. Available at wokegod.world/dashdash/`,
    results: ['Personal productivity tool in daily use', 'Proof of concept for focused design'],
    gallery: []
  },

  // PITCHES
  {
    id: '29',
    slug: 'pitches',
    title: 'Pitches',
    client: 'Personal Project',
    category: 'Presentation Platform',
    year: '2024',
    tags: ['Web Design', 'Presentations', 'Pitch Decks', 'Business'],
    description: 'A platform for creating and sharing compelling pitch presentations.',
    heroImage: '/images/real-work/pitches-hero.jpg',
    thumbnail: '/images/real-work/pitches-hero.jpg',
    color: '#059669',
    featured: false,
    type: 'project',
    overview: `Pitches is a presentation platform built around one philosophy: every great business starts with a compelling story.`,
    challenge: `Pitch decks are either boring corporate templates or overdesigned distractions.`,
    approach: `Story-first presentation design: focus on narrative structure, clean typography.`,
    solution: `A presentation platform for compelling pitch decks. Live at pitches.wokegod.world`,
    results: ['Platform live', 'Used for actual client pitches', 'Framework for story-driven presenting'],
    gallery: []
  },

  // GARAGESALE
  {
    id: '30',
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
    overview: `GarageSale strips e-commerce down to its essentials. No bloated platforms—just a clean way to sell things online.`,
    challenge: `E-commerce platforms are either overly complex or too limited. Find the sweet spot.`,
    approach: `Design like it's 2004, build like it's 2024. Focus on the product, minimal UI, mobile-first.`,
    solution: `A lightweight e-commerce template. Live at garagesale.wokegod.world`,
    results: ['Clean e-commerce template', 'Fast-loading design', 'Proof of concept'],
    gallery: []
  },

  // NOVA VENTURES - CONCEPT BRAND
  {
    id: '31',
    slug: 'nova-ventures',
    title: 'Nova Ventures',
    client: 'Concept Brand',
    category: 'VC Brand Identity',
    year: '2024',
    tags: ['Brand Identity', 'Venture Capital', 'Finance', 'Concept Work'],
    description: 'Brand identity for a deep tech venture capital firm.',
    heroImage: '/images/case-studies/nova-ventures-01.png',
    thumbnail: '/images/case-studies/nova-ventures-01.png',
    color: '#7C3AED',
    featured: false,
    type: 'project',
    overview: `Nova Ventures is a concept brand for a deep tech VC firm, demonstrating premium financial services branding.`,
    challenge: `VC brands must balance approachability for founders with credibility for LPs. Dark, premium aesthetic required.`,
    approach: `Midnight + Violet color palette, aurora gradient effects, a16z energy but darker.`,
    solution: `A sophisticated brand identity that signals both innovation and institutional credibility.`,
    results: ['Complete VC brand identity', 'Pitch deck templates', 'Website design'],
    gallery: ['/images/case-studies/nova-ventures-01.png', '/images/case-studies/nova-ventures-02.png']
  },

  // SYNTHESIS LABS - CONCEPT BRAND
  {
    id: '32',
    slug: 'synthesis-labs',
    title: 'Synthesis Labs',
    client: 'Concept Brand',
    category: 'AI Research Brand',
    year: '2024',
    tags: ['Brand Identity', 'AI Research', 'Tech', 'Concept Work'],
    description: 'Brand identity for an AI research laboratory.',
    heroImage: '/images/case-studies/synthesis-labs-01.png',
    thumbnail: '/images/case-studies/synthesis-labs-01.png',
    color: '#06B6D4',
    featured: false,
    type: 'project',
    overview: `Synthesis Labs is a concept brand for an AI research lab, showcasing cutting-edge tech branding.`,
    challenge: `AI research brands need to feel innovative yet trustworthy. Avoid generic tech clichés.`,
    approach: `DeepMind aesthetic—obsidian + cyan palette, neural network visuals, dark backgrounds with neon accents.`,
    solution: `A brand identity that communicates frontier research without being intimidating.`,
    results: ['Complete AI research brand', 'Publication templates', 'Website design'],
    gallery: ['/images/case-studies/synthesis-labs-01.png']
  }
]

export const getFeaturedCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.featured)
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => caseStudies.find(cs => cs.slug === slug)
export const getProjectCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'project')
export const getGalleryCaseStudies = (): CaseStudy[] => caseStudies.filter(cs => cs.type === 'gallery')
