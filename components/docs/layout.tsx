'use client'

import React, { useState } from "react"
import { Header } from './header'
import { Sidebar } from './sidebar'
import { TableOfContents } from './table-of-contents'
import { SearchResults } from './search-results'

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="flex flex-col md:flex-row">
        <Sidebar searchQuery={searchQuery} />
        <main className="flex-1 w-full max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {searchQuery ? (
              <article className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                <SearchResults query={searchQuery} />
              </article>
            ) : (
              <>
                <article className="flex-1 px-4 sm:px-6 lg:px-8 py-8 prose prose-slate max-w-none">
                  {children}
                </article>
                <TableOfContents />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
