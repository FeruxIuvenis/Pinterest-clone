import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PinJar",
  description: "All of the pins and jars you have and share with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
