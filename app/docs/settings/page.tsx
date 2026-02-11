import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Settings - Ticket Management System',
  description: 'Configure your system settings',
}

export default function SettingsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Settings</h1>
          <p className="text-lg text-slate-600">
            Configure your system to match your organization's needs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="accessing-settings" className="text-2xl font-bold text-slate-900">
            Accessing Settings
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Click the Settings icon in the sidebar or navigate to Settings from the main
            menu.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="settings-sections" className="text-2xl font-bold text-slate-900">
            Settings Sections
          </h2>
          <div className="space-y-3">
            {[
              { section: 'General', desc: 'System name, timezone, and general preferences' },
              {
                section: 'User Management',
                desc: 'Add/remove users and manage roles',
              },
              {
                section: 'Permissions',
                desc: 'Control access levels for different user roles',
              },
              {
                section: 'Categories',
                desc: 'Define ticket categories for your organization',
              },
              {
                section: 'Custom Fields',
                desc: 'Add custom fields to tickets',
              },
              {
                section: 'Workflows',
                desc: 'Define ticket status workflows',
              },
              {
                section: 'Automation',
                desc: 'Create automation rules',
              },
              {
                section: 'Assignment Rules',
                desc: 'Set up automatic ticket assignment',
              },
              {
                section: 'Notifications',
                desc: 'Configure notification preferences',
              },
              {
                section: 'Backup & Recovery',
                desc: 'Manage data backups and recovery',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.section}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
