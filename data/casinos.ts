export interface Casino {
  name: string
  url: string
  bonus: string
  rating: number
  reviews: number
  image: string
  description: string
}

export const casinos: Casino[] = [
  {
    name: "Tooniebet",
    url: " https://tooniebet.com/ca/",
    bonus: "Welcome Package: Up to $1800 + 200 Bonus Spins",
    rating: 9.5,
    reviews: 12407,
    image: "/tooniebet.png",
    description:
      "Premium casino experience with massive welcome bonuses and instant withdrawals. Over 2000 games from top providers including NetEnt, Microgaming, and Evolution Gaming.",
  },
  // {
  //   name: "Royal Vegas",
  //   url: "https://royalvegas.com/ca/",
  //   bonus: "Welcome Bonus: Up to $1200 + 120 Free Spins",
  //   rating: 9.2,
  //   reviews: 892,
  //   image: "/placeholder.svg?height=80&width=160&text=Royal+Vegas",
  //   description:
  //     "Established casino with royal treatment for all players. Enjoy exclusive VIP rewards, 24/7 support, and the biggest progressive jackpots in Ontario.",
  // },
  // {
  //   name: "Spin Casino",
  //   url: "https://spincasino.com/ca/",
  //   bonus: "Welcome Package: Up to $1000 + 100 Free Spins",
  //   rating: 9.0,
  //   reviews: 1156,
  //   image: "/placeholder.svg?height=80&width=160&text=Spin+Casino",
  //   description:
  //     "Mobile-first casino with lightning-fast gameplay. Get your bonus instantly and start spinning on 1500+ slots with the best RTPs in the industry.",
  // },
  // {
  //   name: "Jackpot City",
  //   url: "https://jackpotcity.com/ca/",
  //   bonus: "Welcome Bonus: Up to $1600 + 150 Free Spins",
  //   rating: 8.8,
  //   reviews: 2341,
  //   image: "/placeholder.svg?height=80&width=160&text=Jackpot+City",
  //   description:
  //     "Home of the biggest jackpots in Ontario. Multiple million-dollar winners every month. Your chance to become the next millionaire starts with our generous welcome package.",
  // },
  // {
  //   name: "Ruby Fortune",
  //   url: "https://rubyfortune.com/ca/",
  //   bonus: "Welcome Package: Up to $750 + 100 Free Spins",
  //   rating: 8.5,
  //   reviews: 743,
  //   image: "/placeholder.svg?height=80&width=160&text=Ruby+Fortune",
  //   description:
  //     "Elegant casino with premium bonuses and exclusive tournaments. Join our VIP program and enjoy personalized service with higher withdrawal limits.",
  // },
]
