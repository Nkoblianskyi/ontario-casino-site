import { Star } from "lucide-react"
import type { Casino } from "@/data/casinos"

interface CasinoModalCardProps {
  casino: Casino
  isTop?: boolean
}

export function CasinoModalCard({ casino, isTop = false }: CasinoModalCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-2 h-2 fill-[#FFD700] text-[#FFD700]" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-2 h-2 fill-[#FFD700] text-[#FFD700] opacity-50" />)
    }

    return stars
  }

  return (
    <a
      href={casino.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block bg-white border-2 ${isTop ? "border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]" : "border-gray-200"} rounded-lg shadow-lg p-1 relative hover:border-[#e60023] transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl transform`}
    >
      {/* TOP 1 Badge */}
      {isTop && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-yellow-500 text-black font-bold px-3 py-1 rounded-full text-[10px] sm:text-xs shadow-lg z-10 hover:scale-110 transition-transform duration-300">
          🏆 TOP 1
        </div>
      )}

      {/* Logo */}
      <div className="text-center mb-0.5">
        <img
          src={casino.image || "/placeholder.svg"}
          alt={casino.name}
          className="h-12 sm:h-16 md:h-20 w-auto mx-auto object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <h3 className="text-[10px] sm:text-xs sm:text-sm md:text-base font-bold text-gray-900 text-center mb-0.5">
        {casino.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mb-0.5">
        <div className="flex items-center gap-0.5">{renderStars(casino.rating)}</div>
        <span className="font-bold text-[#FFD700] text-[10px] sm:text-xs">{casino.rating}</span>
        <span className="text-gray-500 text-[10px] sm:text-xs">({casino.reviews})</span>
      </div>

      {/* Bonus */}
      <div className="bg-gradient-to-r from-[#FFD700] to-yellow-500 rounded-lg p-1 mb-0.5 hover:from-yellow-400 hover:to-[#FFD700] transition-all duration-300 hover:shadow-lg relative overflow-hidden animate-gentle-shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-800"></div>
        <div className="relative z-10">
          <p className="text-black font-semibold text-[10px] sm:text-xs text-center leading-tight mb-0.5">
            {casino.bonus}
          </p>
          <button className="w-full bg-gradient-to-r from-[#e60023] to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-0.5 px-1.5 rounded-lg text-[10px] sm:text-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
            Claim Bonus
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-[10px] sm:text-xs text-gray-500 text-center mt-1 leading-tight">
        <p>19+ | T&Cs apply</p>
      </div>
    </a>
  )
}
