import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive corporate services from strategy and UX to modern web engineering and analytics.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Modular offerings with dedicated detail pages."
        description="Each card links to a route under /services/[slug] so you can deepen proof, pricing bands, FAQs, and diagrams per line of business."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="flex flex-col rounded-2xl border border-slate-200 bg-surface-elevated p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:hover:border-slate-600"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-xs font-semibold text-slate-50 dark:bg-slate-100 dark:text-slate-900">
              Icon
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold text-brand">{service.title}</h2>
            <p className="mt-2 flex-1 text-sm text-brand-muted">{service.summary}</p>
            <p className="mt-4 text-sm font-semibold text-brand">Open service detail →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
