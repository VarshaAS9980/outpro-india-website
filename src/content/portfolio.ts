export type PortfolioItem = {
  id: string;
  title: string;
  sector: string;
  description: string;
  kpis: { label: string; value: string }[];
  imageSrc: string;
  imageAlt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "regional-b2b-platform",
    title: "Regional B2B Platform Relaunch",
    sector: "Industrial services",
    description:
      "End-to-end redesign with service taxonomy, proof-led case blocks, and localized lead routing.",
    kpis: [
      { label: "Qualified leads", value: "+42%" },
      { label: "Mobile LCP", value: "1.8s" },
      { label: "Form completion", value: "+19%" },
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern office workspace",
  },
  {
    id: "fintech-onboarding",
    title: "Fintech Onboarding Experience",
    sector: "Financial services",
    description:
      "Simplified onboarding narrative, trust markers, and performance-tuned marketing pages.",
    kpis: [
      { label: "Bounce rate", value: "-27%" },
      { label: "Time-to-first-action", value: "-35%" },
      { label: "Brand NPS", value: "+11" },
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Team collaborating at a desk",
  },
  {
    id: "healthcare-patient-portal",
    title: "Healthcare Patient Portal",
    sector: "Healthcare",
    description:
      "Accessible information architecture with clinician-approved content patterns and secure forms.",
    kpis: [
      { label: "Support tickets", value: "-18%" },
      { label: "Accessibility score", value: "AA target" },
      { label: "Search visibility", value: "+3.2x" },
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Healthcare professional reviewing charts",
  },
];
