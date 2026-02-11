import { DocsLayout } from '@/components/docs/layout'
import { AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Troubleshooting - Ticket Management System',
  description: 'Common issues and how to resolve them',
}

export default function TroubleshootingPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Troubleshooting</h1>
          <p className="text-lg text-slate-600">
            Find solutions to common problems and issues.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="common-issues" className="text-2xl font-bold text-slate-900">
            Common Issues
          </h2>
          <div className="space-y-4">
            {[
              {
                issue: 'I can\'t log in',
                solutions: [
                  'Check your email and password',
                  'Clear your browser cache and cookies',
                  'Try a different browser',
                  'Reset your password if you forgot it',
                  'Contact support if the issue persists',
                ],
              },
              {
                issue: 'Tickets are loading slowly',
                solutions: [
                  'Check your internet connection',
                  'Clear browser cache',
                  'Try disabling browser extensions',
                  'Close unused browser tabs',
                  'Try a different browser',
                ],
              },
              {
                issue: 'My changes didn\'t save',
                solutions: [
                  'Check for error messages',
                  'Ensure all required fields are filled',
                  'Check your internet connection',
                  'Try clicking Save again',
                  'Refresh the page and try again',
                ],
              },
              {
                issue: 'I\'m not receiving notifications',
                solutions: [
                  'Check notification settings',
                  'Ensure you\'ve watched the ticket',
                  'Check email spam folder',
                  'Verify your email address is correct',
                  'Try logging out and back in',
                ],
              },
              {
                issue: 'I can\'t see tickets assigned to me',
                solutions: [
                  'Check if filters are applied',
                  'Clear all filters',
                  'Verify your assignment in the ticket',
                  'Try refreshing the page',
                  'Check your user permissions',
                ],
              },
              {
                issue: 'Attachments won\'t upload',
                solutions: [
                  'Check file size limits',
                  'Try a different file format',
                  'Check your internet connection',
                  'Clear browser cache',
                  'Try a different browser',
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3 mb-4">
                  <AlertCircle size={20} className="text-brand flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-slate-900 text-lg">{item.issue}</h3>
                </div>
                <div className="ml-7">
                  <p className="text-sm font-medium text-slate-900 mb-2">Try these solutions:</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {item.solutions.map((solution, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-slate-400">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="browser-compatibility" className="text-2xl font-bold text-slate-900">
            Browser Compatibility
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Ticket Management System works best with modern browsers. We recommend:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { browser: 'Chrome', version: '90+' },
              { browser: 'Firefox', version: '88+' },
              { browser: 'Safari', version: '14+' },
              { browser: 'Edge', version: '90+' },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.browser}</h4>
                <p className="text-slate-600 text-sm">Version {item.version}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="still-stuck" className="text-2xl font-bold text-slate-900">
            Still Stuck?
          </h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <p className="text-slate-700 mb-4">
              If none of these solutions work, please contact our support team:
            </p>
            <div className="flex gap-3">
              <a
                href="/docs/contact"
                className="inline-block px-6 py-2 bg-brand text-white rounded-lg font-medium hover:opacity-90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/docs/faq"
                className="inline-block px-6 py-2 border border-brand text-brand rounded-lg font-medium hover:bg-brand hover:text-white transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
