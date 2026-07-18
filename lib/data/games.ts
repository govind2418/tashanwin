export type GameCategory = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const GAME_CATEGORIES: GameCategory[] = [
  {
    name: "Aviator",
    description: "Cash out mid-flight — the higher it climbs, the bigger the win.",
    image: "/images/tashanwin-aviator-crash-game.webp",
    alt: "Tashanwin Aviator crash game",
  },
  {
    name: "Win Go",
    description: "Predict the colour, ride the streak, win big.",
    image: "/images/tashanwin-mini-games.webp",
    alt: "Tashanwin Win Go mini game",
  },
  {
    name: "Slots",
    description: "Premium reels with cinematic bonus rounds.",
    image: "/images/tashanwin-slots-game.webp",
    alt: "Tashanwin slots game",
  },
  {
    name: "Cricket",
    description: "Live odds across cricket, football and more.",
    image: "/images/tashanwin-cricket-betting-game.webp",
    alt: "Tashanwin cricket betting game",
  },
  {
    name: "Fishing",
    description: "Arcade-style hunts with rising jackpots.",
    image: "/images/tashanwin-fishing-arcade-game.webp",
    alt: "Tashanwin fishing arcade game",
  },
  {
    name: "Roulette",
    description: "Live-dealer tables with a premium finish.",
    image: "/images/tashanwin-roulette-game.webp",
    alt: "Tashanwin roulette game",
  },
  {
    name: "Lottery",
    description: "Quick draws with instant results and big multipliers.",
    image: "/images/tashanwin-lottery-game.webp",
    alt: "Tashanwin lottery game",
  },
  {
    name: "Live TV",
    description: "Watch-and-win game shows streamed straight to your lobby.",
    image: "/images/tashanwin-live-tv-games.webp",
    alt: "Tashanwin live TV game show",
  },
];
