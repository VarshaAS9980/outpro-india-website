export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    summary:
      "Positioning, messaging architecture, and channel plans aligned to revenue goals.",
    body: [
      "We align brand narrative with funnel economics so every page earns its place in the journey.",
      "Workshops, competitive scans, and measurement frameworks are packaged for leadership-ready decisions.",
    ],
    outcomes: [
      "Clear ICP and value proposition",
      "Content and CTA map tied to pipeline stages",
      "Dashboard-ready KPI definitions",
    ],
  },
  {
    slug: "experience-design",
    title: "Experience & Product Design",
    summary:
      "Research-backed UX, design systems, and high-fidelity UI tuned for conversion.",
    body: [
      "From wireframes to production-ready components, we design for speed, accessibility, and brand fidelity.",
      "Design tokens and component libraries keep marketing and product teams in sync.",
    ],
    outcomes: [
      "Responsive UI across breakpoints",
      "WCAG-oriented patterns",
      "Figma handoff with dev-ready specs",
    ],
  },
  {
    slug: "engineering",
    title: "Modern Web Engineering",
    summary:
      "Next.js / React builds with performance budgets, SEO foundations, and clean deploy pipelines.",
    body: [
      "We ship static-first architectures where possible, and augment with APIs only when the use case demands it.",
      "Observability hooks for analytics, CRM, and marketing automation are planned from day one.",
    ],
    outcomes: [
      "Sub-2.5s target paths on typical content pages",
      "Structured data and crawl hygiene",
      "CI/CD to Vercel, Netlify, or your cloud of choice",
    ],
  },
  {
    slug: "growth-analytics",
    title: "Growth & Analytics",
    summary:
      "GA4, Search Console, event taxonomy, and experiment roadmaps that leadership trusts.",
    body: [
      "We instrument the site so you can see which narratives and offers actually move pipeline.",
      "Optional HubSpot / Zoho flows can be wired once CRM scope is confirmed.",
    ],
    outcomes: [
      "GA4 + GSC baseline configuration",
      "Event naming aligned to business questions",
      "Quarterly optimization backlog",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
