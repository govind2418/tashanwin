import type { LucideIcon } from "lucide-react";
import { Dices, Fish, Gamepad2, Ticket, Trophy, Zap } from "lucide-react";

export type GameCategory = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const GAME_CATEGORIES: GameCategory[] = [
  {
    name: "Lottery",
    description: "Quick draws with instant results and big multipliers.",
    icon: Ticket,
  },
  {
    name: "Win Go",
    description: "Predict the colour, ride the streak, win big.",
    icon: Zap,
  },
  {
    name: "Slots",
    description: "Premium reels with cinematic bonus rounds.",
    icon: Dices,
  },
  {
    name: "Sports",
    description: "Live odds across cricket, football and more.",
    icon: Trophy,
  },
  {
    name: "Fishing",
    description: "Arcade-style hunts with rising jackpots.",
    icon: Fish,
  },
  {
    name: "Casino",
    description: "Live-dealer tables with a premium finish.",
    icon: Gamepad2,
  },
];
