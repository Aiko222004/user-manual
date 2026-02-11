'use client'

import React from "react"

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Heading {
  id: string
  level: number
  text: string
}

interface TableOfContentsProps {
  content?: React.ReactNode
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    // Extract headings from the page
    const elements = document.querySelectorAll('h2, h3')
    const idCounts = new Map<string, number>()
    const headingList = Array.from(elements).map((el) => {
      const baseId =
        el.id || el.textContent?.replace(/\s+/g, '-').toLowerCase() || ''
      const nextCount = (idCounts.get(baseId) ?? 0) + 1
      idCounts.set(baseId, nextCount)
      const uniqueId = nextCount > 1 ? `${baseId}-${nextCount}` : baseId
      if (uniqueId) {
        el.id = uniqueId
      }
      return {
        id: uniqueId,
        level: parseInt(el.tagName[1]),
        text: el.textContent || '',
      }
    })
    setHeadings(headingList.filter((heading) => heading.id))
  }, [content])

  if (headings.length === 0) return null

  return (
    <aside className="hidden lg:block w-64 pl-8">
      <div className="sticky top-24">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">On this page</h3>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
            >
              <Link
                href={`#${heading.id}`}
                className="text-slate-600 hover:text-brand transition-colors"
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
