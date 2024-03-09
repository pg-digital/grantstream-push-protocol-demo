import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { APP_METADATA } from "@/constants";
import { Metadata } from "next";

const title = `${APP_METADATA.title} | Page not found`;
export const metadata: Metadata = {
  ...APP_METADATA,
  title,
};

export default function NotFoundPage() {
  return (
    <Container>
      <HeroSection title="Page not found">
        {APP_METADATA.description}
      </HeroSection>
    </Container>
  );
}
