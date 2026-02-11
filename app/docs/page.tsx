import { DocsLayout } from '@/components/docs/layout'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Bellesoft Resolve - User Manual',
  description: 'Complete user manual and workflow guide for Bellesoft Resolve.',
}

const quickLinks = [
  { label: 'Quick Start', href: '/docs/quick-start' },
  { label: 'Creating Tickets', href: '/docs/creating-tickets' },
  { label: 'Managing Tickets', href: '/docs/managing-tickets' },
  { label: 'Permissions', href: '/docs/permissions' },
]

export default function DocsIndex() {
  return (
    <DocsLayout>
      <div className="space-y-12">
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-brand">
            Last updated: 2026-02-10
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Bellesoft Resolve — User Manual
          </h1>
          <p className="text-lg sm:text-xl text-slate-600">
            A complete guide to ticket creation, assignment, resolution, and audit-ready support workflows for customers, admins, and super admins.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-orange-400 hover:bg-orange-50 transition-colors"
              >
                {link.label}
                <ChevronRight size={16} className="text-slate-400" />
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="overview" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Overview
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Bellesoft Resolve is a ticket management system for reporting issues, tracking progress, and communicating between customers and support teams. It is built around role-based access and a consistent workflow so every request is visible, accountable, and auditable.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Customer</h3>
              <p className="text-sm text-slate-600">
                Create and track tickets, upload attachments, and comment on updates.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Admin</h3>
              <p className="text-sm text-slate-600">
                Accept or decline work, assign tickets, update status and priority, and communicate with customers.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Super Admin</h3>
              <p className="text-sm text-slate-600">
                Manage users, systems, audit logs, and assign tickets across all admins.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-900 mb-3">System Workflow</h3>
            <ol className="space-y-2 text-slate-700">
              <li><strong>1. Customer creates a ticket:</strong> The request is submitted with details and attachments.</li>
              <li><strong>2. Super admin assigns:</strong> The ticket is routed to the best admin or developer.</li>
              <li><strong>3. Admin resolves:</strong> Work progresses through In Progress, Overdue, or Resolved.</li>
              <li><strong>4. Customer tracks:</strong> Customers receive updates and can add comments or replies.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="getting-access" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Getting Access
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Sign in</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Open your organization’s application URL.</li>
                <li>2. Use the Login page and enter email or unique full name.</li>
                <li>3. Enter your password and select Remember me if needed.</li>
              </ol>
              <p className="mt-3 text-xs text-slate-500">
                If multiple accounts share the same name, you must log in using email.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Forgot password</h3>
              <p className="text-sm text-slate-600">
                Use Forgot Password on the login page and follow the reset email to create a new password.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Customer invitation</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Open the invitation email and select Set Up Your Account.</li>
                <li>2. Enter your name and choose a password.</li>
                <li>3. Select Property and Department, then submit.</li>
              </ol>
              <p className="mt-3 text-xs text-slate-500">
                Invalid or expired links will show an invite link error page.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="ui-concepts" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Common UI Concepts
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Sidebar navigation</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Customers: View Tickets, Create Ticket, Profile, Logout</li>
                <li>Admins: Dashboard, History, Audit Logs</li>
                <li>Super Admins: Manage Admins, Customers, Systems</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Notifications</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Ticket created or updated</li>
                <li>Status or priority changed</li>
                <li>New comments or replies</li>
                <li>Assigned ticket badge for admins</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="status-priority" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Ticket Status & Priority
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Status</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>Open:</strong> Ticket submitted, waiting for action.</li>
                <li><strong>Assigned:</strong> Ticket has an assignee.</li>
                <li><strong>In Progress:</strong> Work accepted and started.</li>
                <li><strong>Overdue:</strong> Target date/time has passed.</li>
                <li><strong>Resolved:</strong> Work completed.</li>
                <li><strong>Closed:</strong> Ticket closed or declined.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Priority</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>Low:</strong> Minor impact.</li>
                <li><strong>Medium:</strong> Standard impact.</li>
                <li><strong>High:</strong> High impact.</li>
                <li><strong>Urgent:</strong> Critical impact.</li>
              </ul>
              <Link
                href="/docs/priority"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand hover:opacity-80"
              >
                Learn more about priorities
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="customer-guide" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Customer Guide
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">1) View your tickets</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Go to View Tickets / My Tickets.</li>
                <li>2. Filter by status or search by ID, title, system, or description.</li>
                <li>3. Open a ticket to see status, priority, attachments, and comments.</li>
              </ol>
              <Link href="/docs/dashboard" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
                Track tickets in the dashboard
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">2) Create a new ticket</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Go to Create Ticket.</li>
                <li>2. Enter category, system, description, and title.</li>
                <li>3. Add Steps to Reproduce for bug reports.</li>
                <li>4. Attach files (max 10MB each) and add a comment if needed.</li>
              </ol>
              <p className="mt-2 text-xs text-slate-500">
                If no active systems are available, contact support to assign systems to your account.
              </p>
              <Link href="/docs/creating-tickets" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
                Creating a ticket guide
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">3) Edit or comment on a ticket</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Open a ticket and select Edit Ticket to update fields.</li>
                <li>2. Scroll to Comments, type a message, and Post Comment.</li>
                <li>3. Use Reply to respond to a specific comment.</li>
              </ol>
              <Link href="/docs/comments" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
                Commenting guidelines
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">4) Update your profile</h3>
              <p className="text-sm text-slate-600">
                Open the account menu, choose Profile, and update your details. Profile photos must be under 10MB.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">5) View audit logs</h3>
              <p className="text-sm text-slate-600">
                Use Audit Logs to review login activity and ticket actions. Filter by action for faster search.
              </p>
              <Link href="/docs/reports" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand">
                Audit log filters
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="admin-guide" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Admin Guide (Developer/Support)
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">1) Tickets list</h3>
              <p className="text-sm text-slate-600">
                Open All Tickets, filter by status or search by ID/title, and open a ticket for details.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">2) Review a ticket</h3>
              <p className="text-sm text-slate-600">
                Confirm customer details, property, department, system, attachments, and expected resolution date/time.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">3) Accept a ticket</h3>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Open the ticket and select Accept.</li>
                <li>2. Set priority and expected resolution date/time.</li>
                <li>3. Add internal notes if required.</li>
              </ol>
              <p className="mt-2 text-xs text-slate-500">
                Accepting sets the ticket to In Progress and assigns it to an admin.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">4) Assign a ticket (Super Admin)</h3>
              <p className="text-sm text-slate-600">
                Super admins can assign tickets to any admin; the UI may display Assigned status even if stored as Open.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">5) Resolve or decline</h3>
              <p className="text-sm text-slate-600">
                Resolve when work is complete. Decline requires a reason and closes the ticket with a notification.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">6) Public vs internal comments</h3>
              <p className="text-sm text-slate-600">
                Use public comments for customer updates and internal notes for team-only context.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="super-admin" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Super Admin Management
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Manage Customers</h3>
              <p className="text-sm text-slate-600">
                Create customers, assign property/department, enable or disable accounts, and generate signup links.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Manage Admins</h3>
              <p className="text-sm text-slate-600">
                Create admin accounts and remove non-super admins when permitted.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Manage Systems</h3>
              <p className="text-sm text-slate-600">
                Add or edit systems, enable or disable them, and delete systems when required.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs/users" className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-orange-400 hover:bg-orange-50 transition-colors">
              User management
            </Link>
            <Link href="/docs/settings" className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-orange-400 hover:bg-orange-50 transition-colors">
              System settings
            </Link>
            <Link href="/docs/permissions" className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:border-orange-400 hover:bg-orange-50 transition-colors">
              Permissions & roles
            </Link>
          </div>
        </section>

        <section className="space-y-5">
          <h2 id="troubleshooting" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Troubleshooting / FAQ
          </h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">My account is not active yet</h3>
              <p>Contact a super admin to activate or approve your access.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">No active systems available</h3>
              <p>Ask support to assign at least one active system to your account.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Attachments will not upload</h3>
              <p>Confirm the file is under 10MB and is an allowed type (image/doc/pdf/xls/txt).</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900 mb-2">I cannot see a ticket</h3>
              <p>Customers see their own tickets only. Admins see assigned tickets unless they are super admins.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs/faq" className="px-4 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:opacity-90 transition-colors">
              View full FAQ
            </Link>
            <Link href="/docs/troubleshooting" className="px-4 py-2 rounded-lg border border-brand text-brand text-sm font-medium hover:bg-brand hover:text-white transition-colors">
              Troubleshooting guide
            </Link>
            <Link href="/docs/contact" className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:border-orange-400 hover:bg-orange-50 transition-colors">
              Contact support
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="next-steps" className="scroll-mt-24 text-2xl font-bold text-slate-900">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: 'Ticket Status', href: '/docs/status' },
              { label: 'Priority Levels', href: '/docs/priority' },
              { label: 'Assignment Rules', href: '/docs/assignment' },
              { label: 'Automation & Workflows', href: '/docs/workflows' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-orange-400 hover:bg-orange-50 transition-colors"
              >
                {link.label}
                <ChevronRight size={16} className="ml-auto text-slate-400" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
