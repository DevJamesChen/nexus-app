import type { Metadata } from "next";
import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignUpForm } from "@/components/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Get started · Nexus",
  description: "Create your Nexus workspace and connect your first tool.",
};

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;

  return (
    <AuthShell
      title="Create your workspace"
      subtitle="Connect your first tool and ask your first question in minutes."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-brand transition-colors hover:text-violet-300"
          >
            Sign in
          </Link>
        </>
      }
    >
      <SignUpForm plan={plan} />
    </AuthShell>
  );
}
