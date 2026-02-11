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
}

export function Sidebar({ variant = 'desktop' }: SidebarProps) {
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
        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 rounded transition-colors"
            >
              <span>{section.title}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  expandedSections.has(section.title) ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.has(section.title) && (
              <div className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm rounded transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-100 text-blue-900 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
