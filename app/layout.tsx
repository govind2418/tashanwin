import type { Metadata, Viewport } from "next";
import { Outfit, Poppins } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/constants";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { FloatingRegisterButton } from "@/components/layout/FloatingRegisterButton";
import { FloatingTelegramButton } from "@/components/layout/FloatingTelegramButton";
import { Header } from "@/components/layout/Header";
import { StickyDownloadButton } from "@/components/layout/StickyDownloadButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Tashan Win",
    "Tashanwin",
    "Tasanwin",
    "Tashan Win Login",
    "Tashan Win Register",
    "Tashan Win App",
    "Tashan Win Download",
    "Tashan Win APK",
    "Tashan Win Bonus",
    "Tashan Win Gift Code",
    "Tashan Win Referral",
    "Tashan Win VIP",
    "Tashanwin Login",
    "Tashanwin Game",
    "Tashanwin App Download",
    "Tashanwin Register",
    "Tashanwin APK",
    "online gaming India",
    "lottery app",
    "Win Go",
    "gaming platform",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "Wwgnv3BF3AtBr_5aCZwkk9MelSCrtuxflUlB2sXIWto",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-obsidian text-cream">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <StickyDownloadButton />
        <FloatingTelegramButton />
        <FloatingRegisterButton />
      </body>
    </html>
  );
}
