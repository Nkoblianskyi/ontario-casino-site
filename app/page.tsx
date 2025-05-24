import { CasinoList } from "@/components/casino-list"
import { CasinoModal } from "@/components/casino-modal"
import { MarketInsights } from "@/components/market-insights"
import { casinos } from "@/data/casinos"
import { Shield, Gift, Gamepad2, CheckCircle, Award, Users, Clock, DollarSign, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/bg.jpg')`,
      }}
    >
      <CasinoModal />

      {/* Compact Hero Section */}
      <section className="py-2 sm:py-3 lg:py-5 animate-fadeIn">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight px-2">
              Top-Rated Online Casinos in Ontario
            </h1>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-gray-200 px-2">
              Discover fully licensed casino platforms with massive welcome bonuses and secure gameplay.
            </p>
            <div className="text-center space-y-4">
              <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed">
                Experience premium online gaming with Ontario's most trusted casino platforms. Each site undergoes
                rigorous testing for fairness, security, and player protection. Start your journey with exclusive
                welcome offers designed specifically for Canadian players.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold text-sm sm:text-base">Secured & Trusted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
                  <span className="text-[#FFD700] font-semibold text-sm sm:text-base">Ontario Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-500 font-semibold text-sm sm:text-base">19+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Rankings */}
      <section className="pb-8 sm:pb-12 lg:pb-16">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-white px-2">
            Ontario's Best Licensed Casinos
          </h2>
          <div className="max-w-6xl mx-auto">
            <CasinoList casinos={casinos} />
          </div>
        </div>
      </section>

      <MarketInsights/>

      {/* Why Choose Our Recommended Casinos */}
      <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-8">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD700] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-white">
                Why Choose Our Recommended Casinos
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 text-center">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD700] mx-auto mb-3" />
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">Trusted by Thousands</h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Over 50,000+ Ontario players trust our recommendations for safe and fair gaming.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 text-center">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mx-auto mb-3" />
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">Fast Payouts</h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Get your winnings within 24-48 hours with verified withdrawal methods.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 text-center">
                  <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-[#e60023] mx-auto mb-3" />
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">Exclusive Bonuses</h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Access special bonus offers and promotions available only through our site.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 sm:p-6 text-center">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">100% Secure</h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    All casinos use advanced SSL encryption and are regularly audited for fairness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Bonuses */}
      <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 lg:p-8">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD700] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Welcome Bonuses Explained
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Ontario players get access to world-class welcome packages. Most sites offer matched deposits and free
                spins on popular games. We compare real value, not just big numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Games */}
      <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 lg:p-8">
              <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#e60023] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Casino Games You Can Play
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Slots, blackjack, roulette, live dealers — all the essentials. Ontario-licensed casinos offer a wide
                range of titles from top providers. Expect mobile optimization and smooth gameplay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe and Regulated */}
      <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 lg:p-8">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Safe and Regulated Play
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6">
                All platforms featured here are regulated by AGCO and iGaming Ontario. We verify data encryption,
                withdrawal speed, and offer links to responsible gambling tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Choose */}
      <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 lg:p-8">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD700] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                How We Choose Casinos
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                We don't accept paid placements. Our team personally tests every casino listed, focusing on game
                library, mobile UX, support quality, and transparency of terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Playing Today */}
      <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "1s" }}>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center bg-[#111111] bg-opacity-90 rounded-lg p-4 sm:p-6 lg:p-8">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Start Playing Today
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">
                All casinos listed here are fully regulated by the Alcohol and Gaming Commission of Ontario (AGCO). They
                provide safe, fair, and enjoyable gaming environments.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                ConnexOntario.ca | 1-866-531-2600 | 19+ | Play responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
