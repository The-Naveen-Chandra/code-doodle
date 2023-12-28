import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Doodle",
  description: "Code Doodle is a code editor with a twist.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/code-doodle-light.svg",
        href: "/code-doodle-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/code-doodle-dark.svg",
        href: "/code-doodle-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
