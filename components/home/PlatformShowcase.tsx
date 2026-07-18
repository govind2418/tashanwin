import { ImageContentRow } from "@/components/ui/ImageContentRow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ROWS = [
  {
    eyebrow: "Unified Lobby",
    title: "One Dashboard, Every Game",
    description:
      "Aviator, Win Go, slots, lottery and live game shows — Tashanwin brings every category into a single, fast-loading home screen. No clutter, no confusing menus, just your favourite games one tap away.",
    image: "/images/tashanwin-home-screen.webp",
    alt: "Tashanwin app home screen showing Aviator promotion and game categories",
  },
  {
    eyebrow: "Win Go",
    title: "Predict, Play, Win In Seconds",
    description:
      "Pick a colour, set your stake and watch the 30-second round play out live. Win Go on Tashanwin is built for players who want fast, transparent rounds with instant payouts — no waiting, no guesswork.",
    image: "/images/tashanwin-wingo-color-prediction.webp",
    alt: "Tashanwin Win Go colour prediction game screen",
    reversed: true,
  },
  {
    eyebrow: "Wallet",
    title: "Instant Deposits & Withdrawals",
    description:
      "Your balance, updated in real time. Tashanwin's wallet is designed for speed and clarity — one-tap deposits, fast withdrawals and a transaction history you can always trust.",
    image: "/images/tashanwin-wallet-deposit-withdraw.webp",
    alt: "Tashanwin wallet screen showing balance, deposit and withdraw options",
  },
];

export function PlatformShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Inside The App"
        title="Built To Feel Premium"
        description="A closer look at the Tashanwin experience — from lobby to wallet."
        className="mb-16"
      />

      <div className="flex flex-col gap-20 sm:gap-24">
        {ROWS.map((row) => (
          <ImageContentRow key={row.title} {...row} />
        ))}
      </div>
    </section>
  );
}
