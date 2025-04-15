import { PropsWithChildren } from "react";

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
