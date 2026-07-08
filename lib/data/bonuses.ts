import type { LucideIcon } from "lucide-react";
import { CircleDollarSign, Crown, Gift, Users } from "lucide-react";

export type Bonus = {
  name: string;
  description: string;
  value: string;
  icon: LucideIcon;
};

export const BONUSES: Bonus[] = [
  {
    name: "Welcome Bonus",
    description: "Kick off your journey with a premium first-deposit boost.",
    value: "Up to 288%",
    icon: Gift,
  },
  {
    name: "Daily Cashback",
    description: "Get a share of your play back — every single day.",
    value: "Up to 10%",
    icon: CircleDollarSign,
  },
  {
    name: "Referral Rewards",
    description: "Invite friends and earn ongoing commission on their play.",
    value: "Lifetime Payouts",
    icon: Users,
  },
  {
    name: "VIP Rewards",
    description: "Climb the tiers for exclusive perks and priority support.",
    value: "Elite Tiers",
    icon: Crown,
  },
];
