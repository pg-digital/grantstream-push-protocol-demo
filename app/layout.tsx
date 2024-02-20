import { AppThemeProvider } from "@/components/providers/AppThemeProvider";
import { AppWagmiProvider } from "@/components/providers/AppWagmiProvider";
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
      <body
        className={cn(
          GeistSans.className,
          "flex items-center min-h-screen bg-background antialiased pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20"
        )}
      >
        <AppThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
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
