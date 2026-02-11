import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Reports - Ticket Management System',
  description: 'Generate reports and analyze ticket data',
}

export default function ReportsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Reports</h1>
          <p className="text-lg text-slate-600">
            Generate insights and track team performance with comprehensive reports.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="available-reports" className="text-2xl font-bold text-slate-900">
            Available Reports
          </h2>
          <div className="space-y-3">
            {[
              {
                report: 'Volume Report',
                desc: 'Track ticket creation and closure rates over time',
              },
              {
                report: 'Resolution Time',
                desc: 'Measure average time to resolve tickets',
              },
              {
                report: 'Team Performance',
                desc: 'See metrics by team member or department',
              },
              {
                report: 'Priority Distribution',
                desc: 'Analyze how tickets are distributed by priority',
              },
              {
                report: 'Category Breakdown',
                desc: 'See volume by ticket category',
              },
              {
                report: 'SLA Compliance',
                desc: 'Track adherence to service level agreements',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.report}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="accessing-reports" className="text-2xl font-bold text-slate-900">
            Accessing Reports
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Navigate to Reports &gt; select the report type &gt; choose your date range and filters.
          </p>
        </section>
      </div>
    </DocsLayout>
  )
}
