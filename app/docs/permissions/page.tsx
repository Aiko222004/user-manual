import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Permissions - Ticket Management System',
  description: 'Manage user permissions and access control',
}

export default function PermissionsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Permissions</h1>
          <p className="text-lg text-slate-600">
            Control what users can see and do in the system.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="role-based-access" className="text-2xl font-bold text-slate-900">
            Role-Based Access Control
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Users have different permission levels based on their assigned roles.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="permission-matrix" className="text-2xl font-bold text-slate-900">
            Permission Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Action</th>
                  <th className="px-4 py-2 text-center font-semibold">Admin</th>
                  <th className="px-4 py-2 text-center font-semibold">Manager</th>
                  <th className="px-4 py-2 text-center font-semibold">Agent</th>
                  <th className="px-4 py-2 text-center font-semibold">Viewer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { action: 'Create Tickets', admin: '✓', manager: '✓', agent: '✓', viewer: '✗' },
                  {
                    action: 'Edit Any Ticket',
                    admin: '✓',
                    manager: '✓',
                    agent: '⊘',
                    viewer: '✗',
                  },
                  {
                    action: 'Delete Tickets',
                    admin: '✓',
                    manager: '✗',
                    agent: '✗',
                    viewer: '✗',
                  },
                  {
                    action: 'View Reports',
                    admin: '✓',
                    manager: '✓',
                    agent: '⊘',
                    viewer: '✗',
                  },
                  {
                    action: 'Manage Users',
                    admin: '✓',
                    manager: '✗',
                    agent: '✗',
                    viewer: '✗',
                  },
                  {
                    action: 'Change Settings',
                    admin: '✓',
                    manager: '⊘',
                    agent: '✗',
                    viewer: '✗',
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="px-4 py-2 font-medium">{row.action}</td>
                    <td className="px-4 py-2 text-center">{row.admin}</td>
                    <td className="px-4 py-2 text-center">{row.manager}</td>
                    <td className="px-4 py-2 text-center">{row.agent}</td>
                    <td className="px-4 py-2 text-center">{row.viewer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            ✓ = Full access | ⊘ = Limited access | ✗ = No access
          </p>
        </section>
      </div>
    </DocsLayout>
  )
}
