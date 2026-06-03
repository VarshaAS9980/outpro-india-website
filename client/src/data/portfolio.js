export const portfolioItems = [
  {
    id: '1',
    slug: 'b2b-saas-replatform',
    title: 'B2B SaaS Replatform',
    sector: 'Technology',
    summary:
      'Migrated a legacy marketing stack to a headless architecture with sub-2s LCP on mobile.',
    challenge:
      'The marketing site depended on a monolithic CMS with brittle templates, slow builds, and declining mobile performance. Sales complained that proof points were hard to update.',
    approach:
      'We introduced a headless content model, a component library aligned to brand, and edge caching. Releases moved from monthly batched deploys to continuous delivery with preview environments for GTM.',
    outcome:
      'Core Web Vitals moved into the green band across key markets. Editorial workflows shortened from days to hours, enabling campaign agility.',
    kpis: [
      { label: 'LCP improvement', value: '42%' },
      { label: 'Lead form completion', value: '+18%' },
    ],
    techStack: ['React', 'Node.js', 'Headless CMS', 'CDN edge cache', 'GA4'],
    gallery: [
      { seed: 'saas-hero', alt: 'Marketing homepage hero treatment' },
      { seed: 'saas-dash', alt: 'Product analytics dashboard preview' },
      { seed: 'saas-mobile', alt: 'Mobile responsive layout' },
    ],
    imageAlt: 'Abstract dashboard visualization',
    clientQuote:
      'We finally ship narrative changes without opening a ticket storm on engineering.',
  },
  {
    id: '2',
    slug: 'financial-services-portal',
    title: 'Financial Services Portal',
    sector: 'Finance',
    summary:
      'Role-based experiences, accessibility compliance, and hardened API integrations.',
    challenge:
      'Regulated content, strict identity boundaries, and accessibility requirements had to coexist with a streamlined acquisition journey for two distinct personas.',
    approach:
      'We modeled permissions explicitly, shipped WCAG AA patterns from day one, and instrumented server-side events for auditability. Penetration testing was folded into the release gate.',
    outcome:
      'Support volume dropped as self-service flows clarified eligibility and documentation. Compliance sign-off accelerated with traceable content governance.',
    kpis: [
      { label: 'WCAG conformance', value: 'AA' },
      { label: 'Support tickets', value: '-27%' },
    ],
    techStack: ['React', 'Node.js', 'OpenID Connect', 'PostgreSQL', 'PDF microservices'],
    gallery: [
      { seed: 'fin-secure', alt: 'Secure authenticated dashboard' },
      { seed: 'fin-forms', alt: 'Guided application flow' },
      { seed: 'fin-report', alt: 'Statements and reporting UI' },
    ],
    imageAlt: 'Secure banking interface concept',
    clientQuote: 'The team understood risk registers as well as pixels.',
  },
  {
    id: '3',
    slug: 'industrial-manufacturer-global',
    title: 'Industrial Manufacturer',
    sector: 'Manufacturing',
    summary:
      'Global catalog, dealer locator, and localized content for twelve regions.',
    challenge:
      'SKUs and documentation varied by region; SEO was fragmented; dealers needed accurate availability without exposing internal ERP complexity.',
    approach:
      'We centralized taxonomy, introduced structured data for product families, and built a dealer locator backed by geospatial search with editorial overrides per territory.',
    outcome:
      'Organic sessions rose materially while dealer-qualified inquiries increased with cleaner routing rules.',
    kpis: [
      { label: 'Organic sessions', value: '+31%' },
      { label: 'Dealer inquiries', value: '+22%' },
    ],
    techStack: ['React', 'Node.js', 'ElasticSearch', 'Geo APIs', 'Translation workflow'],
    gallery: [
      { seed: 'mfg-catalog', alt: 'Product catalog grid' },
      { seed: 'mfg-map', alt: 'Dealer locator map interface' },
      { seed: 'mfg-doc', alt: 'Technical documentation hub' },
    ],
    imageAlt: 'Factory and supply chain imagery',
    clientQuote: 'Localization stopped being a spreadsheet exercise.',
  },
];

export function getPortfolioBySlug(slug) {
  return portfolioItems.find((p) => p.slug === slug) || null;
}
