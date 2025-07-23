import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athena App",
  description: "A list of products to manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
