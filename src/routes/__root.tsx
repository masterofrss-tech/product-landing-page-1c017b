import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteNavigation } from '@/components/SiteNavigation'
import { SiteFooter } from '@/components/SiteFooter'
import { site } from '@/lib/content'
import '../styles.css'

const title = `${site.name} — ${site.tagline}`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title },
      { name: 'description', content: site.description },
      { name: 'theme-color', content: '#f2ece1' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Enables scroll-reveal styles only when JavaScript runs.
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <HeadContent />
      </head>
      <body>
        <SiteNavigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
