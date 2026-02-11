import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Comments & Updates - Ticket Management System',
  description: 'Collaborate on tickets with comments and updates',
}

export default function CommentsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Comments & Updates
          </h1>
          <p className="text-lg text-slate-600">
            Keep your team informed with clear comments and regular updates on ticket
            progress.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="adding-comments" className="text-2xl font-bold text-slate-900">
            Adding Comments
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Comments are the primary way to communicate about a ticket:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>Open the ticket you want to comment on</li>
              <li>Scroll to the "Comments" section</li>
              <li>Click in the comment box and type your message</li>
              <li>Use @ to mention team members</li>
              <li>Click "Post Comment" to share</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="comment-types" className="text-2xl font-bold text-slate-900">
            Types of Comments
          </h2>
          <div className="space-y-3">
            {[
              {
                type: 'Status Updates',
                desc: 'Inform others about progress made on the ticket',
              },
              {
                type: 'Questions',
                desc: 'Ask for clarification or more information',
              },
              {
                type: 'Solutions',
                desc: 'Share resolutions and fixes',
              },
              {
                type: 'Blockers',
                desc: 'Highlight obstacles preventing progress',
              },
              {
                type: 'Mentions',
                desc: 'Tag team members for their input',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.type}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="mentions" className="text-2xl font-bold text-slate-900">
            Mentioning Team Members
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Use @ mentions to notify specific team members:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 font-mono text-sm mt-3">
            @john has expertise in this area, can you review?
          </div>
          <p className="text-slate-600 text-sm mt-3">
            The mentioned person will be notified immediately and can respond quickly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="attachments" className="text-2xl font-bold text-slate-900">
            Adding Attachments
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Attach files to comments to provide context:
          </p>
          <ul className="space-y-2 text-slate-700 mt-4">
            <li>• Screenshots of the issue</li>
            <li>• Error logs and stack traces</li>
            <li>• Configuration files</li>
            <li>• Test cases and data</li>
            <li>• Documentation or references</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 id="comment-best-practices" className="text-2xl font-bold text-slate-900">
            Comment Best Practices
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              • <strong>Be clear and concise:</strong> Make your point without unnecessary detail
            </p>
            <p className="text-slate-700">
              • <strong>Include context:</strong> Explain what you did and why
            </p>
            <p className="text-slate-700">
              • <strong>Provide actionable information:</strong> Tell others what they should do next
            </p>
            <p className="text-slate-700">
              • <strong>Use formatting:</strong> Use bold, lists, and paragraphs for readability
            </p>
            <p className="text-slate-700">
              • <strong>Attach evidence:</strong> Include screenshots or logs to support your point
            </p>
            <p className="text-slate-700">
              • <strong>Update regularly:</strong> Keep team informed of progress
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="notification-settings" className="text-2xl font-bold text-slate-900">
            Notification Settings
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Control how you're notified about comments:
          </p>
          <div className="space-y-3 mt-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900">Watch Tickets</h4>
              <p className="text-slate-600 text-sm">
                Click "Watch" on any ticket to get notifications about all comments and
                updates
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900">Notification Preferences</h4>
              <p className="text-slate-600 text-sm">
                Go to Settings &gt; Notifications to customize when and how you're notified
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
