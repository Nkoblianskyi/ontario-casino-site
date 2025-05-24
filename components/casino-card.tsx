import { Star, ExternalLink } from "lucide-react"
import type { Casino } from "@/data/casinos"

interface CasinoCardProps {
  casino: Casino
}

export function CasinoCard({ casino }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-[#FFD700] text-[#FFD700] opacity-50" />)
    }

    return stars
  }

  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 p-6 hover:bg-opacity-100 transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <img src={casino.image || "/placeholder.svg"} alt={casino.name} className="h-10 w-auto object-contain mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">{casino.name}</h3>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 mb-1">{renderStars(casino.rating)}</div>
          <span className="font-bold text-[#FFD700] text-lg">{casino.rating}</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-gray-700 text-sm font-medium leading-relaxed">{casino.bonus}</p>
      </div>

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#e60023] to-red-600 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Claim Bonus
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  )
}
