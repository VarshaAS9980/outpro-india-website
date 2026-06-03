import Image from "next/image";
import Link from "next/link";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeading } from "@/components/SectionHeading";
import { portfolioItems } from "@/content/portfolio";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { testimonials } from "@/content/testimonials";

export default function HomePage() {
  const featuredPortfolio = portfolioItems.slice(0, 2);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-surface-elevated to-surface dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-muted">
              Outpro.India
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-brand text-balance sm:text-5xl lg:text-6xl">
              A premium corporate presence engineered for trust and pipeline.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-muted">
              {siteConfig.tagline} Replace this hero with approved brand copy once Figma sign-off is complete.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
              >
                Book a discovery call
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-brand transition hover:border-brand dark:border-slate-600"
              >
                View selected work
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating in a modern studio"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Capabilities that compound across the funnel."
          description="Each engagement is modular: strategy, design, engineering, and analytics can be sequenced to match procurement and internal stakeholders."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-slate-200 bg-surface-elevated p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:hover:border-slate-600"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                Service
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-brand group-hover:text-brand-muted">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-brand-muted">{service.summary}</p>
              <p className="mt-4 text-sm font-semibold text-brand">View detail →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-surface-elevated py-16 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Signals that reduce friction for enterprise buyers."
            description="Swap these placeholder metrics for audited outcomes once legal and client approvals are in place."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <MetricCard
              label="Target mobile LCP"
              value="< 2.5s"
              hint="Aligned to your performance SLO on marketing paths."
            />
            <MetricCard
              label="Engaged sessions"
              value="+38%"
              hint="Illustrative lift after narrative + IA refresh."
            />
            <MetricCard
              label="Sales-ready conversations"
              value="+21%"
              hint="Measured via CRM stage movement post-launch."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say about working with us."
            description="Short-form quotes on the homepage; the Testimonials area hosts richer stories and optional video."
          />
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            View all testimonials
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredTestimonials.map((t) => (
            <figure
              key={t.author + t.company}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-surface-elevated p-6 dark:border-slate-800"
            >
              <blockquote className="text-base text-brand-muted">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-brand">
                {t.author}
                <span className="mt-1 block text-xs font-normal text-brand-muted">
                  {t.title}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-surface-elevated py-16 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured engagements with measurable KPIs."
              description="Each case study can expand into deep-dive pages with galleries, embedded video, and downloadable one-pagers."
            />
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-brand underline-offset-4 hover:underline"
            >
              Browse portfolio
            </Link>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {featuredPortfolio.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-surface dark:border-slate-800"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                    {item.sector}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-brand">{item.title}</h3>
                  <p className="text-sm text-brand-muted">{item.description}</p>
                  <dl className="grid grid-cols-3 gap-3 text-xs">
                    {item.kpis.map((kpi) => (
                      <div key={kpi.label}>
                        <dt className="text-brand-muted">{kpi.label}</dt>
                        <dd className="mt-1 font-semibold text-brand">{kpi.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Ready to align your digital presence with how you actually win deals?"
          description="Wire this block to HubSpot, Zoho, or a simple serverless form once CRM scope is confirmed."
          align="center"
        />
        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-surface-elevated p-8 text-center dark:border-slate-800">
          <p className="text-sm text-brand-muted">
            Primary email:{" "}
            <a className="font-semibold text-brand" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-4 text-xs text-brand-muted">
            Add Tawk.to, Crisp, or a calendar embed here without changing the overall layout grid.
          </p>
        </div>
      </section>
    </>
  );
}
