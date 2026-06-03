export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The new site finally reflects how sophisticated our delivery actually is. Prospects arrive pre-sold.",
    author: "Client Name",
    title: "VP Marketing",
    company: "Enterprise SaaS",
  },
  {
    quote:
      "Performance and clarity were non-negotiable. The team treated Core Web Vitals as a product requirement, not an afterthought.",
    author: "Client Name",
    title: "Head of Digital",
    company: "Financial Services",
  },
  {
    quote:
      "We measured impact in weeks: better engagement on service pages and cleaner handoffs to sales.",
    author: "Client Name",
    title: "CEO",
    company: "B2B Services",
  },
];
