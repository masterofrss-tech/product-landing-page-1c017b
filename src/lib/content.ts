/**
 * All landing-page copy lives here so the product story can be edited in one place.
 */

export const site = {
  name: 'Kiln',
  tagline: 'Feedback in. Decisions out.',
  description:
    'Kiln turns the noise of customer feedback — tickets, calls, reviews, Slack threads — into ranked, evidence-backed roadmap decisions your whole team can trust.',
}

export const newsletterForm = {
  name: 'newsletter',
  endpoint: '/__forms.html',
}

export const navLinks = [
  { href: '#features', label: 'Product' },
  { href: '#stories', label: 'Stories' },
  { href: '#start', label: 'Pricing' },
]

export const heroSignals = [
  { source: 'Zendesk', text: '“Exporting to CSV breaks every time we have >10k rows.”' },
  { source: 'Gong call', text: '“Honestly the export thing is why we haven’t expanded seats.”' },
  { source: 'G2 review', text: '“Great tool, but bulk export is painful.”' },
  { source: '#feedback', text: '“Third enterprise lead this week asking about exports.”' },
]

export const heroThemes = [
  { name: 'Bulk export reliability', mentions: 412, revenue: '$1.8M ARR', heat: 96 },
  { name: 'SSO for contractors', mentions: 238, revenue: '$940K ARR', heat: 71 },
  { name: 'Mobile offline mode', mentions: 167, revenue: '$310K ARR', heat: 44 },
]

export const logos = [
  'Northwind',
  'Halcyon',
  'Parcel & Co',
  'Lumen Labs',
  'Oxbow',
  'Fieldnote',
  'Tessera',
  'Brightline',
]

export const features = [
  {
    number: '01',
    title: 'Every channel, one furnace.',
    body: 'Connect support desks, call recorders, review sites, and Slack in minutes. Kiln reads everything so your PMs don’t have to skim it all on Friday afternoon.',
    detail: '40+ sources',
  },
  {
    number: '02',
    title: 'Themes that form themselves.',
    body: 'Kiln clusters thousands of comments into clear, named themes — and keeps them current as new feedback arrives. No tagging taxonomy to maintain.',
    detail: 'Live clustering',
  },
  {
    number: '03',
    title: 'Weighted by what matters.',
    body: 'Rank themes by revenue at stake, churn risk, or segment. Loud customers stop drowning out valuable ones.',
    detail: 'Revenue-aware',
  },
  {
    number: '04',
    title: 'Receipts for every decision.',
    body: 'Each roadmap item links back to the exact quotes behind it. When leadership asks “why this?”, the answer is one click away.',
    detail: 'Traceable evidence',
  },
]

export const stats = [
  { value: '11 hrs', label: 'saved per PM, per week' },
  { value: '3.4×', label: 'more feedback actually read' },
  { value: '27%', label: 'drop in churn-tagged tickets' },
]

export const testimonials = [
  {
    quote:
      'We used to argue about the roadmap from memory. Now we argue from evidence — and the arguments are a lot shorter.',
    name: 'Maya Okafor',
    role: 'VP Product, Halcyon',
    featured: true,
  },
  {
    quote:
      'Kiln found a churn driver hiding in 600 support tickets that nobody had connected. We shipped the fix in two sprints.',
    name: 'Daniel Reyes',
    role: 'Head of CX, Oxbow',
    featured: false,
  },
  {
    quote:
      'It’s the first feedback tool our engineers actually open. The quotes make the “why” impossible to ignore.',
    name: 'Priya Natarajan',
    role: 'Engineering Lead, Fieldnote',
    featured: false,
  },
]

export const footerLinks = [
  {
    heading: 'Product',
    links: ['Integrations', 'Themes', 'Prioritisation', 'Changelog'],
  },
  {
    heading: 'Company',
    links: ['About', 'Customers', 'Careers', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Docs', 'Guides', 'Security', 'Status'],
  },
]
