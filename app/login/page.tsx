import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AuthShell } from "@/components/layout/AuthShell";
import { LoginForm } from "@/components/forms/LoginForm";

export const metadata: Metadata = buildMetadata({
  title: "Tashan Win Login",
  description:
    "Tashan Win login — sign in to your Tashanwin (Tasanwin) account and get back in the game in seconds.",
  path: "/login/",
});

export default function LoginPage() {
  return (
    <AuthShell title="Welcome Back" description="Login to continue playing on Tashanwin.">
      <LoginForm />
    </AuthShell>
  );
}
