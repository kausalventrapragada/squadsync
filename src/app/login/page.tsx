import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <AuthShell eyebrow="Welcome back" title="Sign in to Squad Sync" footer={<span>New here? <Link href="/register">Create an account</Link></span>}>
      <form className="stack" action="/app/dashboard">
        <Field id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <div>
          <Field id="password" label="Password" type="password" placeholder="Enter your password" autoComplete="current-password" required />
          <div className="field-action"><Link href="#">Forgot password?</Link></div>
        </div>
        <Button type="submit" className="button-full">Sign in</Button>
      </form>
    </AuthShell>
  );
}
