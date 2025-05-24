import { Star } from "lucide-react"
import type { Casino } from "@/data/casinos"

interface CasinoListProps {
  casinos: Casino[]
  compact?: boolean
}

export function CasinoList({ casinos, compact = false }: CasinoListProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 fill-[#FFD700] text-[#FFD700]" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-3 h-3 fill-[#FFD700] text-[#FFD700] opacity-50" />)
    }

    return stars
  }

  if (compact) {
    return (
      <div className="space-y-3">
        {casinos.map((casino, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3"
          >
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={casino.image || "/placeholder.svg"}
                  alt={casino.name}
                  className="h-8 w-16 object-contain bg-gray-50 rounded"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 truncate">{casino.name}</h3>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center gap-0.5">{renderStars(casino.rating)}</div>
                      <span className="font-bold text-[#FFD700] text-xs">{casino.rating}</span>
                      <span className="text-gray-500 text-xs">({casino.reviews})</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={casino.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 bg-[#e60023] hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded text-xs transition-colors"
                  >
                    Claim
                  </a>
                </div>

                {/* Bonus */}
                <div className="bg-[#FFD700] bg-opacity-20 rounded p-1.5 mt-2">
                  <p className="text-xs font-medium text-gray-800 truncate">{casino.bonus}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-2 sm:space-y-4">
      {casinos.map((casino, index) => (
        <a
          key={index}
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:scale-[1.02] transition-transform duration-500 ease-in-out"
        >
          <div
            className={`bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl border ${index === 0 ? "border-[#FFD700] border-2 shadow-[0_0_20px_rgba(255,215,0,0.3)]" : "border-gray-200"} p-1 sm:p-2 lg:p-2 hover:bg-opacity-100 transition-all duration-500 cursor-pointer relative hover:shadow-2xl hover:shadow-[#FFD700]/20`}
          >
            {/* TOP 1 Badge for first casino */}
            {index === 0 && (
              <div className="absolute -top-2 left-2 sm:-top-3 sm:left-4 bg-gradient-to-r from-[#FFD700] to-yellow-500 text-black font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs shadow-lg z-10">
                🏆 TOP 1
              </div>
            )}

            <div className="flex flex-col gap-1 sm:gap-2">
              {/* Header Row */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={casino.image || "/placeholder.svg"}
                    alt={casino.name}
                    className="h-16 w-32 sm:h-28 sm:w-56 md:h-32 md:w-64 lg:h-36 lg:w-72 object-contain bg-gray-50 rounded-lg p-1 sm:p-2"
                  />
                </div>

                {/* Title and Rating - moved to right */}
                <div className="flex-1 text-right">
                  <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                    {casino.name}
                  </h3>
                  <div className="flex items-center justify-end gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <div className="flex items-center gap-0.5 sm:gap-1">{renderStars(casino.rating)}</div>
                    <span className="font-bold text-[#FFD700] text-xs sm:text-sm md:text-base lg:text-lg">
                      {casino.rating}
                    </span>
                    <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
                      ({casino.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Bonus Highlight */}
              <div className="bg-gradient-to-r from-[#FFD700] to-yellow-500 rounded-lg p-1 sm:p-2 hover:from-yellow-400 hover:to-[#FFD700] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 relative overflow-hidden animate-gentle-shimmer">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                <div className="flex flex-col sm:flex-row items-center justify-between relative z-10 gap-1 sm:gap-0">
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-bold text-black text-xs sm:text-sm mb-0.5 sm:mb-1">🎁 Exclusive Bonus</h4>
                    <p className="text-black font-semibold text-xs sm:text-sm">{casino.bonus}</p>
                  </div>
                  <button className="bg-[#e60023] hover:bg-red-700 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 sm:ml-3 hover:scale-105 hover:shadow-lg transform animate-gentle-pulse w-full sm:w-auto">
                    Claim Bonus
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-[10px] sm:text-xs text-gray-500 border-t border-gray-200 pt-0.5 sm:pt-1">
                <p className="font-medium text-center">
                  19+ only. Please play responsibly. Gambling problem? Call 1-866-531-2600 or visit Connex Ontario. T&Cs
                  apply.
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
