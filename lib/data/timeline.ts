import type { LucideIcon } from "lucide-react";
import { LogIn, PlayCircle, UserPlus, Wallet } from "lucide-react";

export type TimelineStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "Easy Registration",
    description: "Sign up in under a minute with just your mobile number.",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Deposit",
    description: "Fund your wallet instantly through trusted local methods.",
    icon: Wallet,
  },
  {
    step: "03",
    title: "Play Games",
    description: "Explore lottery, slots, sports, casino and more.",
    icon: PlayCircle,
  },
  {
    step: "04",
    title: "Withdraw",
    description: "Cash out your winnings instantly, anytime you like.",
    icon: LogIn,
  },
];
