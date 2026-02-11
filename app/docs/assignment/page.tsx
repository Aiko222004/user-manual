import { DocsLayout } from '@/components/docs/layout'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Ticket Assignment - Bellesoft Resolve',
  description: 'Learn how super admins assign tickets to development teams in Bellesoft Resolve',
}

export default function AssignmentPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Ticket Assignment</h1>
          <p className="text-lg text-slate-600">
            Understand how the super admin assigns customer tickets to your team for resolution.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="assignment-workflow" className="text-2xl font-bold text-slate-900">
            The Assignment Workflow
          </h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700 font-semibold">When a customer creates a ticket:</p>
            <ol className="space-y-3 text-slate-700 ml-4">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex-shrink-0">1</span>
                <span><strong>Ticket Created:</strong> Customer submits a support request</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex-shrink-0">2</span>
                <span><strong>Super Admin Reviews:</strong> Super admin receives the ticket in the queue</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex-shrink-0">3</span>
                <span><strong>Assignment Decision:</strong> Super admin assigns to appropriate admin/developer</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex-shrink-0">4</span>
                <span><strong>You Receive It:</strong> Ticket appears in your queue with assignment notification</span>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-brand text-white rounded-full text-sm font-bold flex-shrink-0">5</span>
                <span><strong>You Resolve It:</strong> You work on the ticket and resolve the issue</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="assignment-factors" className="text-2xl font-bold text-slate-900">
            What Determines Your Assignment?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The super admin considers several factors when assigning tickets to you:
          </p>
          <div className="space-y-3">
            {[
              { factor: 'Expertise', desc: 'Your technical skills match the issue type' },
              { factor: 'Current Workload', desc: 'You have available capacity to take on the ticket' },
              { factor: 'Specialization', desc: 'Your department or team focuses on that area' },
              { factor: 'Ticket Priority', desc: 'Critical issues may go to senior team members' },
              { factor: 'Availability', desc: 'You\'re currently online and available' },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.factor}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="receiving-assignment" className="text-2xl font-bold text-slate-900">
            When You Receive an Assignment
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">You'll Get a Notification</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                A system notification alerts you when a new ticket is assigned to you.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Review the Ticket</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Read the customer's issue, attachments, and description carefully.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Acknowledge Receipt</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Add a comment acknowledging that you've received and will work on the ticket.
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Begin Resolution</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Start investigating and working on the issue, updating status as needed.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="reassignment" className="text-2xl font-bold text-slate-900">
            If You Can't Handle the Ticket
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-slate-700 mb-3">
              If an assigned ticket is outside your expertise or you don't have the capacity:
            </p>
            <ol className="space-y-2 text-slate-700 list-decimal list-inside ml-2">
              <li>Add an internal note explaining why you cannot resolve it</li>
              <li>Mention any specific expertise or person who could help</li>
              <li>Notify your super admin about the reassignment request</li>
              <li>The super admin will make the reassignment decision</li>
            </ol>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
