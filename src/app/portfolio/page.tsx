import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioItems } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected case studies with imagery, narrative, and KPI highlights from Outpro.India engagements.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="Case studies designed for both emotion and evidence."
        description="Each project can expand into a long-form story: problem, constraints, approach, stack, timeline, and quantified outcomes. Embed video walkthroughs where legal clears usage."
      />
      <div className="mt-12 space-y-16">
        {portfolioItems.map((item) => (
          <article
            key={item.id}
            className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-surface-elevated dark:border-slate-800 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                {item.sector}
              </p>
              <h2 className="font-display text-2xl font-semibold text-brand">{item.title}</h2>
              <p className="text-sm text-brand-muted">{item.description}</p>
              <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-200 pt-4 text-xs dark:border-slate-800">
                {item.kpis.map((kpi) => (
                  <div key={kpi.label}>
                    <dt className="text-brand-muted">{kpi.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-brand">{kpi.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="pt-2 text-xs text-brand-muted">
                Optional: lightbox gallery, before/after sliders, and embedded KPI dashboards via secure iframe.
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
