export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohit S.",
    location: "Mumbai",
    quote:
      "Withdrawals actually land in minutes. The app feels premium compared to everything else I've tried.",
    rating: 5,
  },
  {
    name: "Ananya K.",
    location: "Bengaluru",
    quote:
      "Clean interface, fast support, and the daily cashback genuinely adds up. Easy recommendation.",
    rating: 5,
  },
  {
    name: "Vikram P.",
    location: "Delhi",
    quote:
      "Registration took less than a minute and the VIP tiers make long-term play feel rewarding.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    location: "Pune",
    quote:
      "Support answered at 2am within seconds. That alone tells you this platform is built to last.",
    rating: 5,
  },
  {
    name: "Arjun M.",
    location: "Hyderabad",
    quote:
      "The APK install guide made switching devices painless. Smooth experience end to end.",
    rating: 5,
  },
];
