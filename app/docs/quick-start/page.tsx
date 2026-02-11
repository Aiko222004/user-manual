import { DocsLayout } from '@/components/docs/layout'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Quick Start - Bellesoft Resolve',
  description: 'Get started with Bellesoft Resolve as a customer - create and track support tickets',
}

export default function QuickStart() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Quick Start for Customers</h1>
          <p className="text-lg text-slate-600">
            Learn how to create support tickets and track their progress through resolution.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="step-1" className="text-2xl font-bold text-slate-900">
            Step 1: Log In
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              Use your credentials to log in to Bellesoft Resolve. You'll see your customer dashboard showing all your submitted tickets.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>View all your tickets at a glance</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>See ticket statuses and priorities</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Access your ticket history</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="step-2" className="text-2xl font-bold text-slate-900">
            Step 2: Create a New Ticket
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              Click the "Create Ticket" button to submit a new support request.
            </p>
            <div className="space-y-2">
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-2">Fill in the ticket details:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• <strong>Title</strong> - Brief description of your issue</li>
                  <li>• <strong>Description</strong> - Detailed explanation of the problem</li>
                  <li>• <strong>Priority</strong> - Select Critical, High, Medium, or Low</li>
                  <li>• <strong>Attachments</strong> - Upload relevant files or screenshots (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="step-3" className="text-2xl font-bold text-slate-900">
            Step 3: Submit and Track
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              After submitting your ticket, it enters the system for review and assignment.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Your ticket receives a unique ID</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Super admin reviews and assigns it to a support team member</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>You'll receive notifications when status changes</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="step-4" className="text-2xl font-bold text-slate-900">
            Step 4: Monitor Progress
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              Stay updated on your ticket's progress through the dashboard.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                { label: 'Status', desc: 'Current state of your ticket' },
                { label: 'Assigned To', desc: 'Support team member working on it' },
                { label: 'Priority', desc: 'Urgency level' },
                { label: 'Created/Updated', desc: 'Timestamp information' },
              ].map((view, i) => (
                <div key={i} className="bg-white p-3 rounded border border-slate-200">
                  <h4 className="font-semibold text-slate-900">{view.label}</h4>
                  <p className="text-sm text-slate-600">{view.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="step-5" className="text-2xl font-bold text-slate-900">
            Step 5: Communicate with Your Support Team
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              Add comments and updates to your ticket to provide additional information or ask questions.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Add comments to the ticket thread</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Attach files if more information is needed</span>
              </li>
              <li className="flex gap-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>Receive real-time notifications of team responses</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="resolution" className="text-2xl font-bold text-slate-900">
            Ticket Resolution
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              Once your support team resolves the issue, the ticket will be marked as "Resolved" and you'll receive a final notification with the resolution details.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="next-steps" className="text-2xl font-bold text-slate-900">
            Next Steps
          </h2>
          <div className="space-y-3">
            <p className="text-slate-700">For more information:</p>
            <ul className="space-y-2 text-slate-700">
              <li>• Read about <a href="/docs/creating-tickets" className="text-blue-600 hover:underline">creating tickets in detail</a></li>
              <li>• Learn how <a href="/docs/dashboard" className="text-blue-600 hover:underline">to use your dashboard</a></li>
              <li>• Check the <a href="/docs/faq" className="text-blue-600 hover:underline">FAQ</a> for common questions</li>
              <li>• <a href="/docs/contact" className="text-blue-600 hover:underline">Contact support</a> if you need help</li>
            </ul>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
