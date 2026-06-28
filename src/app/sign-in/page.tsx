import type { Metadata } from "next";
import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign in · Nexus",
  description: "Sign in to your Nexus workspace.",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Nexus workspace."
      footer={
        <>
          New to Nexus?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-brand transition-colors hover:text-violet-300"
          >
            Create an account
          </Link>
        </>
      }
    >
      <SignInForm />
    </AuthShell>
  );
}
