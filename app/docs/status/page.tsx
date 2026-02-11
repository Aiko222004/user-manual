import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Status Tracking - Ticket Management System',
  description: 'Understanding ticket status and workflow',
}

export default function StatusPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Status Tracking</h1>
          <p className="text-lg text-slate-600">
            Track ticket progress through different workflow stages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="ticket-statuses" className="text-2xl font-bold text-slate-900">
            Ticket Statuses
          </h2>
          <div className="space-y-3">
            {[
              {
                status: 'New',
                desc: 'Ticket just created, waiting for review and assignment',
              },
              {
                status: 'Open',
                desc: 'Ticket assigned and acknowledged by the team',
              },
              {
                status: 'In Progress',
                desc: 'Someone is actively working on resolving the issue',
              },
              {
                status: 'Resolved',
                desc: 'Issue is fixed and waiting for verification',
              },
              {
                status: 'Closed',
                desc: 'Ticket is complete and resolved',
              },
              {
                status: 'On Hold',
                desc: 'Work paused pending external input or more information',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.status}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="status-workflow" className="text-2xl font-bold text-slate-900">
            Status Workflow
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {['New', 'Open', 'In Progress', 'Resolved', 'Closed'].map((s, i) => (
              <div key={s} className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                {i < 4 && (
                  <div className="hidden md:block h-1 flex-1 bg-orange-200" />
                )}
                <p className="hidden md:block font-semibold text-slate-900">{s}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="status-best-practices" className="text-2xl font-bold text-slate-900">
            Best Practices
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              • <strong>Update status regularly</strong> to keep everyone informed
            </p>
            <p className="text-slate-700">
              • <strong>Don't skip steps</strong> - follow the workflow in order
            </p>
            <p className="text-slate-700">
              • <strong>Add comments</strong> when changing status to explain why
            </p>
            <p className="text-slate-700">
              • <strong>Use On Hold cautiously</strong> - provide timeline for resumption
            </p>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
