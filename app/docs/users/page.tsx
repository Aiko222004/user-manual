import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'User Management - Ticket Management System',
  description: 'Manage users and team members',
}

export default function UsersPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">User Management</h1>
          <p className="text-lg text-slate-600">
            Add and manage team members in your system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="adding-users" className="text-2xl font-bold text-slate-900">
            Adding Users
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Go to Settings &gt; User Management to add new team members to your system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="user-roles" className="text-2xl font-bold text-slate-900">
            User Roles
          </h2>
          <div className="space-y-3">
            {[
              { role: 'Admin', desc: 'Full access to all features and settings' },
              { role: 'Manager', desc: 'Can manage team and view reports' },
              { role: 'Agent', desc: 'Can create and manage tickets' },
              { role: 'Viewer', desc: 'Read-only access' },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900">{item.role}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="deactivating-users" className="text-2xl font-bold text-slate-900">
            Deactivating Users
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Deactivate users when they leave your team. Their assigned tickets can be
            reassigned to others.
          </p>
        </section>
      </div>
    </DocsLayout>
  )
}
