import Link from "next/link";
import { mainNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-surface-elevated py-12 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-brand">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm text-brand-muted">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-muted transition hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">Contact</p>
          <p className="mt-4 text-sm text-brand-muted">{siteConfig.email}</p>
          <p className="mt-1 text-sm text-brand-muted">{siteConfig.phone}</p>
          <p className="mt-6 text-xs text-brand-muted">
            Future sections: Blog, Careers, Partner Program — routes can be added without restructuring the IA.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-200 px-4 pt-6 text-xs text-brand-muted dark:border-slate-800 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
