import { AppThemeProvider } from "@/components/providers/AppThemeProvider";
import { AppWagmiProvider } from "@/components/providers/AppWagmiProvider";
import { AppNavHeader } from "@/components/ui/AppNavHeader";
import { AppMetadata } from "@/constants";
import { cn } from "@/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: AppMetadata.TitlePrefix,
  description: AppMetadata.Description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          sizes="180x180"
          rel="apple-touch-icon"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="/favicons/favicon-16x16.png"
        />
      </head>
      <body
        className={cn("bg-background antialiased m-0 p-0", GeistSans.className)}
      >
        <AppThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <AppWagmiProvider>
            <div className="flex items-center justify-center min-h-screen pt-[66px]">
              <AppNavHeader />
              <main className="flex-1 pt-10 pb-16 md:pt-12 md:pb-20 lg:pb-28">
                {children}
              </main>
            </div>
          </AppWagmiProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
