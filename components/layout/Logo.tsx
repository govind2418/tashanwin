import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Tashanwin — Home"
      className={cn("flex items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="Tashanwin"
        width={600}
        height={120}
        priority
        className="h-9 w-auto sm:h-11"
      />
    </Link>
  );
}
