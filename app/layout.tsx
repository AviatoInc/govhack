"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Auth0Provider } from "@auth0/auth0-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Auth0Provider
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      >
        <body>{children}</body>
      </Auth0Provider>
    </html>
  );
}
