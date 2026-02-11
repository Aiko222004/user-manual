import { DocsLayout } from '@/components/docs/layout'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Managing Tickets - Bellesoft Resolve',
  description: 'Learn how admins manage and resolve assigned tickets in Bellesoft Resolve',
}

export default function ManagingTicketsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Managing Assigned Tickets</h1>
          <p className="text-lg text-slate-600">
            As an admin or developer, learn how to manage and resolve tickets assigned to you by the super admin.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="ticket-assignment" className="text-2xl font-bold text-slate-900">
            About Ticket Assignment
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              Super admins assign tickets to you based on availability, expertise, and workload. Once assigned, you become responsible for:
            </p>
            <ul className="space-y-2 text-slate-700 mt-3">
              <li className="flex gap-2">
                <Check size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Investigating and diagnosing the issue</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Communicating progress to the customer</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Resolving the issue and closing the ticket</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Adding internal notes and documentation</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="working-on-tickets" className="text-2xl font-bold text-slate-900">
            Working on Assigned Tickets
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-slate-900 mb-2">1. Review the Ticket</h4>
              <p className="text-slate-700 text-sm">
                Read the customer's description, check attachments, and understand the issue fully before responding.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-slate-900 mb-2">2. Update Status</h4>
              <p className="text-slate-700 text-sm mb-2">
                Change the ticket status to indicate your progress:
              </p>
              <ul className="text-slate-700 text-sm space-y-1 ml-4">
                <li>• <strong>Open:</strong> Initial state after assignment</li>
                <li>• <strong>In Progress:</strong> You're actively working on it</li>
                <li>• <strong>On Hold:</strong> Waiting for customer response or external info</li>
                <li>• <strong>Resolved:</strong> Issue is fixed, awaiting confirmation</li>
                <li>• <strong>Closed:</strong> Customer confirmed resolution</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-slate-900 mb-2">3. Add Comments</h4>
              <p className="text-slate-700 text-sm">
                Keep the customer informed with regular updates. Use clear, professional language and provide specific information about your progress.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-slate-900 mb-2">4. Add Internal Notes</h4>
              <p className="text-slate-700 text-sm">
                Use internal notes to document your troubleshooting steps, technical details, and decisions. These are only visible to your team.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="communication" className="text-2xl font-bold text-slate-900">
            Communicating with Customers
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Be Responsive</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Acknowledge tickets quickly, even if just to say you're looking into it.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Provide Updates</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Give regular updates on progress, especially for complex or delayed issues.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Ask for Clarification</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                If you need more information from the customer, ask specific questions.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Explain Solutions</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                When resolving, explain what caused the issue and how to prevent it in future.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="reassigning" className="text-2xl font-bold text-slate-900">
            When to Request Reassignment
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you cannot resolve a ticket or need different expertise, contact your super admin to request reassignment. Add a comment explaining:
          </p>
          <ul className="space-y-2 text-slate-700 ml-4">
            <li>• Why reassignment is needed</li>
            <li>• What you've already tried</li>
            <li>• What expertise is required</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 id="closing-tickets" className="text-2xl font-bold text-slate-900">
            Resolving and Closing Tickets
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700 font-semibold">When the issue is resolved:</p>
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>Add a final comment explaining the resolution</li>
              <li>Provide any necessary steps the customer should take</li>
              <li>Update status to "Resolved"</li>
              <li>Wait for customer confirmation before fully closing</li>
              <li>Document the resolution for future reference</li>
            </ol>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
