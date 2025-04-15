import { PropsWithChildren } from "react";
import './global.css'

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
