import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <AuthShell eyebrow="Start building" title="Create your Squad Sync account" footer={<span>Already have an account? <Link href="/login">Sign in</Link></span>}>
      <form className="stack" action="/onboarding">
        <Field id="name" label="Full name" placeholder="Your name" autoComplete="name" required />
        <Field id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <Field id="password" label="Password" type="password" placeholder="Create a password" autoComplete="new-password" required />
        <Field id="confirm-password" label="Confirm password" type="password" placeholder="Repeat your password" autoComplete="new-password" required />
        <p className="legal-copy">By creating an account, you agree to use Squad Sync respectfully and keep your project information accurate.</p>
        <Button type="submit" className="button-full">Create account</Button>
      </form>
    </AuthShell>
  );
}
