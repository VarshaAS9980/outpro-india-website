import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { mainNav, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-surface-elevated/90 backdrop-blur-md dark:border-slate-800/80">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-brand">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-muted md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <MobileNav />
          <Link
            href="/#contact"
            className="rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-foreground transition hover:opacity-90 sm:text-sm"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </header>
  );
}
