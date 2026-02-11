import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Search & Sort - Ticket Management System',
  description: 'Find tickets quickly with powerful search and sorting',
}

export default function SearchPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Search & Sort</h1>
          <p className="text-lg text-slate-600">
            Find exactly what you need with powerful search and sorting capabilities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="using-search" className="text-2xl font-bold text-slate-900">
            Using Search
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Use the search bar at the top to quickly find tickets by:
          </p>
          <ul className="space-y-2 text-slate-700 mt-4">
            <li>• <strong>Ticket ID:</strong> Search by ticket number</li>
            <li>• <strong>Title:</strong> Search in ticket titles</li>
            <li>• <strong>Description:</strong> Search ticket descriptions</li>
            <li>• <strong>Assignee:</strong> Find tickets assigned to someone</li>
            <li>• <strong>Keywords:</strong> Search by any keywords</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 id="sorting-options" className="text-2xl font-bold text-slate-900">
            Sorting Options
          </h2>
          <div className="space-y-3">
            {[
              { option: 'Date Created', desc: 'Sort by creation date' },
              { option: 'Due Date', desc: 'Sort by deadline' },
              { option: 'Priority', desc: 'Sort by urgency level' },
              { option: 'Status', desc: 'Sort by ticket status' },
              { option: 'Assignee', desc: 'Sort by assigned person' },
              { option: 'Title', desc: 'Sort alphabetically by title' },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.option}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="advanced-search" className="text-2xl font-bold text-slate-900">
            Advanced Search
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Combine multiple filters for precise results:
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3 mt-4">
            <p className="text-slate-700">
              Click "Filters" and select multiple criteria to narrow down your results
              exactly the way you want.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="saved-searches" className="text-2xl font-bold text-slate-900">
            Saved Searches
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Save your frequently used search filters as views for quick access. See the
            Views documentation for more information.
          </p>
        </section>
      </div>
    </DocsLayout>
  )
}
