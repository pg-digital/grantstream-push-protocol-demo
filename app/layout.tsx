import { AppThemeProvider } from "@/components/AppThemeProvider";
import { AppMetadata } from "@/constants";
import { clsx } from "clsx";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          GeistSans.className,
          "min-h-screen bg-background antialiased"
        )}
      >
        <AppThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
        </AppThemeProvider>
      </body>
    </html>
  );
}
