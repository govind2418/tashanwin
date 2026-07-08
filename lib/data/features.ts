import type { LucideIcon } from "lucide-react";
import { Headset, ShieldCheck, Wallet, Zap } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: Feature[] = [
  {
    title: "Fast Withdraw",
    description: "Cash out your winnings in minutes, any time of day.",
    icon: Zap,
  },
  {
    title: "24x7 Support",
    description: "A dedicated team on standby around the clock.",
    icon: Headset,
  },
  {
    title: "Secure Platform",
    description: "Bank-grade encryption keeps your account protected.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Deposit",
    description: "Top up your wallet instantly with trusted methods.",
    icon: Wallet,
  },
];
