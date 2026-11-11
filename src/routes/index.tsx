import { useEffect, type CSSProperties } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, Play } from 'lucide-react'
import {
  features,
  heroSignals,
  heroThemes,
  logos,
  site,
  stats,
  testimonials,
} from '@/lib/content'

export const Route = createFileRoute('/')({
  component: Home,
})

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties
const revealDelay = (ms: number) =>
  ({ '--reveal-delay': `${ms}ms` }) as CSSProperties

/** Fades in any [data-reveal] element as it scrolls into view. */
function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <LogoStrip />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
    </>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-24 overflow-hidden px-5 pt-14 pb-20 md:px-8 md:pt-20 lg:pb-28"
    >
      {/* Ember glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-ember/20 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p
            className="rise eyebrow mb-8 inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-3.5 py-1.5 text-ink-soft"
            style={delay(0)}
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ember" />
            Reading 1.2M customer signals a day
          </p>
          <h1 className="font-display text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.88] font-extrabold tracking-[-0.045em]">
            <span className="rise block" style={delay(80)}>
              Feedback in.
            </span>
            <span className="rise block" style={delay(200)}>
              <span className="serif-accent pr-2 text-ember">Decisions</span>
              out.
            </span>
          </h1>
          <p
            className="rise mt-9 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
            style={delay(340)}
          >
            {site.description}
          </p>
          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={delay(460)}
          >
            <a
              href="#start"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 font-medium text-paper shadow-[0_10px_30px_-10px_rgba(228,71,27,0.7)] transition-all hover:-translate-y-0.5 hover:bg-ember-deep"
            >
              Start free for 14 days
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#features"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-5 py-4 font-medium transition-colors hover:bg-ink/5"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                <Play size={12} aria-hidden="true" className="ml-0.5" />
              </span>
              See how it works
            </a>
          </div>
          <p className="rise mt-6 text-sm text-ash" style={delay(560)}>
            No credit card. Connect your first source in under five minutes.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

/** A stylised product moment: raw quotes going in, ranked themes coming out. */
function HeroVisual() {
  return (
    <div className="relative lg:col-span-5" aria-label="Kiln product preview" role="img">
      <div className="space-y-2.5">
        {heroSignals.map((signal, i) => (
          <div
            key={signal.source}
            className="slide-in flex items-start gap-3 rounded-xl border border-ink/10 bg-paper/80 p-3.5 shadow-[0_1px_0_rgba(22,19,15,0.05)] backdrop-blur-sm"
            style={{
              ...delay(500 + i * 120),
              marginLeft: `${[0, 1.75, 0.75, 2.5][i]}rem`,
            }}
          >
            <span className="eyebrow mt-0.5 shrink-0 rounded bg-ink/[0.06] px-1.5 py-0.5 text-[0.6rem]! text-ink-soft">
              {signal.source}
            </span>
            <p className="text-sm leading-snug text-ink-soft">{signal.text}</p>
          </div>
        ))}
      </div>

      <div
        className="rise my-4 flex items-center gap-3 pl-4 text-ember"
        style={delay(1000)}
      >
        <ArrowDown size={18} aria-hidden="true" />
        <span className="eyebrow">Clustered · ranked by revenue</span>
        <span className="h-px flex-1 bg-ember/30" />
      </div>

      <div
        className="rise rounded-2xl bg-ink p-5 text-paper shadow-[0_30px_60px_-20px_rgba(22,19,15,0.55)] md:p-6"
        style={delay(1100)}
      >
        <div className="mb-5 flex items-center justify-between">
          <p className="eyebrow text-paper/50">Top themes · this quarter</p>
          <span className="eyebrow rounded-full bg-ember px-2 py-0.5 text-[0.6rem]! text-paper">
            Live
          </span>
        </div>
        <ol className="space-y-5">
          {heroThemes.map((theme, i) => (
            <li key={theme.name}>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <p className="font-display text-lg font-semibold tracking-tight">
                  <span className="mr-2 font-mono text-xs text-paper/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {theme.name}
                </p>
                <p className="shrink-0 font-mono text-xs text-paper/60">
                  {theme.mentions} · {theme.revenue}
                </p>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-paper/10">
                <div
                  className="bar-grow h-full rounded-full bg-gradient-to-r from-ember-deep to-ember"
                  style={{ width: `${theme.heat}%`, ...delay(1300 + i * 150) }}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function LogoStrip() {
  const row = [...logos, ...logos]
  return (
    <section
      aria-label="Teams using Kiln"
      className="border-y border-ink/10 bg-paper-deep/60 py-6"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 md:px-8">
        <p className="eyebrow hidden shrink-0 text-ash md:block">
          Fired up at
        </p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <ul className="marquee-track flex w-max gap-14">
            {row.map((logo, i) => (
              <li
                key={`${logo}-${i}`}
                aria-hidden={i >= logos.length}
                className="font-display text-2xl font-bold tracking-tight whitespace-nowrap text-ink/45"
              >
                {logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-20 px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12" data-reveal>
          <p className="eyebrow text-ember lg:col-span-2 lg:pt-4">
            What Kiln does
          </p>
          <h2
            id="features-heading"
            className="font-display text-5xl leading-[0.95] font-bold tracking-[-0.035em] md:text-7xl lg:col-span-7"
          >
            Built for teams who’d rather{' '}
            <span className="serif-accent text-ember">decide</span> than dig.
          </h2>
          <p className="max-w-sm self-end text-lg text-ink-soft lg:col-span-3">
            Four steps between a pile of raw feedback and a roadmap you can
            defend in any room.
          </p>
        </div>

        <ol className="border-t border-ink">
          {features.map((feature, i) => (
            <li
              key={feature.number}
              data-reveal
              style={revealDelay(i * 80)}
              className="group relative grid gap-4 border-b border-ink/15 py-10 transition-colors duration-500 hover:bg-ink hover:text-paper md:grid-cols-12 md:gap-8 md:px-6 md:py-12"
            >
              <span className="font-mono text-sm text-ember md:col-span-1 md:pt-3">
                {feature.number}
              </span>
              <h3 className="font-display text-3xl leading-tight font-bold tracking-tight md:col-span-5 md:text-4xl">
                {feature.title}
              </h3>
              <p className="max-w-lg leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-paper/70 md:col-span-4 md:pt-2">
                {feature.body}
              </p>
              <span className="eyebrow self-start justify-self-start rounded-full border border-current px-3 py-1 opacity-60 md:col-span-2 md:mt-2 md:justify-self-end">
                {feature.detail}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section aria-label="Results" className="px-5 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl bg-ink/15 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            data-reveal
            style={revealDelay(i * 100)}
            className="bg-paper-deep p-8 md:p-10"
          >
            <p className="font-display text-6xl font-extrabold tracking-[-0.04em] md:text-7xl">
              {stat.value}
            </p>
            <p className="mt-3 text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-4 max-w-7xl text-xs text-ash">
        Median results across Kiln customers after 90 days.
      </p>
    </section>
  )
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
  return (
    <span
      aria-hidden="true"
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ember font-display text-sm font-bold text-paper"
    >
      {initials}
    </span>
  )
}

function Testimonials() {
  const [featured, ...rest] = testimonials
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-20 bg-paper-deep px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 id="stories-heading" className="eyebrow text-ember">
            Stories from the floor
          </h2>
          <span className="hidden h-px flex-1 bg-ink/20 md:block" />
        </div>

        <figure className="relative mb-20 lg:mb-28" data-reveal>
          <span
            aria-hidden="true"
            className="absolute -top-16 -left-2 font-serif text-[12rem] leading-none text-ember/25 md:-top-24 md:-left-8 md:text-[18rem]"
          >
            “
          </span>
          <blockquote className="relative max-w-5xl font-serif text-4xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            {featured.quote}
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <Initials name={featured.name} />
            <div>
              <p className="font-semibold">{featured.name}</p>
              <p className="text-sm text-ink-soft">{featured.role}</p>
            </div>
          </figcaption>
        </figure>

        <div className="grid gap-6 md:grid-cols-12">
          {rest.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={revealDelay(i * 120)}
              className={`flex flex-col justify-between rounded-3xl border border-ink/10 bg-paper p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10 ${
                i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-16'
              }`}
            >
              <blockquote className="font-display text-2xl leading-snug font-medium tracking-tight md:text-[1.7rem]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <Initials name={t.name} />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-ink-soft">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section
      id="start"
      aria-labelledby="cta-heading"
      className="relative scroll-mt-20 overflow-hidden bg-ember px-5 py-24 text-paper md:px-8 md:py-36"
    >
      {/* Concentric kiln-arch rings */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 -bottom-56 h-[44rem] w-[44rem] text-paper/15 md:-right-20"
        fill="none"
        stroke="currentColor"
      >
        {[280, 230, 180, 130, 80].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} strokeWidth="1.5" />
        ))}
      </svg>
      <div className="relative mx-auto max-w-7xl" data-reveal>
        <h2
          id="cta-heading"
          className="max-w-5xl font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] font-extrabold tracking-[-0.045em]"
        >
          Stop guessing.
          <br />
          <span className="serif-accent text-ink">Start firing.</span>
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="max-w-md text-lg text-paper/85 md:col-span-6">
            Free for teams of up to five. $18 per seat, per month after that —
            with every integration included and no annual lock-in.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
            <a
              href="#newsletter"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              Get early access
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#stories"
              className="inline-flex items-center justify-center rounded-full border border-paper/50 px-8 py-4 font-medium transition-colors hover:border-paper hover:bg-paper/10"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
