'use client'

import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Sidebar } from './sidebar'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          <Link href="/docs" className="flex items-center gap-2">
            <img src="/Resolve logo.svg" alt="Bellesoft Resolve" className="w-10 h-10" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-slate-900">Bellesoft Resolve</h1>
              <p className="text-xs text-slate-600">User Manual</p>
            </div>
          </Link>

          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded transition-colors"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-slate-900" />
            ) : (
              <Menu size={24} className="text-slate-900" />
            )}
          </button>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/docs/contact"
              className="px-3 py-2 bg-brand text-white rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-slate-50 p-4">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>
            <Sidebar variant="mobile" />
          </div>
        )}
      </header>
    </>
  )
}
