import Link from "next/link"

export default function BonusPolicy() {
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

          <h1 className="text-4xl font-bold mb-4 text-gray-900">Bonus Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. Understanding Casino Bonuses</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Casino bonuses are promotional offers provided by AGCO-licensed online casinos to attract new players
                and reward existing ones. This comprehensive guide explains how bonuses work, their terms and
                conditions, and what you need to know before claiming any offer.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>Important:</strong> All bonus information on our site is for informational purposes only. Always
                read the complete terms and conditions on the casino's website before claiming any bonus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. Types of Casino Bonuses</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.1 Welcome Bonuses</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Welcome bonuses are offered to new players upon registration and first deposit. Common types include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>Match Bonuses:</strong> Casino matches a percentage of your deposit (e.g., 100% up to $500)
                </li>
                <li>
                  <strong>Free Spins:</strong> Complimentary spins on selected slot games
                </li>
                <li>
                  <strong>No Deposit Bonuses:</strong> Small bonuses given without requiring a deposit
                </li>
                <li>
                  <strong>Welcome Packages:</strong> Multi-deposit bonuses spread across several deposits
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.2 Ongoing Promotions</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Regular players can benefit from various ongoing promotions:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>Reload Bonuses:</strong> Bonuses on subsequent deposits
                </li>
                <li>
                  <strong>Cashback Offers:</strong> Percentage of losses returned as bonus funds
                </li>
                <li>
                  <strong>Free Spin Fridays:</strong> Weekly free spin promotions
                </li>
                <li>
                  <strong>Tournament Prizes:</strong> Rewards for participating in casino tournaments
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">2.3 VIP and Loyalty Programs</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                High-value players often receive exclusive benefits through VIP programs, including higher bonus
                percentages, faster withdrawals, and personal account managers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. Minimum Deposit Requirements</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Most bonuses require a minimum deposit to activate. Common minimum deposits in Ontario casinos include:
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                <ul className="list-disc pl-6 text-blue-800">
                  <li>
                    <strong>$10 CAD:</strong> Most common minimum for welcome bonuses
                  </li>
                  <li>
                    <strong>$20 CAD:</strong> Standard for larger bonus packages
                  </li>
                  <li>
                    <strong>$50 CAD:</strong> Premium bonuses with higher match percentages
                  </li>
                  <li>
                    <strong>$100+ CAD:</strong> VIP and high-roller bonuses
                  </li>
                </ul>
              </div>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>Payment Methods:</strong> Some bonuses may be restricted to specific payment methods. E-wallets
                like Skrill and Neteller are sometimes excluded from bonus eligibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. Wagering Requirements Explained</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Wagering requirements (also called playthrough requirements) specify how many times you must play
                through your bonus amount before you can withdraw winnings.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">4.1 How Wagering Works</h3>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                <p className="text-yellow-800 font-semibold">Example:</p>
                <p className="text-yellow-700">$100 bonus with 30x wagering requirement</p>
                <p className="text-yellow-700">Total wagering needed: $100 × 30 = $3,000</p>
                <p className="text-yellow-700">You must place $3,000 in bets before withdrawing bonus winnings</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">4.2 Common Wagering Requirements</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>20x-25x:</strong> Excellent wagering requirements
                </li>
                <li>
                  <strong>30x-35x:</strong> Good and fair requirements
                </li>
                <li>
                  <strong>40x-45x:</strong> Average industry standard
                </li>
                <li>
                  <strong>50x+:</strong> High requirements, harder to complete
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">4.3 Game Contribution Rates</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Different games contribute differently toward wagering requirements:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>Slots:</strong> Usually 100% contribution
                </li>
                <li>
                  <strong>Blackjack:</strong> Typically 10-20% contribution
                </li>
                <li>
                  <strong>Roulette:</strong> Often 10-50% contribution
                </li>
                <li>
                  <strong>Baccarat:</strong> Usually 10-20% contribution
                </li>
                <li>
                  <strong>Live Dealer Games:</strong> Varies by casino (0-50%)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. Time Restrictions and Expiry</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Casino bonuses typically have time limits for both claiming and completing wagering requirements:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.1 Claiming Deadlines</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>Welcome Bonuses:</strong> Usually 7-30 days after registration
                </li>
                <li>
                  <strong>Deposit Bonuses:</strong> Often must be claimed before making deposit
                </li>
                <li>
                  <strong>Free Spins:</strong> Typically 24-72 hours to claim
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">5.2 Wagering Deadlines</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>7 days:</strong> Short deadline for smaller bonuses
                </li>
                <li>
                  <strong>14-21 days:</strong> Standard timeframe for most bonuses
                </li>
                <li>
                  <strong>30 days:</strong> Generous deadline for large bonus packages
                </li>
                <li>
                  <strong>60+ days:</strong> Extended deadlines for VIP bonuses
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. Maximum Bet Limits</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                While playing with bonus funds, casinos typically impose maximum bet limits to prevent bonus abuse:
              </p>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                <p className="text-red-800 font-semibold">Common Maximum Bet Limits:</p>
                <ul className="list-disc pl-6 text-red-700">
                  <li>$5 CAD per spin on slots</li>
                  <li>$25 CAD per hand on table games</li>
                  <li>10% of bonus amount per bet</li>
                </ul>
                <p className="text-red-700 mt-2">
                  <strong>Warning:</strong> Exceeding bet limits may void your bonus and winnings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">7. Withdrawal Restrictions</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">7.1 Maximum Withdrawal Limits</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Some bonuses have maximum withdrawal limits on winnings:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>
                  <strong>No Deposit Bonuses:</strong> Often $100-$200 maximum withdrawal
                </li>
                <li>
                  <strong>Free Spins:</strong> Typically $50-$500 maximum withdrawal
                </li>
                <li>
                  <strong>Deposit Bonuses:</strong> Usually no withdrawal limits
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">7.2 Verification Requirements</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Before withdrawing bonus winnings, you must complete account verification:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Government-issued photo ID</li>
                <li>Proof of address (utility bill, bank statement)</li>
                <li>Payment method verification</li>
                <li>Age verification (19+ in Ontario)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">8. Restricted Games and Activities</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Certain games and betting patterns may be restricted while playing with bonus funds:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">8.1 Excluded Games</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Progressive jackpot slots</li>
                <li>Certain high RTP slots</li>
                <li>Some live dealer games</li>
                <li>Virtual sports betting</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">8.2 Prohibited Strategies</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Hedge betting (betting on opposite outcomes)</li>
                <li>Low-risk betting strategies</li>
                <li>Bonus hunting across multiple accounts</li>
                <li>Irregular betting patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">9. Bonus Terms Violations</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Violating bonus terms can result in serious consequences:
              </p>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                <p className="text-red-800 font-semibold">Potential Penalties:</p>
                <ul className="list-disc pl-6 text-red-700">
                  <li>Bonus and winnings confiscation</li>
                  <li>Account suspension or closure</li>
                  <li>Exclusion from future promotions</li>
                  <li>Forfeiture of VIP status</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">10. Tips for Bonus Success</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">10.1 Before Claiming</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Read all terms and conditions carefully</li>
                <li>Check wagering requirements and time limits</li>
                <li>Verify game restrictions and contribution rates</li>
                <li>Ensure you can meet the minimum deposit requirement</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">10.2 While Playing</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Track your wagering progress</li>
                <li>Stay within maximum bet limits</li>
                <li>Focus on high-contribution games</li>
                <li>Monitor time remaining to complete requirements</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">10.3 Responsible Bonus Use</h3>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Remember:</p>
                <ul className="list-disc pl-6 text-green-700">
                  <li>Bonuses are meant to enhance entertainment, not guarantee profits</li>
                  <li>Never deposit more than you can afford to lose</li>
                  <li>Set time and money limits before playing</li>
                  <li>Take breaks and gamble responsibly</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">11. Dispute Resolution</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                If you have issues with bonus terms or disputes with casinos:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700">
                <li>Contact the casino's customer support first</li>
                <li>Document all communications and evidence</li>
                <li>Escalate to the casino's complaints department</li>
                <li>Contact AGCO if the issue remains unresolved</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
