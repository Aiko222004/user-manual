import { DocsLayout } from '@/components/docs/layout'
import { Mail, MessageSquare, Phone } from 'lucide-react'

export const metadata = {
  title: 'Contact Support - Ticket Management System',
  description: 'Get in touch with our support team',
}

export default function ContactPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Support</h1>
          <p className="text-lg text-slate-600">
            We're here to help! Get in touch with our support team for assistance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 id="support-channels" className="text-2xl font-bold text-slate-900">
            Support Channels
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Mail size={32} className="text-brand mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Email Support</h3>
              <p className="text-slate-600 text-sm mb-4">
                For detailed inquiries and issues requiring thorough documentation
              </p>
              <a
                href="mailto:support@ticketsystem.com"
                className="text-brand hover:underline font-medium"
              >
                support@ticketsystem.com
              </a>
              <p className="text-xs text-slate-500 mt-2">Response time: 2-4 hours</p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <MessageSquare size={32} className="text-green-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Live Chat</h3>
              <p className="text-slate-600 text-sm mb-4">
                Quick answers and instant assistance from our support team
              </p>
              <button className="text-green-600 hover:underline font-medium">
                Start Chat
              </button>
              <p className="text-xs text-slate-500 mt-2">
                Available: Mon-Fri 9AM-6PM EST
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Phone size={32} className="text-purple-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Phone Support</h3>
              <p className="text-slate-600 text-sm mb-4">
                For urgent issues and direct assistance
              </p>
              <a href="tel:+18003334444" className="text-purple-600 hover:underline font-medium">
                +1-800-333-4444
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Available: Mon-Fri 9AM-9PM EST
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="contact-form" className="text-2xl font-bold text-slate-900">
            Send us a Message
          </h2>
          <form className="space-y-4 max-w-2xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-900 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-slate-900 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select a category</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="account">Account Issue</option>
                <option value="technical">Technical Support</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-900 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Please provide as much detail as possible..."
                required
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-brand text-white rounded-lg font-medium hover:opacity-90 transition-colors"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        <section className="space-y-4">
          <h2 id="response-times" className="text-2xl font-bold text-slate-900">
            Response Times
          </h2>
          <div className="space-y-2">
            {[
              {
                priority: 'Critical',
                desc: 'System is down or non-functional',
                time: '1 hour',
              },
              {
                priority: 'High',
                desc: 'Major feature is broken',
                time: '4 hours',
              },
              {
                priority: 'Medium',
                desc: 'Features working but degraded',
                time: '8 hours',
              },
              {
                priority: 'Low',
                desc: 'General inquiries and feature requests',
                time: '24 hours',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border border-slate-200 rounded-lg p-4"
              >
                <div>
                  <h4 className="font-semibold text-slate-900">{item.priority}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 id="resources" className="text-2xl font-bold text-slate-900">
            Self-Help Resources
          </h2>
          <p className="text-slate-700">
            Before contacting support, try these resources:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Documentation',
                desc: 'Browse our comprehensive user manual',
                link: '/docs',
              },
              {
                title: 'FAQ',
                desc: 'Find answers to common questions',
                link: '/docs/faq',
              },
              {
                title: 'Video Tutorials',
                desc: 'Watch step-by-step guides',
                link: 'https://youtube.com',
              },
              {
                title: 'Community Forum',
                desc: 'Ask questions and help others',
                link: 'https://community.ticketsystem.com',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="border border-slate-200 rounded-lg p-4 hover:shadow-md hover:border-orange-300 transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h2 id="sla" className="text-2xl font-bold text-orange-900 mb-4">
            Service Level Agreement
          </h2>
          <p className="text-orange-800 mb-4">
            We're committed to providing excellent support. Our SLA guarantees:
          </p>
          <ul className="space-y-2 text-orange-800">
            <li className="flex gap-2">
              <span>✓</span>
              <span>
                <strong>99.9% uptime</strong> for our platform
              </span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>
                <strong>24/7 emergency support</strong> for critical issues
              </span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>
                <strong>Response within 1 hour</strong> for all critical issues
              </span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>
                <strong>Monthly platform status</strong> reports
              </span>
            </li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  )
}
