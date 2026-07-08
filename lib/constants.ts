export const SITE_NAME = "Tashanwin";
export const SITE_URL = "https://tasanwin.com";
export const SITE_TAGLINE = "India's Premium Gaming Platform";
export const SITE_DESCRIPTION =
  "Tashanwin is India's premium gaming platform — play, win and withdraw instantly. Fast withdrawals, secure gameplay, 24x7 support and daily rewards.";

export const TELEGRAM_URL = "https://t.me/+PQ7K-jtOfiZlYzE1";

const TASHANWIN_PLATFORM_URL =
  "https://www.tashanwin27.com/#/register?invitationCode=521834254689";

export const REGISTER_URL = TASHANWIN_PLATFORM_URL;
export const LOGIN_URL = TASHANWIN_PLATFORM_URL;
export const APK_DOWNLOAD_URL = TASHANWIN_PLATFORM_URL;
export const APK_GUIDE_URL = "/apk-guide/";

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Promotion", href: "/promotion/" },
  { label: "Download App", href: "/download-app/" },
  { label: "Gift Code", href: "/gift-code/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const FOOTER_LINK_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Contact Us", href: "/contact/" },
      { label: "Promotion", href: "/promotion/" },
      { label: "Gift Code", href: "/gift-code/" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Download App", href: "/download-app/" },
      { label: "APK Install Guide", href: "/apk-guide/" },
      { label: "Register", href: "/register/" },
      { label: "Login", href: "/login/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms/" },
      { label: "Responsible Gaming", href: "/responsible-gaming/" },
      { label: "Disclaimer", href: "/disclaimer/" },
    ],
  },
];
