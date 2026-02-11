import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Automation - Ticket Management System',
  description: 'Set up automation rules to save time',
}

export default function AutomationPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Automation</h1>
          <p className="text-lg text-slate-600">
            Automate repetitive tasks and save your team valuable time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="what-is-automation" className="text-2xl font-bold text-slate-900">
            What Is Automation?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Automation rules trigger actions automatically based on ticket conditions.
            This eliminates manual work and ensures consistency.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="automation-rules" className="text-2xl font-bold text-slate-900">
            Automation Rules
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Common automation rules include:
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>• Auto-assign tickets based on category</li>
            <li>• Auto-escalate critical tickets after X hours</li>
            <li>• Auto-close resolved tickets after approval</li>
            <li>• Auto-tag tickets based on keywords</li>
            <li>• Send notifications on status change</li>
            <li>• Auto-add team members to specific tickets</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 id="setting-up" className="text-2xl font-bold text-slate-900">
            Setting Up Automation
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Go to Settings &gt; Automation to create and manage your automation rules.
          </p>
        </section>
      </div>
    </DocsLayout>
  )
}
