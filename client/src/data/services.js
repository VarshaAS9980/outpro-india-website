export const services = [
  {
    slug: 'digital-strategy',
    title: 'Digital Strategy & Advisory',
    short: 'Roadmaps, audits, and growth frameworks aligned to your revenue goals.',
    icon: 'compass',
    bullets: [
      'Market and competitive positioning',
      'Customer journey mapping',
      'Measurement frameworks (OKRs, KPIs)',
    ],
    detail:
      'We partner with leadership teams to translate business objectives into executable digital roadmaps. Engagements typically combine discovery workshops, analytics review, and a phased delivery plan.',
  },
  {
    slug: 'experience-design',
    title: 'Experience Design & UX',
    short: 'Research-led UX, UI systems, and conversion-focused product design.',
    icon: 'layers',
    bullets: [
      'UX research and usability testing',
      'Design systems and component libraries',
      'Prototyping for stakeholder alignment',
    ],
    detail:
      'Our design practice blends qualitative insight with quantitative validation. Deliverables include high-fidelity UI, accessible patterns, and documentation your engineering team can ship with confidence.',
  },
  {
    slug: 'engineering',
    title: 'Engineering & Platforms',
    short: 'Modern web stacks, APIs, integrations, and performance engineering.',
    icon: 'code',
    bullets: [
      'React / Node ecosystems',
      'API design and third-party integrations',
      'Core Web Vitals and performance budgets',
    ],
    detail:
      'We build resilient platforms with clear architecture, automated testing hooks, and deployment pipelines suited to AWS, GCP, Azure, or edge hosts such as Vercel and Netlify.',
  },
  {
    slug: 'brand-content',
    title: 'Brand & Content Systems',
    short: 'Messaging architecture, content models, and editorial workflows.',
    icon: 'pen',
    bullets: [
      'Messaging hierarchy and tone guides',
      'CMS selection and schema design',
      'Launch campaigns and landing experiences',
    ],
    detail:
      'Consistency scales trust. We define brand voice, structure content for reuse, and implement CMS patterns that marketing teams can own without engineering bottlenecks.',
  },
  {
    slug: 'analytics-cro',
    title: 'Analytics, SEO & CRO',
    short: 'GA4, Search Console, experimentation, and funnel optimization.',
    icon: 'chart',
    bullets: [
      'GA4 property design and event taxonomy',
      'Technical SEO and structured data',
      'A/B testing and personalization pilots',
    ],
    detail:
      'Decisions follow evidence. We instrument meaningful events, monitor search health, and run disciplined experiments that compound conversion over time.',
  },
  {
    slug: 'managed-delivery',
    title: 'Managed Delivery & Support',
    short: 'SLA-backed maintenance, security updates, and roadmap execution.',
    icon: 'shield',
    bullets: [
      'Release cadence and change management',
      'Security patching and dependency hygiene',
      'Backups, monitoring, and incident response',
    ],
    detail:
      'Post-launch, we offer retainers that keep your digital estate fast, secure, and current—so your team can focus on customers, not infrastructure fire drills.',
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null;
}
