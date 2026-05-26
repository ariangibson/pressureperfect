import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
      <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-10 text-sm">Last updated: May 2025</p>

      <div className="prose prose-gray max-w-none">
        <p>
          Pressure Perfect respects your privacy. This Privacy Policy explains how we collect, use,
          and protect your personal information when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
        <p>We collect the following information when you submit our contact form:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Name (first and last)</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Service type requested</li>
          <li>Property details you provide</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
        <p>We use your personal information solely to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Respond to your service inquiries</li>
          <li>Provide quotes and scheduling</li>
          <li>Communicate about appointments via phone, email, or SMS</li>
          <li>Send transactional messages (appointment reminders, confirmations)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Information Sharing</h2>
        <p>
          We do not sell, rent, or share your personal information with third parties for marketing
          purposes. Your information is only shared with the operators who perform the actual
          cleaning services. We may share information if required by law or to protect our legal rights.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Data Storage & Security</h2>
        <p>
          We store your information securely. While we take reasonable measures to protect your data,
          no internet transmission is 100% secure. We retain contact information for as long as
          necessary to provide services and comply with legal obligations.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Cookies & Analytics</h2>
        <p>
          This website may use basic analytics tools (such as Google Analytics) to understand website
          traffic and improve our services. These tools collect anonymous usage data and do not
          personally identify you. You can disable cookies in your browser settings.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. SMS Communication</h2>
        <p>
          By submitting our contact form and opting in to SMS communication, you consent to receive
          text messages related to your service request. Message frequency may vary. Standard message
          and data rates may apply. Reply{' '}
          <strong>HELP</strong> for assistance or <strong>STOP</strong> to opt out at any time.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
          <li>Request access to your personal data</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of SMS communications</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">8. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect personal
          information from children under 13. If you believe we have collected information from a
          child, please contact us immediately.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated date. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your personal data, contact us at{' '}
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
