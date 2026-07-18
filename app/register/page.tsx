import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AuthShell } from "@/components/layout/AuthShell";
import { RegisterForm } from "@/components/forms/RegisterForm";

export const metadata: Metadata = buildMetadata({
  title: "Tashan Win Register",
  description:
    "Tashan Win register — create your free Tashanwin (Tasanwin) account in under a minute and claim your welcome bonus.",
  path: "/register/",
});

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create Your Account"
      description="Join Tashanwin and claim your welcome bonus today."
      image="/images/tashanwin-register-screen.webp"
      imageAlt="Tashanwin app register screen"
    >
      <RegisterForm />
    </AuthShell>
  );
}
