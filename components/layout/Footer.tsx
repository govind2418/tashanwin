import Link from "next/link";
import { Send } from "lucide-react";
import { FOOTER_LINK_GROUPS, SITE_DESCRIPTION, SITE_NAME, TELEGRAM_URL } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              {SITE_DESCRIPTION}
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex w-fit items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:border-gold/60 hover:text-gold"
            >
              <Send className="size-4" />
              Join us on Telegram
            </a>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
                {group.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cream/60 transition-colors hover:text-cream"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-cream/60 transition-colors hover:text-cream"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <p className="max-w-4xl text-xs leading-relaxed text-cream/50">
            Tashan Win — also searched as Tashanwin and Tasanwin — provides
            login guidance, registration, app downloads, platform information,
            promotions, rewards, support and game resources in one place.
            Whichever spelling brought you here, it leads back to the same
            account, the same wallet and the same game library.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <p className="max-w-2xl leading-relaxed">
            {SITE_NAME} is intended for users 18+. Please play responsibly. Gaming
            involves financial risk and may be habit-forming.
          </p>
        </div>
      </div>
      <div className="h-20 lg:hidden" aria-hidden />
    </footer>
  );
}
