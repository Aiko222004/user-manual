import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Workflows - Ticket Management System',
  description: 'Customize ticket workflows for your team',
}

export default function WorkflowsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Workflows</h1>
          <p className="text-lg text-slate-600">
            Define custom workflows to match your team's processes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="what-are-workflows" className="text-2xl font-bold text-slate-900">
            What Are Workflows?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Workflows define the states and transitions that tickets go through. Customize
            them to match your team's specific process.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="default-workflow" className="text-2xl font-bold text-slate-900">
            Default Workflow
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              New → Open → In Progress → Resolved → Closed
            </p>
            <p className="text-slate-600 text-sm">
              This is the standard ticket lifecycle. You can customize this or create
              entirely new workflows.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="custom-workflows" className="text-2xl font-bold text-slate-900">
            Creating Custom Workflows
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Go to Settings &gt; Workflows to define custom workflows for different ticket
            types or teams.
          </p>
        </section>
      </div>
    </DocsLayout>
  )
}
