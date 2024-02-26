import { Container } from "@/components/layout/Container";
import { AppThemeToggle } from "@/components/providers/AppThemeToggle";

export function AppNavHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container size="full" className="flex justify-between h-[65px]">
        <nav className="flex flex-1 items-center space-x-2 justify-end">
          <AppThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
