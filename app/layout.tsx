import type React from "react"
import type { Metadata } from "next"
import { Asap } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Asap({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Online Casinos Ontario 2025 | Licensed Casino Reviews",
  description:
    "Discover Ontario's top-rated online casinos with exclusive bonuses. All AGCO-licensed operators reviewed for safety, games, and payouts. 19+ only.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
