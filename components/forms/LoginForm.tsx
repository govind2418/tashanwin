import { ArrowRight, ShieldCheck } from "lucide-react";
import { LOGIN_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-amber/10 text-gold">
        <ShieldCheck className="size-7" />
      </div>
      <p className="text-sm leading-relaxed text-cream/60">
        For your security, login happens directly on the official Tashanwin
        platform. Tap below to continue.
      </p>
      <Button
        href={LOGIN_URL}
        variant="primary"
        size="lg"
        className="w-full"
        icon={<ArrowRight className="size-5" />}
      >
        Continue to Tashanwin
      </Button>
    </div>
  );
}
