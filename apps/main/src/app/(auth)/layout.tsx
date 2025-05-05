import { AuthCard } from "@/components/auth/AuthCard";
import AuthLayout from "@/components/auth/AuthLayout";

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
