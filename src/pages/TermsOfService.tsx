import { useEffect } from 'react'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
      <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-gray-500 mb-10 text-sm">Last updated: May 2025</p>

      <div className="prose prose-gray max-w-none">
        <p>
          Welcome to Pressure Perfect. These Terms of Service govern your use of our website and
          services. By accessing this website or booking our services, you agree to be bound by these
          terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Services</h2>
        <p>
          Pressure Perfect provides driveway, sidewalk, and ground-level concrete cleaning services
          in and around Apex, North Carolina. All services are performed by independent student
          operators. Pricing is based on property size, surface condition, and project scope as
          determined during on-site evaluation or via the quote request form.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Quotes & Pricing</h2>
        <p>
          All quotes provided via our website or in person are estimates. Final pricing is
          determined after on-site inspection. We reserve the right to adjust pricing if the scope
          of work differs from the original description. Payment is due upon completion of services
          unless otherwise agreed.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Cancellation & Rescheduling</h2>
        <p>
          Cancellations or rescheduling requests must be made at least 24 hours in advance. Same-day
          cancellations may incur a $50 cancellation fee. Weather-related delays will be communicated
          promptly and rescheduled at no additional cost.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Satisfaction Guarantee</h2>
        <p>
          We strive for 100% customer satisfaction. If you are not satisfied with the results of our
          service, please contact us within 48 hours and we will return to address the issue at no
          additional charge.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Liability</h2>
        <p>
          Pressure Perfect exercises caution when performing services, but is not liable for pre-existing
          damage, structural defects, or surface deterioration that becomes visible only after cleaning.
          We do not perform elevated work; all services are ground-level only.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Property Access</h2>
        <p>
          By booking services, you authorize Pressure Perfect operators to access your driveway,
          sidewalk, and adjacent ground-level concrete surfaces during the scheduled service window.
          Please ensure pets, vehicles, and obstacles are removed from work areas.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. SMS & Communication</h2>
        <p>
          By submitting the contact form, you consent to receive text messages and phone calls
          regarding your service request. Message frequency varies. Standard messaging rates may
          apply. Reply STOP to opt out or HELP for assistance.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Changes to Terms</h2>
        <p>
          We may update these Terms of Service at any time. Changes will be posted on this page
          with an updated date. Continued use of our services after changes constitutes acceptance
          of the revised terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of North Carolina. Any disputes shall
          be resolved in Wake County, NC.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Contact</h2>
        <p>
          For questions about these Terms of Service, contact us at{' '}
          <a href="mailto:hello@pressureperfectco.com" className="text-pp-teal hover:underline">
            hello@pressureperfectco.com
          </a>{' '}
          or call{' '}
          <a href="tel:9842329051" className="text-pp-teal hover:underline">
            (984) 232-9051
          </a>.
        </p>
      </div>
    </div>
  )
}
