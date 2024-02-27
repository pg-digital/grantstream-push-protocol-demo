import { Container } from "@/components/layout/Container";
import { AppThemeToggle } from "@/components/providers/AppThemeToggle";
import { Button } from "@/components/ui/Button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { TwitterIcon } from "../SVGIcons";

function CalendlyLinkButton() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="https://calendly.com/grantstream/intro-call" target="_blank">
        <Calendar className="h-4 w-4" />
      </Link>
    </Button>
  );
}

function TwitterLinkButton() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="https://twitter.com/TeamGrantStream" target="_blank">
        <TwitterIcon className="h-3 w-3" />
      </Link>
    </Button>
  );
}

export function AppNavHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container size="full" className="flex justify-between h-[65px]">
        <nav className="flex flex-1 items-center space-x-1 justify-end">
          <CalendlyLinkButton />
          <TwitterLinkButton />
          <AppThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
