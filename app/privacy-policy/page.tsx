import Link from "next/link"

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#e60023] hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Introduction</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                OntarioCasinoSite.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                and use our services. This policy applies to all users of our Ontario-focused casino comparison
                platform.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                By accessing or using our website, you agree to the collection and use of information in accordance with
                this Privacy Policy. If you do not agree with our policies and practices, do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.1 Personal Information</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name and contact information (email address, phone number)</li>
                <li>Age verification information (to ensure 19+ compliance)</li>
                <li>Newsletter subscription preferences</li>
                <li>Customer service communications</li>
                <li>Survey responses and feedback</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.2 Automatically Collected Information</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                When you visit our website, we automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Device information (mobile, tablet, desktop)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Cookies and Tracking Technologies</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We use cookies, web beacons, and similar tracking technologies to enhance your browsing experience:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">3.1 Essential Cookies</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                These cookies are necessary for the website to function properly and cannot be disabled.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">3.2 Analytics Cookies</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We use Google Analytics and similar services to understand how visitors interact with our site, helping
                us improve user experience and content relevance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">3.3 Marketing Cookies</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                These cookies help us deliver relevant advertisements and measure the effectiveness of our marketing
                campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. How We Use Your Information</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Provide and maintain our casino comparison services</li>
                <li>Verify age compliance (19+ requirement for Ontario)</li>
                <li>Send newsletters and promotional communications (with consent)</li>
                <li>Respond to customer service inquiries</li>
                <li>Improve website functionality and user experience</li>
                <li>Conduct research and analytics</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Detect and prevent fraud or security breaches</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Information Sharing and Disclosure</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information in
                the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.1 Affiliate Partners</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                When you click on casino links, we may share anonymous data with our AGCO-licensed casino partners for
                commission tracking purposes.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.2 Service Providers</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We work with trusted third-party service providers for analytics, email marketing, and website hosting.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.3 Legal Requirements</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We may disclose information when required by law, court order, or to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Data Security</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>SSL encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">7. Your Rights and Choices</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Under applicable privacy laws, you have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access: Request a copy of your personal information</li>
                <li>Correction: Request correction of inaccurate information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Opt-out: Unsubscribe from marketing communications</li>
                <li>Data portability: Request transfer of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">8. Contact Information</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
