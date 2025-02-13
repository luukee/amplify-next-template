// This file remains a server component (no "use client" directive)
// Server components can export metadata and have better performance
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
// Import the new client-side wrapper component
import AuthenticatorWrapper from "./components/AuthenticatorWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Use the wrapper component to handle authentication while keeping the layout server-side */}
        <AuthenticatorWrapper>
          {children}
        </AuthenticatorWrapper>
      </body>
    </html>
  );
}
