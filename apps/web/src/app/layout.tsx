import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speed Run Games",
  description: "Browser-based speedrun games",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
