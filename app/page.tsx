import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { AppMetadata } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | Home`,
  description: AppMetadata.Description,
};

export default function HomeLandingPage() {
  return (
    <Container>
      <HeroSection title="GrantStream">
        Funding made easy, for Web3 builders.
      </HeroSection>
    </Container>
  );
}
