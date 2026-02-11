import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Priority Levels - Ticket Management System',
  description: 'Understanding and using priority levels',
}

export default function PriorityPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Priority Levels</h1>
          <p className="text-lg text-slate-600">
            Learn how to effectively use priority levels to organize and prioritize your
            ticket workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="priority-levels" className="text-2xl font-bold text-slate-900">
            Understanding Priority Levels
          </h2>
          <div className="space-y-4">
            {[
              {
                level: 'Critical',
                color: 'bg-red-600',
                desc: 'System is down or non-functional. Requires immediate attention.',
                examples:
                  'Database failure, complete feature outage, security breach',
              },
              {
                level: 'High',
                color: 'bg-orange-600',
                desc: 'Major feature broken or severely degraded. Blocks significant work.',
                examples: 'Login system broken, reports not generating, data corruption',
              },
              {
                level: 'Medium',
                color: 'bg-yellow-500',
                desc: 'Important feature with limited workaround. Should be addressed soon.',
                examples: 'Minor UI bugs, slow performance, missing non-critical features',
              },
              {
                level: 'Low',
                color: 'bg-green-600',
                desc: 'Nice-to-have improvements. Can be scheduled for future release.',
                examples: 'Enhancement requests, documentation updates, UI improvements',
              },
            ].map((p) => (
              <div
                key={p.level}
                className="border border-slate-200 rounded-lg p-6 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`${p.color} text-white px-4 py-2 rounded font-bold`}>
                    {p.level}
                  </div>
                  <h3 className="font-semibold text-slate-900">{p.desc}</h3>
                </div>
                <p className="text-slate-600 text-sm">
                  <strong>Examples:</strong> {p.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="setting-priority" className="text-2xl font-bold text-slate-900">
            How to Set Priority
          </h2>
          <p className="text-slate-700 leading-relaxed">
            When creating or editing a ticket, select the appropriate priority level
            based on its impact and urgency:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3 mt-4">
            <p className="text-slate-700">
              1. Open or create a ticket<br />
              2. Locate the "Priority" field<br />
              3. Select the appropriate level<br />
              4. Save or update the ticket
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="best-practices" className="text-2xl font-bold text-slate-900">
            Priority Best Practices
          </h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900">✓ Be Realistic</h4>
              <p className="text-slate-600 text-sm">
                Don't mark everything as critical. Reserve critical for true emergencies.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900">✓ Consider Impact</h4>
              <p className="text-slate-600 text-sm">
                Think about how many users are affected and how severely.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900">✓ Adjust as Needed</h4>
              <p className="text-slate-600 text-sm">
                You can change priority as situations evolve or new information emerges.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900">✓ Communicate Changes</h4>
              <p className="text-slate-600 text-sm">
                If you change a ticket's priority, add a comment explaining why.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
