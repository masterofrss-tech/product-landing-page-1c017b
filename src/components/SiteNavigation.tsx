import { ArrowUpRight } from 'lucide-react'
import { navLinks, site } from '@/lib/content'

export function KilnMark({ className = '' }: { className?: string }) {
  // A kiln arch with a flame-coloured core.
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path d="M4 28V14a12 12 0 0 1 24 0v14H4Z" fill="currentColor" />
      <path d="M11 28v-8a5 5 0 0 1 10 0v8h-10Z" fill="#e4471b" />
    </svg>
  )
}

export function SiteNavigation() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight"
          >
            <KilnMark className="h-7 w-7" />
            {site.name}
          </a>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-1 text-sm font-medium md:gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden rounded-full px-4 py-2 transition-colors hover:bg-ink/5 sm:inline-block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#start"
              className="group ml-2 inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-ember"
            >
              Start free
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
