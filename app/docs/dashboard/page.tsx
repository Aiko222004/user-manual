import { DocsLayout } from '@/components/docs/layout'
import { BarChart3, Filter, Eye } from 'lucide-react'

export const metadata = {
  title: 'Dashboard - Documentation',
  description: 'Learn how to use the dashboard effectively',
}

export default function DashboardPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Dashboard</h1>
          <p className="text-lg text-slate-600">
            Your personalized hub for monitoring tickets, tracking progress, and
            staying on top of your work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="overview" className="text-2xl font-bold text-slate-900">
            Dashboard Overview
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The dashboard is your first stop when you log in. It provides a
            comprehensive view of all your tickets and team activities at a glance.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[
              {
                icon: '📊',
                title: 'Statistics',
                desc: 'View metrics like total tickets, open issues, and completion rate',
              },
              {
                icon: '📋',
                title: 'My Tickets',
                desc: 'Quick list of tickets assigned specifically to you',
              },
              {
                icon: '👥',
                title: 'Team Activity',
                desc: 'See what your team is working on and recent updates',
              },
              {
                icon: '🎯',
                title: 'Priority Queue',
                desc: 'Focus on high-priority items that need immediate attention',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="widgets" className="text-2xl font-bold text-slate-900">
            Dashboard Widgets
          </h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <BarChart3 className="text-brand flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Statistics Widget
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Shows key metrics including total open tickets, tickets resolved
                    this week, and average resolution time. Perfect for tracking team
                    performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Eye className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900">My Tickets View</h3>
                  <p className="text-slate-600 text-sm">
                    Personalized list of all tickets assigned to you. Click any
                    ticket to view details and add updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Filter className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Custom Filters
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Create custom views based on status, priority, assignee, or any
                    other criteria. Save your most-used filters for quick access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="sections" className="text-2xl font-bold text-slate-900">
            Main Dashboard Sections
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'My Assignments',
                content:
                  'Shows all tickets currently assigned to you. Filter by status, priority, or date. Each ticket is clickable to view full details.',
              },
              {
                title: 'Team Performance',
                content:
                  'Displays team metrics including resolution time, ticket volume, and team member workload. Helps with load balancing.',
              },
              {
                title: 'Recent Activity',
                content:
                  'A timeline of recent actions including new tickets, status updates, and comments across the system.',
              },
              {
                title: 'Upcoming Deadlines',
                content:
                  'Highlights tickets approaching their due dates. Stay organized and ensure nothing slips through the cracks.',
              },
              {
                title: 'Priority Queue',
                content:
                  'A focused view of urgent and high-priority tickets. Start your day by checking this section.',
              },
              {
                title: 'Quick Stats',
                content:
                  'At-a-glance numbers: total open tickets, resolved this month, average resolution time, and team capacity.',
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-slate-900 mb-2">
                  {section.title}
                </h4>
                <p className="text-slate-600 text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="customization" className="text-2xl font-bold text-slate-900">
            Customizing Your Dashboard
          </h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-4">
            <p className="text-slate-700">
              Make your dashboard work for you:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-brand font-bold">1.</span>
                <span>
                  <strong>Rearrange Widgets:</strong> Drag and drop widgets to your
                  preferred layout
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold">2.</span>
                <span>
                  <strong>Hide/Show Sections:</strong> Toggle widgets on or off based
                  on your needs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold">3.</span>
                <span>
                  <strong>Save Custom Views:</strong> Create and save filtered views
                  for quick access
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand font-bold">4.</span>
                <span>
                  <strong>Set Preferences:</strong> Choose what data matters most to
                  you
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="tips" className="text-2xl font-bold text-slate-900">
            Pro Tips
          </h2>
          <div className="space-y-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-slate-700">
                💡 <strong>Start your day with priorities:</strong> Check the
                Priority Queue first thing to focus on what matters most.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-slate-700">
                💡 <strong>Monitor team health:</strong> Regularly review Team
                Performance to catch burnout or bottlenecks early.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-slate-700">
                💡 <strong>Set up recurring views:</strong> Save your most-used
                filters as shortcuts for faster navigation.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-slate-700">
                💡 <strong>Track metrics:</strong> Use statistics to identify trends
                and improve team efficiency over time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
