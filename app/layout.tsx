import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harvard Public Schools - Every Student, Every Day",
  description: "Welcome to Harvard Public Schools. Dynamic learning, inclusive community, every student thrives.",
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
