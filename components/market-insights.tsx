import { TrendingUp, Trophy, Users, DollarSign, Zap, Target, Gift, Shield, Clock } from "lucide-react"

export function MarketInsights() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-8">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFD700] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white">
                Ontario Online Casino Market in 2025
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Since the launch of regulated online gambling in Ontario, the market has evolved rapidly. With over 50
                licensed operators and millions in monthly revenue, Ontario has become Canada's premier online gaming
                destination.
              </p>
            </div>

            {/* Market Stats */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">Market Performance</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Trophy className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">50+</h4>
                  <p className="text-xs text-gray-300">Licensed Operators</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-[#e60023] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">2M+</h4>
                  <p className="text-xs text-gray-300">Active Players</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">$500M+</h4>
                  <p className="text-xs text-gray-300">Monthly Revenue</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">24/7</h4>
                  <p className="text-xs text-gray-300">Gaming Available</p>
                </div>
              </div>
            </div>

            {/* What Makes Ontario Special */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center">
                What Makes Ontario's Market Unique
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <Target className="w-8 h-8 text-[#FFD700] mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">Strict Regulation</h4>
                  <p className="text-xs text-gray-300">
                    AGCO oversight ensures fair play, responsible gambling measures, and player protection. All
                    operators must meet stringent requirements for licensing and ongoing compliance.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <Gift className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">Competitive Bonuses</h4>
                  <p className="text-xs text-gray-300">
                    Ontario's competitive market drives operators to offer generous welcome packages, ongoing
                    promotions, and loyalty programs to attract and retain players.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <Shield className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">Player Protection</h4>
                  <p className="text-xs text-gray-300">
                    Advanced responsible gambling tools, self-exclusion options, and mandatory problem gambling
                    resources ensure player safety and wellbeing.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <Clock className="w-8 h-8 text-[#e60023] mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">Innovation Focus</h4>
                  <p className="text-xs text-gray-300">
                    Operators continuously innovate with new game releases, mobile optimization, live dealer
                    experiences, and cutting-edge technology integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
