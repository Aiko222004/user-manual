'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface SidebarSection {
  title: string
  items: {
    label: string
    href: string
  }[]
}

const SIDEBAR_SECTIONS: SidebarSection[] = [
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

interface SidebarProps {
  variant?: 'desktop' | 'mobile'
  searchQuery?: string
}

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

// Scoring function to rank search results by relevance
const scoreResult = (label: string, query: string): number => {
  const lowerLabel = label.toLowerCase()
  const lowerQuery = query.toLowerCase()

  // Exact match scores highest
  if (lowerLabel === lowerQuery) return 1000

  // Exact word match at start scores very high
  if (lowerLabel.split(/\s+/)[0] === lowerQuery) return 500

  // Exact word match (whole word) scores high
  const wordBoundaryRegex = new RegExp(`\\b${lowerQuery}\\b`)
  if (wordBoundaryRegex.test(lowerLabel)) return 300

  // Starts with query scores medium
  if (lowerLabel.startsWith(lowerQuery)) return 200

  // Contains query scores lower
  if (lowerLabel.includes(lowerQuery)) return 100

  return 0
}

export function Sidebar({ variant = 'desktop', searchQuery = '' }: SidebarProps) {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(SIDEBAR_SECTIONS.map((section) => section.title))
  )

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedSections(newExpanded)
  }

  const isActive = (href: string) => pathname === href

  // Filter sections based on search query with relevance scoring
  const filteredSections = searchQuery
    ? SIDEBAR_SECTIONS.map((section) => ({
        ...section,
        items: section.items
          .map((item) => ({
            ...item,
            score: scoreResult(item.label, searchQuery),
          }))
          .filter((item) => item.score > 0)
          .sort((a, b) => b.score - a.score)
          .map(({ score, ...item }) => item),
      })).filter((section) => section.items.length > 0)
    : SIDEBAR_SECTIONS

  // Check if there are any matches
  const hasMatches =
    searchQuery &&
    filteredSections.some((section) => section.items.length > 0)

  // Auto-expand sections when searching
  const sectionsToShow = searchQuery
    ? new Set(
        filteredSections
          .filter((section) => section.items.length > 0)
          .map((section) => section.title)
      )
    : expandedSections

  const containerClasses =
    variant === 'mobile'
      ? 'flex flex-col w-full bg-slate-50 border-b border-slate-200'
      : 'hidden md:flex flex-col w-64 bg-slate-50 border-r border-slate-200 overflow-y-auto h-screen sticky top-0'

  return (
    <aside className={containerClasses}>
      <div className="p-6 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-900">Bellesoft Resolve</h2>
        <p className="text-sm text-slate-600 mt-1">User Documentation</p>
      </div>

      <nav className="flex-1 px-3 py-4">
        {searchQuery ? (
          <div className="px-3 py-4 text-center">
            <p className="text-sm text-slate-500">
              Showing {filteredSections.reduce((acc, s) => acc + s.items.length, 0)} results in the center
            </p>
          </div>
        ) : (
          <>
            {filteredSections.length === 0 && searchQuery ? (
              <div className="px-3 py-4 text-center">
                <p className="text-sm text-slate-500">No similar words found</p>
              </div>
            ) : (
              <>
                {filteredSections.map((section) => (
                  <div key={section.title} className="mb-4">
                    {section.items.length > 0 && (
                      <>
                        <button
                          onClick={() => toggleSection(section.title)}
                          className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 rounded transition-colors"
                        >
                          <span>{section.title}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              sectionsToShow.has(section.title) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {sectionsToShow.has(section.title) && (
                          <div className="mt-2 space-y-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 text-sm rounded transition-colors ${
                                  isActive(item.href)
                                    ? 'bg-orange-100 text-orange-900 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-100'
                                }`}
                              >
                                <HighlightedText text={item.label} query={searchQuery} />
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </nav>
    </aside>
  )
}
