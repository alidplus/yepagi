import { AuthLayout, AuthCard } from "@repo/auth";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayout>
      <AuthCard src="/fingerprint.svg">
        {children}
      </AuthCard>
    </AuthLayout>
  );
}
