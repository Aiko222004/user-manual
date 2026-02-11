import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Ticket Management - Documentation',
  description: 'Learn how to manage tickets effectively',
}

export default function TicketsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Ticket Management
          </h1>
          <p className="text-lg text-slate-600">
            Master the core features of ticket management and learn best practices
            for organizing your workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="what-is-ticket" className="text-2xl font-bold text-slate-900">
            What is a Ticket?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A ticket is a record that captures an issue, request, or task that needs
            to be addressed. Each ticket contains important information such as:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-3">
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Title</strong> - A concise summary of the issue</li>
              <li>• <strong>Description</strong> - Detailed information about the problem</li>
              <li>• <strong>Priority</strong> - How urgent the ticket is</li>
              <li>• <strong>Status</strong> - Current state of resolution</li>
              <li>• <strong>Assignee</strong> - Who is working on it</li>
              <li>• <strong>Due Date</strong> - Target completion date</li>
              <li>• <strong>Comments</strong> - Discussion and updates</li>
              <li>• <strong>Attachments</strong> - Related files and screenshots</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="ticket-lifecycle" className="text-2xl font-bold text-slate-900">
            Ticket Lifecycle
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="w-1 h-16 bg-slate-300 my-2" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Created</h4>
                <p className="text-slate-600">
                  Ticket is created and added to the system
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="w-1 h-16 bg-slate-300 my-2" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Open</h4>
                <p className="text-slate-600">
                  Ticket is assigned and work begins
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="w-1 h-16 bg-slate-300 my-2" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">In Progress</h4>
                <p className="text-slate-600">
                  Team member is actively working on the ticket
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div className="w-1 h-16 bg-slate-300 my-2" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Resolved</h4>
                <p className="text-slate-600">
                  Issue has been fixed and waiting for verification
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Closed</h4>
                <p className="text-slate-600">
                  Ticket is complete and archived
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="ticket-fields" className="text-2xl font-bold text-slate-900">
            Understanding Ticket Fields
          </h2>
          <div className="space-y-3">
            {[
              {
                field: 'Title',
                desc: 'Clear, concise description of the issue',
              },
              {
                field: 'Description',
                desc: 'Detailed information including steps to reproduce',
              },
              {
                field: 'Priority',
                desc: 'Urgent, High, Medium, or Low based on impact',
              },
              {
                field: 'Category',
                desc: 'Classification of the ticket type',
              },
              {
                field: 'Status',
                desc: 'Current stage of ticket resolution',
              },
              {
                field: 'Assignee',
                desc: 'Team member responsible for resolution',
              },
              {
                field: 'Due Date',
                desc: 'Target date for ticket completion',
              },
              {
                field: 'Tags',
                desc: 'Labels for easy filtering and organization',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
              >
                <h4 className="font-semibold text-slate-900">{item.field}</h4>
                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="best-practices" className="text-2xl font-bold text-slate-900">
            Best Practices
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-semibold text-green-900 mb-2">✓ Write Clear Titles</h4>
              <p className="text-green-800 text-sm">
                Be specific: "Login button not working on mobile" instead of "Bug"
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">✓ Include Reproduction Steps</h4>
              <p className="text-green-800 text-sm">
                Help others understand exactly how to encounter the issue
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">✓ Assign Immediately</h4>
              <p className="text-green-800 text-sm">
                Don't leave tickets unassigned - clarity prevents delays
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">✓ Update Regularly</h4>
              <p className="text-green-800 text-sm">
                Add comments as you progress to keep stakeholders informed
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-2">✓ Close When Done</h4>
              <p className="text-green-800 text-sm">
                Mark tickets as closed to keep your system clean and organized
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
