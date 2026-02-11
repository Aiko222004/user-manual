import { DocsLayout } from '@/components/docs/layout'
import { AlertCircle, Check } from 'lucide-react'

export const metadata = {
  title: 'Creating Tickets - Bellesoft Resolve',
  description: 'Learn how to create effective support tickets in Bellesoft Resolve',
}

export default function CreatingTicketsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Creating Support Tickets
          </h1>
          <p className="text-lg text-slate-600">
            As a customer, learn how to create clear, detailed support tickets that help your support team resolve issues faster.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="getting-started" className="text-2xl font-bold text-slate-900">
            How to Create a Ticket
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Click the "Create Ticket" button on your dashboard to open the ticket form. The system will guide you through required and optional fields to ensure your request gets proper attention.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="required-fields" className="text-2xl font-bold text-slate-900">
            Required Fields
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-900 mb-2">Title *</h4>
              <p className="text-red-800 text-sm mb-3">
                A concise summary of the issue or request
              </p>
              <div className="bg-white p-3 rounded border border-red-200 text-sm">
                <p className="font-mono text-red-700">
                  ✓ Login page crashes on Firefox
                </p>
                <p className="font-mono text-slate-500 mt-1">
                  ✗ Bug in login
                </p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-900 mb-2">Description *</h4>
              <p className="text-red-800 text-sm mb-3">
                Detailed information about the issue
              </p>
              <div className="bg-white p-3 rounded border border-red-200 text-sm">
                <p className="text-slate-700 mb-2">Include:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>What happened</li>
                  <li>How to reproduce it</li>
                  <li>What you expected</li>
                  <li>Environment/browser info</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-red-900 mb-2">Priority *</h4>
              <p className="text-red-800 text-sm mb-3">
                How urgent is this ticket?
              </p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { level: 'Critical', color: 'bg-red-600', desc: 'System down' },
                  {
                    level: 'High',
                    color: 'bg-orange-600',
                    desc: 'Major feature broken',
                  },
                  {
                    level: 'Medium',
                    color: 'bg-yellow-600',
                    desc: 'Important issue',
                  },
                  { level: 'Low', color: 'bg-green-600', desc: 'Nice to have' },
                ].map((p) => (
                  <div key={p.level} className="text-center">
                    <div
                      className={`${p.color} text-white px-3 py-2 rounded text-xs font-semibold`}
                    >
                      {p.level}
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="optional-fields" className="text-2xl font-bold text-slate-900">
            Optional Fields
          </h2>
          <div className="space-y-3">
            {[
              {
                field: 'Category',
                desc: 'Categorize the ticket (e.g., Bug, Feature Request, Enhancement)',
              },
              {
                field: 'Assignee',
                desc: 'Assign to a team member who will work on it',
              },
              {
                field: 'Due Date',
                desc: 'Set a target completion date',
              },
              {
                field: 'Tags',
                desc: 'Add labels for better organization and filtering',
              },
              {
                field: 'Related Tickets',
                desc: 'Link to other related tickets for context',
              },
              {
                field: 'Attachments',
                desc: 'Upload screenshots, logs, or relevant files',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-3">
                <h4 className="font-semibold text-slate-900">{item.field}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="best-practices" className="text-2xl font-bold text-slate-900">
            Writing Effective Descriptions
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-4">
            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Be Specific</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                "When clicking 'Export to CSV' with selected filters, the file shows
                unfiltered data" is better than "Export broken"
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Include Steps to Reproduce</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                List exact steps: 1. Click Dashboard 2. Select date range 3. Apply
                filters 4. Issue occurs
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Provide Context</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Include browser version, OS, user role, or any relevant environment
                information
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Add Attachments</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Screenshots, error logs, or screen recordings help resolve issues
                faster
              </p>
            </div>

            <div>
              <div className="flex gap-2 items-start mb-2">
                <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-green-900">Set Realistic Deadlines</h4>
              </div>
              <p className="text-green-800 text-sm ml-7">
                Due dates should reflect actual complexity and team capacity
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="common-mistakes" className="text-2xl font-bold text-slate-900">
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-3">
            {[
              {
                mistake: 'Creating duplicate tickets',
                solution: 'Search for existing tickets before creating new ones',
              },
              {
                mistake: 'Leaving tickets unassigned',
                solution: 'Always assign tickets to someone immediately',
              },
              {
                mistake: 'Vague descriptions',
                solution: 'Be specific and include reproduction steps',
              },
              {
                mistake: 'Wrong priority levels',
                solution: 'Be honest about urgency; avoid marking everything critical',
              },
              {
                mistake: 'Forgetting attachments',
                solution: 'Add screenshots or logs to speed up resolution',
              },
              {
                mistake: 'Unclear titles',
                solution: 'Write titles that explain the issue at a glance',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-red-200 bg-red-50 rounded-lg p-3"
              >
                <div className="flex gap-2 items-start">
                  <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">{item.mistake}</h4>
                    <p className="text-red-800 text-sm mt-1">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="after-creation" className="text-2xl font-bold text-slate-900">
            After Creating a Ticket
          </h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">Once your ticket is created:</p>
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>You'll see a confirmation with the ticket ID</li>
              <li>The ticket appears in the system immediately</li>
              <li>Team members are notified if assigned</li>
              <li>You can add comments and attachments anytime</li>
              <li>Track progress through status updates</li>
            </ol>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
