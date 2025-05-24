"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#111111] bg-opacity-95 text-white py-4 sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#e60023] to-red-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
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
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#FFD700]">OntarioCasinoSite</h1>
              <p className="text-xs text-gray-400 hidden sm:block">Licensed Casino Reviews</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">
              Home
            </Link>
            <Link href="/privacy-policy" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">
              Terms
            </Link>
            <Link href="/bonus-policy" className="text-gray-300 hover:text-[#FFD700] transition-colors text-sm">
              Bonuses
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="block px-3 py-2 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="block px-3 py-2 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/bonus-policy"
              className="block px-3 py-2 text-gray-300 hover:text-[#FFD700] transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bonuses
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
