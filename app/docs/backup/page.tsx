import { DocsLayout } from '@/components/docs/layout'

export const metadata = {
  title: 'Backup & Recovery - Ticket Management System',
  description: 'Backup and restore your data',
}

export default function BackupPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Backup & Recovery</h1>
          <p className="text-lg text-slate-600">
            Protect your data with regular backups and recovery options.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="automatic-backups" className="text-2xl font-bold text-slate-900">
            Automatic Backups
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Your system is automatically backed up daily. We retain backups for 30 days,
            allowing you to restore from any point in that period.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="manual-backups" className="text-2xl font-bold text-slate-900">
            Manual Backups
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Create manual backups anytime by going to Settings &gt; Backup &amp; Recovery and
            clicking &quot;Download Backup&quot;.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="restoring-data" className="text-2xl font-bold text-slate-900">
            Restoring Data
          </h2>
          <p className="text-slate-700 leading-relaxed">
            To restore from a backup:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3 mt-4">
            <ol className="space-y-2 text-slate-700 list-decimal list-inside">
              <li>Go to Settings &gt; Backup &amp; Recovery</li>
              <li>Select the backup date you want to restore</li>
              <li>Click &quot;Restore&quot;</li>
              <li>Confirm the restoration</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="data-retention" className="text-2xl font-bold text-slate-900">
            Data Retention Policy
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 space-y-3">
            <p className="text-slate-700">
              • <strong>Active data:</strong> Kept indefinitely until manually deleted
            </p>
            <p className="text-slate-700">
              • <strong>Backups:</strong> Retained for 30 days
            </p>
            <p className="text-slate-700">
              • <strong>Deleted data:</strong> Permanently removed after 30 days in trash
            </p>
            <p className="text-slate-700">
              • <strong>Audit logs:</strong> Kept for 90 days
            </p>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
