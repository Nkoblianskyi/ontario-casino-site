"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { CasinoModalCard } from "./casino-modal-card"
import { casinos } from "@/data/casinos"

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const topCasinos = casinos.slice(0, 3)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-1 sm:p-3 animate-fadeIn">
      <div
        className={`bg-white rounded-lg w-full h-auto animate-slideUp ${topCasinos.length === 1
            ? "max-w-[95vw] sm:max-w-sm md:max-w-md"
            : topCasinos.length === 2
              ? "max-w-[95vw] sm:max-w-md md:max-w-2xl"
              : "max-w-[95vw] sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-200">
          <h2 className="text-base sm:text-xl font-bold text-gray-900 flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-[#e60023] to-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
                <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="1" />
                <line x1="22" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" />
                <line x1="4" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth="1" />
                <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" stroke="currentColor" strokeWidth="0.5" />
                <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="0.5" />
                <line x1="19.07" y1="19.07" x2="17.66" y2="17.66" stroke="currentColor" strokeWidth="0.5" />
                <line x1="6.34" y1="6.34" x2="4.93" y2="4.93" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </div>
            Exclusive Ontario Bonuses
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 p-1">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-1 sm:p-2 md:p-2">
          {/* Mobile: Vertical Stack */}
          <div className="grid grid-cols-1 gap-1 sm:gap-1 md:hidden">
            {topCasinos.map((casino, index) => (
              <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <CasinoModalCard casino={casino} isTop={index === 0} />
              </div>
            ))}
          </div>

          {/* Tablet: Show only TOP 3 in horizontal layout */}
          <div
            className={`hidden md:grid gap-1 md:gap-2 lg:gap-3 xl:gap-4 ${topCasinos.length === 1 ? "md:grid-cols-1" : topCasinos.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
              }`}
          >
            {topCasinos.map((casino, index) => (
              <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.3}s` }}>
                <CasinoModalCard casino={casino} isTop={index === 0} />
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-1">
            <p className="text-xs text-gray-600">🔒 All casinos are AGCO-licensed and regulated by iGaming Ontario</p>
            <p className="text-xs text-gray-500 mt-1">
              Gambling problem? Call 1-866-531-2600 or visit ConnexOntario.ca
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
