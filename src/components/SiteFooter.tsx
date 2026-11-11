import { footerLinks, site } from '@/lib/content'
import { KilnMark } from './SiteNavigation'
import { NewsletterForm } from './NewsletterForm'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-8 md:pt-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div id="newsletter" className="scroll-mt-24 lg:col-span-6">
            <p className="eyebrow mb-5 text-ember">The Firing Log</p>
            <h2 className="mb-4 max-w-lg font-display text-4xl leading-[1.02] font-bold tracking-tight md:text-5xl">
              A fortnightly letter on{' '}
              <span className="serif-accent text-ember">product judgement.</span>
            </h2>
            <p className="mb-10 max-w-md text-paper/65">
              Field notes on turning customer signal into decisions — from the
              Kiln team and the product leaders we work with. No fluff, no
              launch spam.
            </p>
            <div className="max-w-lg">
              <NewsletterForm />
            </div>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5 lg:col-start-8"
          >
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <p className="eyebrow mb-5 text-paper/45">{group.heading}</p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-paper/80 transition-colors hover:text-ember"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          aria-hidden="true"
          className="mt-24 -mb-4 flex items-end gap-4 font-display text-[22vw] leading-[0.8] font-extrabold tracking-[-0.06em] text-paper/[0.06] select-none lg:text-[16rem]"
        >
          <KilnMark className="h-[0.7em] w-[0.7em] shrink-0" />
          {site.name.toLowerCase()}
        </div>

        <div className="relative flex flex-col gap-4 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name} Labs, Inc. Fired in small batches.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-paper">Privacy</a>
            <a href="#top" className="hover:text-paper">Terms</a>
            <a href="#top" className="hover:text-paper">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
