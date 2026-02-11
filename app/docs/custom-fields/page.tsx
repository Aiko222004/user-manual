import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Custom Fields - Ticket Management System',
  description: 'Customize tickets with custom fields',
}

export default function CustomFieldsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Custom Fields</h1>
          <p className="text-lg text-slate-600">
            Extend tickets with custom fields tailored to your organization's needs.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="what-are-custom-fields" className="text-2xl font-bold text-slate-900">
            What Are Custom Fields?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Custom fields allow you to add additional information to tickets beyond the
            standard fields. This helps capture data specific to your workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="field-types" className="text-2xl font-bold text-slate-900">
            Supported Field Types
          </h2>
          <div className="space-y-3">
            {[
              {
                type: 'Text',
                desc: 'Single or multi-line text input',
              },
              {
                type: 'Number',
                desc: 'Numeric values with optional range limits',
              },
              {
                type: 'Dropdown',
                desc: 'Select from predefined options',
              },
              {
                type: 'Checkbox',
                desc: 'Boolean true/false values',
              },
              {
                type: 'Date',
                desc: 'Date picker for time-based data',
              },
              {
                type: 'User',
                desc: 'Link to team members',
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
          <h2 id="creating-fields" className="text-2xl font-bold text-slate-900">
            Creating Custom Fields
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Administrators can create custom fields in Settings &gt; Custom Fields:
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 space-y-3">
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>Click "Add Field"</li>
              <li>Give it a descriptive name</li>
              <li>Choose the field type</li>
              <li>Configure options (required, default value, etc.)</li>
              <li>Click "Create"</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="examples" className="text-2xl font-bold text-slate-900">
            Custom Field Examples
          </h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <h4 className="font-semibold text-slate-900 mb-2">Customer Account ID</h4>
              <p className="text-slate-600 text-sm">
                <strong>Type:</strong> Text | <strong>Use:</strong> Link tickets to customer accounts
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <h4 className="font-semibold text-slate-900 mb-2">Estimated Hours</h4>
              <p className="text-slate-600 text-sm">
                <strong>Type:</strong> Number | <strong>Use:</strong> Track effort for planning
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
              <h4 className="font-semibold text-slate-900 mb-2">Component Affected</h4>
              <p className="text-slate-600 text-sm">
                <strong>Type:</strong> Dropdown | <strong>Use:</strong> Organize by system component
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="best-practices" className="text-2xl font-bold text-slate-900">
            Best Practices
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              • <strong>Start minimal:</strong> Begin with essential fields only
            </p>
            <p className="text-slate-700">
              • <strong>Use clear names:</strong> Make field purposes obvious
            </p>
            <p className="text-slate-700">
              • <strong>Provide defaults:</strong> Pre-fill common values when possible
            </p>
            <p className="text-slate-700">
              • <strong>Review regularly:</strong> Remove unused fields to reduce clutter
            </p>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
