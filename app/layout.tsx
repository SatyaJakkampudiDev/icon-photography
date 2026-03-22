import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Icon Photography | Capturing Life's Precious Moments",
  description: "Professional photography services specializing in weddings, pre-weddings, fashion, traditional events, and family portraits.",
  keywords: ["photography", "wedding photography", "portrait photography", "fashion photography", "traditional photography", "family photography"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
