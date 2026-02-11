import { DocsLayout } from '@/components/docs/layout'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Installation - Ticket Management System',
  description: 'Installation and setup guide',
}

export default function InstallationPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Installation</h1>
          <p className="text-lg text-slate-600">
            Get the Ticket Management System installed and configured for your team.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="requirements" className="text-2xl font-bold text-slate-900">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-3">Server Requirements</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Node.js 16.0 or higher</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>MongoDB 4.4 or higher</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>2GB RAM minimum</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>5GB storage minimum</span>
                </li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-3">Supported Browsers</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Chrome 90+</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Firefox 88+</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Safari 14+</span>
                </li>
                <li className="flex gap-2">
                  <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Edge 90+</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="installation-steps" className="text-2xl font-bold text-slate-900">
            Installation Steps
          </h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Download the System',
                content: 'Download the latest version from our releases page or use git to clone the repository:',
                code: 'git clone https://github.com/yourcompany/ticket-system.git',
              },
              {
                step: 2,
                title: 'Install Dependencies',
                content: 'Navigate to the project directory and install required packages:',
                code: 'npm install',
              },
              {
                step: 3,
                title: 'Configure Database',
                content: 'Create a MongoDB database and update your connection string in the environment configuration:',
                code: 'MONGODB_URI=mongodb://localhost:27017/ticket-system',
              },
              {
                step: 4,
                title: 'Configure Environment',
                content: 'Create a .env file and add required environment variables:',
                code: 'NODE_ENV=production\nPORT=3000\nJWT_SECRET=your_secret_key',
              },
              {
                step: 5,
                title: 'Initialize Database',
                content: 'Run the initialization script to set up database collections:',
                code: 'npm run init-db',
              },
              {
                step: 6,
                title: 'Start the Server',
                content: 'Start the application server:',
                code: 'npm start',
              },
              {
                step: 7,
                title: 'Create Admin Account',
                content:
                  'Navigate to http://localhost:3000 and create your first admin account',
              },
            ].map((item) => (
              <div key={item.step} className="border border-slate-200 rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-700 mb-3">{item.content}</p>
                {item.code && (
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <code>{item.code}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="configuration" className="text-2xl font-bold text-slate-900">
            Configuration
          </h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Email Configuration</h4>
              <p className="text-slate-600 text-sm mb-3">
                Set up email notifications for ticket updates:
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-xs">
                SMTP_HOST=smtp.gmail.com<br />
                SMTP_PORT=587<br />
                SMTP_USER=your-email@gmail.com<br />
                SMTP_PASSWORD=your-app-password
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Security Configuration</h4>
              <p className="text-slate-600 text-sm mb-3">
                Configure security settings:
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-xs">
                JWT_SECRET=your-secret-key<br />
                PASSWORD_MIN_LENGTH=8<br />
                SESSION_TIMEOUT=3600<br />
                ENABLE_2FA=true
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">Integration Configuration</h4>
              <p className="text-slate-600 text-sm mb-3">
                Enable integrations with external services:
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-200 font-mono text-xs">
                SLACK_WEBHOOK_URL=your-webhook-url<br />
                GITHUB_TOKEN=your-github-token<br />
                ZAPIER_ENABLED=true
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="post-installation" className="text-2xl font-bold text-slate-900">
            Post-Installation
          </h2>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">✓ Verify Installation</h4>
              <p className="text-green-800 text-sm">
                Check that the system is running by visiting http://localhost:3000
                and logging in with your admin account.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">✓ Add Team Members</h4>
              <p className="text-green-800 text-sm">
                Go to Settings &gt; User Management to add team members and assign roles.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">✓ Configure Settings</h4>
              <p className="text-green-800 text-sm">
                Customize your system by going to Settings to configure categories,
                priority levels, and custom fields.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2">✓ Set Up Backups</h4>
              <p className="text-green-800 text-sm">
                Schedule regular backups in Settings &gt; Backup & Recovery to protect
                your data.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="troubleshooting" className="text-2xl font-bold text-slate-900">
            Installation Troubleshooting
          </h2>
          <div className="space-y-3">
            {[
              {
                issue: 'Database connection failed',
                solution:
                  'Verify MongoDB is running and your connection string is correct',
              },
              {
                issue: 'Port already in use',
                solution: 'Change the PORT in your .env file or kill the process using the port',
              },
              {
                issue: 'Dependencies installation fails',
                solution: 'Delete node_modules and pnpm-lock.yaml, then run npm install again',
              },
              {
                issue: 'Email not sending',
                solution: 'Check your SMTP configuration and ensure credentials are correct',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-slate-900">{item.issue}</h4>
                <p className="text-slate-600 text-sm mt-1">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="support" className="text-2xl font-bold text-slate-900">
            Need Help?
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-slate-700 mb-4">
              If you encounter any issues during installation, our support team is here
              to help:
            </p>
            <div className="flex gap-3">
              <a
                href="/docs/contact"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/docs/faq"
                className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
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
