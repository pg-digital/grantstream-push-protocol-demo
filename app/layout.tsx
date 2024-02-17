import { AppMetadata } from "@/constants";
import classNames from "classnames";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: AppMetadata.TitlePrefix,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={classNames(
          GeistSans.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
