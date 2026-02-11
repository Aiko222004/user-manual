import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Views & Filters - Ticket Management System',
  description: 'Learn how to use views and filters to organize tickets',
}

export default function ViewsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Views & Filters</h1>
          <p className="text-lg text-slate-600">
            Master the powerful views and filtering system to organize and find tickets
            exactly the way you need them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="what-are-views" className="text-2xl font-bold text-slate-900">
            What Are Views?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Views are saved configurations that display tickets based on your specific
            criteria. They help you focus on the tickets that matter most for your role.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="predefined-views" className="text-2xl font-bold text-slate-900">
            Pre-defined Views
          </h2>
          <div className="space-y-3">
            {[
              { name: 'My Tickets', desc: 'All tickets assigned to me' },
              { name: 'Team Tickets', desc: 'All tickets for my team' },
              { name: 'Urgent', desc: 'Critical and high-priority tickets' },
              {
                name: 'Unassigned',
                desc: 'Tickets waiting to be assigned',
              },
              { name: 'Closed', desc: 'Recently closed tickets' },
              { name: 'Overdue', desc: 'Tickets past their due date' },
            ].map((view, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{view.name}</h4>
                <p className="text-slate-600 text-sm">{view.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="creating-custom-views" className="text-2xl font-bold text-slate-900">
            Creating Custom Views
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Create custom views to match your workflow. Use filters to narrow down tickets,
            then save the view for quick access later.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="filter-types" className="text-2xl font-bold text-slate-900">
            Filter Types
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                type: 'Status',
                options: 'Open, In Progress, Resolved, Closed, On Hold',
              },
              {
                type: 'Priority',
                options: 'Critical, High, Medium, Low',
              },
              {
                type: 'Assignee',
                options: 'Any team member',
              },
              {
                type: 'Date',
                options: 'Created, Modified, Due Date',
              },
              {
                type: 'Category',
                options: 'Bug, Feature, Enhancement, etc.',
              },
              {
                type: 'Tags',
                options: 'Custom labels you create',
              },
            ].map((filter, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{filter.type}</h4>
                <p className="text-slate-600 text-sm">{filter.options}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="sorting" className="text-2xl font-bold text-slate-900">
            Sorting Options
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Organize your tickets by sorting them in ascending or descending order:
          </p>
          <ul className="space-y-2 text-slate-700 mt-4">
            <li>• <strong>Date Created</strong> - Newest or oldest first</li>
            <li>• <strong>Due Date</strong> - Urgent deadlines first</li>
            <li>• <strong>Priority</strong> - High to low or vice versa</li>
            <li>• <strong>Status</strong> - Organize by workflow stage</li>
            <li>• <strong>Assignee</strong> - Group by team member</li>
            <li>• <strong>Title</strong> - Alphabetical order</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 id="best-practices" className="text-2xl font-bold text-slate-900">
            Best Practices
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              • <strong>Create role-specific views</strong> for managers, developers, and
              support staff
            </p>
            <p className="text-slate-700">
              • <strong>Use descriptive names</strong> for views so teammates understand
              their purpose
            </p>
            <p className="text-slate-700">
              • <strong>Combine multiple filters</strong> for powerful, specific views
            </p>
            <p className="text-slate-700">
              • <strong>Review views regularly</strong> and update them as needs change
            </p>
            <p className="text-slate-700">
              • <strong>Share useful views</strong> with your team for consistency
            </p>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
