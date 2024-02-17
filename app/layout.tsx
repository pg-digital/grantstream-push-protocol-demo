import { AppThemeProvider } from "@/components/providers/AppThemeProvider";
import { AppWagmiProvider } from "@/components/providers/AppWagmiProvider";
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
          disableTransitionOnChange
        >
          <AppWagmiProvider>
            <main className="flex-1">{children}</main>
          </AppWagmiProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
