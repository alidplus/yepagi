import { AuthCardTemp, AuthLayoutTemp } from "@repo/ui/templates";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthLayoutTemp>
      <AuthCardTemp src="/fingerprint.svg">
        {children}
      </AuthCardTemp>
    </AuthLayoutTemp>
  );
}
