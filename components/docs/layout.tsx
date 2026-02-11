import React from "react"
import { Header } from './header'
import { Sidebar } from './sidebar'
import { TableOfContents } from './table-of-contents'

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 w-full max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="flex-1 px-4 sm:px-6 lg:px-8 py-8 prose prose-slate max-w-none">
              {children}
            </article>
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  )
}
