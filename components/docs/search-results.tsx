'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface SearchItem {
  label: string
  href: string
  section: string
}

const SIDEBAR_SECTIONS = [
  {
    title: 'Overview',
    items: [
      { label: 'About Bellesoft Resolve', href: '/docs' },
      { label: 'System Features', href: '/docs/tickets' },
    ],
  },
  {
    title: 'For Customers',
    items: [
      { label: 'Quick Start', href: '/docs/quick-start' },
      { label: 'Creating Tickets', href: '/docs/creating-tickets' },
      { label: 'Tracking Tickets', href: '/docs/dashboard' },
      { label: 'Priority Levels', href: '/docs/priority' },
      { label: 'Ticket Status', href: '/docs/status' },
    ],
  },
  {
    title: 'For Admins & Developers',
    items: [
      { label: 'Managing Assigned Tickets', href: '/docs/managing-tickets' },
      { label: 'Assignment Rules', href: '/docs/assignment' },
      { label: 'Adding Comments', href: '/docs/comments' },
      { label: 'Custom Fields', href: '/docs/custom-fields' },
      { label: 'Reports & Analytics', href: '/docs/reports' },
    ],
  },
  {
    title: 'For Super Admin',
    items: [
      { label: 'Installation & Setup', href: '/docs/installation' },
      { label: 'User Management', href: '/docs/users' },
      { label: 'Permissions & Roles', href: '/docs/permissions' },
      { label: 'System Settings', href: '/docs/settings' },
      { label: 'Workflows & Automation', href: '/docs/workflows' },
      { label: 'Backup & Recovery', href: '/docs/backup' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'FAQ', href: '/docs/faq' },
      { label: 'Troubleshooting', href: '/docs/troubleshooting' },
      { label: 'Contact Support', href: '/docs/contact' },
    ],
  },
]

// Helper function to highlight matching text
const HighlightedText = ({ text, query }: { text: string; query: string }) => {
  if (!query) return <>{text}</>

  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const matchIndex = lowerText.indexOf(lowerQuery)

  if (matchIndex === -1) return <>{text}</>

  const beforeMatch = text.substring(0, matchIndex)
  const matchedText = text.substring(matchIndex, matchIndex + query.length)
  const afterMatch = text.substring(matchIndex + query.length)

  return (
    <>
      {beforeMatch}
      <span className="bg-yellow-200 font-semibold">{matchedText}</span>
      {afterMatch}
    </>
  )
}

interface SearchResultsProps {
  query: string
}

// Scoring function to rank search results by relevance
const scoreResult = (label: string, query: string): number => {
  const lowerLabel = label.toLowerCase()
  const lowerQuery = query.toLowerCase()

  // Exact match scores highest
  if (lowerLabel === lowerQuery) return 1000

  // Exact word match at start scores very high
  if (lowerLabel.startsWith(lowerQuery)) return 500

  // Exact word match (whole word) scores high
  const wordBoundaryRegex = new RegExp(`\\b${lowerQuery}\\b`)
  if (wordBoundaryRegex.test(lowerLabel)) return 300

  // Starts with query scores medium
  if (lowerLabel.startsWith(lowerQuery)) return 200

  // Contains query scores lower
  if (lowerLabel.includes(lowerQuery)) return 100

  return 0
}

export function SearchResults({ query }: SearchResultsProps) {
  // Flatten all items with their sections
  const allItems: SearchItem[] = SIDEBAR_SECTIONS.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      section: section.title,
    }))
  )

  // Filter and sort items based on search query with relevance scoring
  const scoredResults = allItems
    .map((item) => ({
      ...item,
      score: scoreResult(item.label, query),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  const results = scoredResults.map(({ score, ...item }) => item)

  // Group results by section, preserving order
  const groupedResults = SIDEBAR_SECTIONS
    .map((section) => ({
      section: section.title,
      items: results.filter((item) => item.section === section.title),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">
          Search Results
        </h1>
        <p className="text-lg text-slate-600">
          {results.length === 0
            ? `No results found for "${query}"`
            : `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
        </p>
      </section>

      {results.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-slate-600 mb-4">
            We couldn't find any documentation matching "<span className="font-semibold">{query}</span>"
          </p>
          <p className="text-slate-500 text-sm">
            Try using different keywords or{' '}
            <Link href="/docs/contact" className="text-brand hover:underline">
              contact support
            </Link>
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {groupedResults.map((group) => (
            <section key={group.section} className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {group.section}
              </h2>
              <div className="grid gap-2">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 hover:border-brand hover:bg-orange-50 transition-colors group"
                  >
                    <span className="text-slate-900 group-hover:text-brand transition-colors">
                      <HighlightedText text={item.label} query={query} />
                    </span>
                    <ChevronRight size={18} className="text-slate-400 group-hover:text-brand transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
