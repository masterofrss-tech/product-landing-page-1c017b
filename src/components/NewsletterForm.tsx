import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { newsletterForm } from '@/lib/content'

type State =
  | { status: 'idle' | 'pending' | 'success' }
  | { status: 'error'; message: string }

/**
 * Newsletter signup delivered through Netlify Forms.
 * Field names must stay in sync with public/__forms.html.
 */
export function NewsletterForm() {
  const [state, setState] = useState<State>({ status: 'idle' })

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state.status === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState({ status: 'pending' })
    try {
      const response = await fetch(newsletterForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Delivery failed')
      // Local dev servers return the unprocessed registration file instead of accepting the form.
      if (/\bdata-netlify\s*=/i.test(await response.text())) {
        setState({
          status: 'error',
          message:
            'Signups only work on the deployed site. Nothing was sent from this preview.',
        })
        return
      }
      form.reset()
      setState({ status: 'success' })
    } catch {
      setState({
        status: 'error',
        message: 'That didn’t go through. Please try again in a moment.',
      })
    }
  }

  if (state.status === 'success') {
    return (
      <p
        role="status"
        className="border-l-2 border-ember py-3 pl-4 font-display text-xl"
      >
        You’re on the list. The first Firing Log lands in your inbox soon.
      </p>
    )
  }

  return (
    <form
      name={newsletterForm.name}
      method="POST"
      action={newsletterForm.endpoint}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      className="w-full"
    >
      <input type="hidden" name="form-name" value={newsletterForm.name} />
      <p hidden>
        <label>
          Leave this empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label htmlFor="newsletter-email" className="eyebrow mb-3 block text-paper/60">
        Your work email
      </label>
      <div className="flex items-stretch border-b-2 border-paper/30 transition-colors focus-within:border-ember">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder="you@company.com"
          disabled={state.status === 'pending'}
          onChange={() => {
            if (state.status === 'error') setState({ status: 'idle' })
          }}
          className="min-w-0 flex-1 bg-transparent py-3 font-display text-xl text-paper placeholder:text-paper/35 focus:outline-none focus-visible:outline-none md:text-2xl"
        />
        <button
          type="submit"
          disabled={state.status === 'pending'}
          className="group inline-flex shrink-0 items-center gap-2 px-2 font-medium text-paper transition-colors hover:text-ember disabled:cursor-wait disabled:opacity-60"
        >
          {state.status === 'pending' ? 'Subscribing…' : 'Subscribe'}
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
      {state.status === 'error' && (
        <p role="alert" className="mt-3 text-sm text-ember">
          {state.message}
        </p>
      )}
      <p className="mt-3 text-xs text-paper/45">
        One email every other Tuesday. Unsubscribe in one click.
      </p>
    </form>
  )
}
