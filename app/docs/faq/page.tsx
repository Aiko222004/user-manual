import { DocsLayout } from '@/components/docs/layout'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata = {
  title: 'FAQ - Ticket Management System',
  description: 'Frequently asked questions about the Ticket Management System',
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I create my first ticket?',
          a: 'Click the "Create Ticket" button in the top navigation. Fill in the required fields (Title, Description, Priority) and click "Create". For detailed instructions, see our Creating Tickets guide.',
        },
        {
          q: 'How do I log in to the system?',
          a: 'Visit the login page and enter your email and password. If you don\'t have an account, contact your administrator or check the invitation email sent to you.',
        },
        {
          q: 'Can I customize the dashboard?',
          a: 'Yes! You can rearrange widgets, hide sections, and save custom views. Click the settings icon on your dashboard to customize it.',
        },
        {
          q: 'How do I reset my password?',
          a: 'Click "Forgot Password" on the login page and follow the recovery link sent to your email.',
        },
      ],
    },
    {
      category: 'Tickets',
      questions: [
        {
          q: 'What\'s the difference between priority levels?',
          a: 'Critical: System is down or non-functional. High: Major feature is broken. Medium: Important but not blocking. Low: Nice-to-have improvements.',
        },
        {
          q: 'How do I assign a ticket to someone?',
          a: 'Open the ticket, click "Assign" in the right panel, and select a team member from the list. They\'ll be notified immediately.',
        },
        {
          q: 'Can I edit a ticket after creating it?',
          a: 'Yes! You can edit any field except the ticket ID. Click the edit icon or the field you want to change.',
        },
        {
          q: 'How do I close a ticket?',
          a: 'Change the status to "Resolved" and add a final comment explaining the resolution. Once verified, it can be marked as "Closed".',
        },
        {
          q: 'Can I attach files to tickets?',
          a: 'Yes! Scroll to the Attachments section and click "Add File" to upload screenshots, logs, or documents.',
        },
        {
          q: 'How do I link related tickets?',
          a: 'In the ticket details, find "Related Tickets" and click to search for and link other tickets.',
        },
      ],
    },
    {
      category: 'Team & Collaboration',
      questions: [
        {
          q: 'How do I mention someone in a comment?',
          a: 'Type @ followed by their name in comments. They\'ll be notified of the mention and can respond.',
        },
        {
          q: 'Can I see what my team is working on?',
          a: 'Yes! Use the "Team Activity" view or check the "Team Performance" section in the dashboard.',
        },
        {
          q: 'How do I filter tickets by assignee?',
          a: 'Click the Filters button, select "Assignee", and choose team members. You can save this view for quick access.',
        },
        {
          q: 'Can I bulk assign tickets?',
          a: 'Yes! Select multiple tickets from the list view and use the bulk action menu to assign them at once.',
        },
      ],
    },
    {
      category: 'Views & Filters',
      questions: [
        {
          q: 'How do I create a custom view?',
          a: 'Apply filters and sort settings, then click "Save View" at the top. Give it a name and it\'ll appear in your sidebar.',
        },
        {
          q: 'Can I search across all tickets?',
          a: 'Yes! Use the search bar at the top. Search by title, ID, assignee, or keywords in descriptions.',
        },
        {
          q: 'How do I filter by date range?',
          a: 'Click Filters > Date Created (or Modified), select your range, and apply. You can save date-based views.',
        },
        {
          q: 'What\'s the difference between filtering and sorting?',
          a: 'Filtering narrows down which tickets you see. Sorting arranges the visible tickets in a specific order (newest first, priority, etc.)',
        },
      ],
    },
    {
      category: 'Notifications & Alerts',
      questions: [
        {
          q: 'When will I get notified about changes?',
          a: 'You\'ll be notified when: someone assigns you a ticket, mentions you in comments, or updates a ticket you\'re watching.',
        },
        {
          q: 'How do I manage my notification settings?',
          a: 'Go to Settings > Notifications to choose which events notify you and how (email, push, in-app).',
        },
        {
          q: 'Can I watch a ticket to get updates?',
          a: 'Yes! Click "Watch" on any ticket to receive notifications about changes, even if you\'re not assigned.',
        },
      ],
    },
    {
      category: 'Admin & Settings',
      questions: [
        {
          q: 'How do I add new team members?',
          a: 'Go to Settings > User Management and click "Add User". Enter their email and select their role.',
        },
        {
          q: 'Can I change someone\'s permissions?',
          a: 'Yes! Go to Settings > Permissions and select the user. Adjust their access level and click save.',
        },
        {
          q: 'How do I back up my data?',
          a: 'Go to Settings > Backup & Recovery to download a complete backup of your tickets and data.',
        },
        {
          q: 'Can I set up automation rules?',
          a: 'Yes! Go to Settings > Automation to create rules that auto-assign, auto-tag, or auto-close tickets.',
        },
      ],
    },
    {
      category: 'Troubleshooting',
      questions: [
        {
          q: 'I can\'t see tickets that were assigned to me',
          a: 'Check your filters - you might have a filter applied. Go to Filters and click "Clear All Filters".',
        },
        {
          q: 'The system is running slowly',
          a: 'Try clearing your browser cache or using a different browser. If it persists, check your internet connection or contact support.',
        },
        {
          q: 'I got an error when creating a ticket',
          a: 'Make sure all required fields are filled. If the error persists, try refreshing the page or contact support.',
        },
        {
          q: 'My changes didn\'t save',
          a: 'Ensure you clicked the Save button. Check your internet connection and try again.',
        },
      ],
    },
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Find answers to common questions about the Ticket Management System.
          </p>
        </section>

        {faqs.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 id={section.category.toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold text-slate-900">
              {section.category}
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {section.questions.map((item, qIdx) => (
                <AccordionItem
                  key={qIdx}
                  value={`${idx}-${qIdx}`}
                  className="border border-slate-200 rounded-lg"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-slate-50 rounded-lg">
                    <span className="text-left font-semibold text-slate-900">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-700">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}

        <section className="space-y-4 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h2 id="still-need-help" className="text-2xl font-bold text-orange-900">
            Still Need Help?
          </h2>
          <p className="text-orange-800">
            If you can't find the answer to your question, please contact our support
            team. We're here to help!
          </p>
          <div className="flex gap-3">
            <a
              href="/docs/contact"
              className="inline-block px-6 py-2 bg-brand text-white rounded-lg font-medium hover:opacity-90 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/docs/troubleshooting"
              className="inline-block px-6 py-2 border border-brand text-brand rounded-lg font-medium hover:bg-brand hover:text-white transition-colors"
            >
              Troubleshooting Guide
            </a>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}
