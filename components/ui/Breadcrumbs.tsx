import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-cream/60">
      <JsonLd data={breadcrumbJsonLd(items)} />
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="size-3.5 text-gold/60" /> : null}
            {isLast ? (
              <span className="text-cream">{item.name}</span>
            ) : (
              <Link href={item.path} className="transition-colors hover:text-gold">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
