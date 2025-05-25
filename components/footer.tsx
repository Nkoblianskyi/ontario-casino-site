import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#111111] bg-opacity-95 text-white py-6 sm:py-8 lg:py-12 mt-8 sm:mt-12 lg:mt-16">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-2 sm:mb-4 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-r from-[#e60023] to-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFD700]">OntarioCasinoSite</h3>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
              Independent comparison guide featuring only AGCO-approved operators. Play safe.
            </p>
           
          </div>
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-4">Legal</h4>
            <div className="space-y-1 sm:space-y-2">
              <Link
                href="/privacy-policy"
                className="block text-xs sm:text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="block text-xs sm:text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/bonus-policy"
                className="block text-xs sm:text-sm text-gray-400 hover:text-[#FFD700] transition-colors"
              >
                Bonus Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Organization Logos */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6 items-center justify-items-center">
            <a
                href="https://igamingontario.ca/en/operator/operators"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/igaming.webp"
                  alt="iGaming Ontario"
                  width={120}
                  height={40}
                  className="bg-white rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/gamble-aware-logo.svg"
                  alt="GambleAware"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <a
                href="https://www.responsiblegambling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/check.webp"
                  alt="RG Check"
                  width={140}
                  height={40}
                  className="bg-white rounded p-1 md:w-[140px] md:h-[80px]"
                />
              </a>

              <a
                href="https://connexontario.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/ConnexOntario_Logo_Transparent.png"
                  alt="ConnexOntario"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>
              <a
                href="https://www.gpwa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/approved_portal.gif"
                  alt="GPWA"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>

              <a
                href="https://ecogra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/ecogra_newlogo-01.png"
                  alt="Ecogra"
                  width={120}
                  height={40}
                  className="rounded p-1 md:w-[120px] md:h-[60px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Bar */}
        <div className="bg-black bg-opacity-80 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="bg-red-600 text-white px-2 py-1 rounded font-bold">19+</span>
            <a
              href="https://connexontario.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFD700] underline transition-colors"
            >
              Play Responsibly ConnexOntario.ca
            </a>
            <span className="text-white">|</span>
            <a href="tel:1-866-531-2600" className="text-white hover:text-[#FFD700] transition-colors">
              1-866-531-2600
            </a>
            <a
              href="https://www.begambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/gamble-aware-logo.svg"
                alt="BeGambleAware.org"
                className="h-4 sm:h-5"
              />
            </a>
          </div>
        </div>

        {/* Legal Text */}
        <div className="text-xs sm:text-sm text-gray-400 text-center space-y-2">
          <p>
            This site's operations are regulated by the{" "}
            <a
              href="https://www.agco.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Alcohol Gaming Commission of Ontario (AGCO)
            </a>{" "}, under an{" "}
            <a
              href="https://www.agco.ca/lottery-and-gaming/internet-gaming"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              AGCO Internet Gaming license
            </a>{" "}
            and pursuant to an{" "}
            <a
              href="https://igamingontario.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              agreement with iGaming Ontario
            </a>
            .
          </p>
          <p className="font-medium">
            <a
              href="https://connexontario.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Gambling can be addictive, please play responsibly.
            </a>
          </p>
           <p className="text-xs text-gray-400">© 2025 OntarioCasinoSite. Alle rettigheter reservert.</p>
      </div>
      
    </footer>
  )
}
