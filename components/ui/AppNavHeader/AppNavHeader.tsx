import { Container } from "@/components/layout/Container";

export function AppNavHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 max-w-screen-2xl items-center">
        <span className="hidden" />
      </Container>
    </header>
  );
}
