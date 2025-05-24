import Link from "next/link"

export default function TermsOfService() {
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

          <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                By accessing and using OntarioCasinoSite.com (the "Website"), you accept and agree to be bound by the
                terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our casino
                comparison and information service.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service. We reserve the right to
                modify these terms at any time, and such modifications shall be effective immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Age Restriction and Eligibility</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>You must be 19 years of age or older to use this website.</strong> This age requirement is in
                accordance with Ontario gambling laws and regulations set by the Alcohol and Gaming Commission of
                Ontario (AGCO).
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">By using this site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>You are at least 19 years old</li>
                <li>You are legally permitted to access gambling-related content in your jurisdiction</li>
                <li>You are not located in a jurisdiction where online gambling is prohibited</li>
                <li>You are not on any self-exclusion lists</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Nature of Our Service</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">3.1 Information Service</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                OntarioCasinoSite.com is an independent comparison and review website. We provide information about
                AGCO-licensed online casinos operating legally in Ontario. We do not operate any gambling services
                ourselves.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">3.2 Affiliate Relationships</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We maintain affiliate relationships with some of the casinos we review. When you click on links to these
                casinos and make a deposit, we may receive a commission. This does not affect our review process or
                rankings, which are based on objective criteria.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">3.3 No Gambling Services</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We do not provide gambling services, accept bets, or facilitate any gambling transactions. All gambling
                activities occur on the licensed casino websites we link to.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Accuracy of Information</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                While we strive to provide accurate and up-to-date information about casino bonuses, terms, and
                conditions, we cannot guarantee the accuracy of all information at all times. Casino terms and bonuses
                change frequently.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>
                  Always verify bonus terms and conditions directly with the casino before making any deposits.
                </strong>{" "}
                We are not responsible for any discrepancies between information on our site and the actual terms
                offered by casinos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Responsible Gambling</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We are committed to promoting responsible gambling. Gambling should be entertaining and never interfere
                with your daily life, relationships, or financial stability.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.1 Warning Signs</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                If you experience any of the following, please seek help immediately:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Gambling with money you cannot afford to lose</li>
                <li>Chasing losses with bigger bets</li>
                <li>Lying about gambling activities</li>
                <li>Neglecting work, family, or other responsibilities</li>
                <li>Borrowing money to gamble</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.2 Help Resources</h3>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-800 font-semibold">If you have a gambling problem:</p>
                <p className="text-red-700">Call ConnexOntario: 1-866-531-2600</p>
                <p className="text-red-700">Visit: ConnexOntario.ca</p>
                <p className="text-red-700">24/7 confidential support available</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Website Availability</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We do not guarantee uninterrupted access to our website. We may suspend, withdraw, or restrict access to
                all or any part of our site for business and operational reasons, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Scheduled maintenance and updates</li>
                <li>Technical difficulties or server issues</li>
                <li>Security concerns</li>
                <li>Legal or regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">7. User Conduct</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use the site for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper working of the website</li>
                <li>Use automated systems to access the site</li>
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Post false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">8. Limitation of Liability</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, OntarioCasinoSite.com shall not be liable for any direct,
                indirect, incidental, special, or consequential damages resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Use or inability to use our website</li>
                <li>Reliance on information provided on our site</li>
                <li>Interactions with third-party casino websites</li>
                <li>Any gambling losses or activities</li>
                <li>Technical issues or website downtime</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">9. Governing Law</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of Ontario, Canada. Any
                disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of
                Ontario.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
