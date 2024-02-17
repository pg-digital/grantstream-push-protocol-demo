import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { AppMetadata } from "@/constants";
import { Metadata } from "next";

enum PageMetaData {
  Title = "Push Protocol Demo",
}

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | ${PageMetaData.Title}`,
};

export default function DemoPage() {
  return (
    <Container>
      <HeroSection title={PageMetaData.Title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </HeroSection>
    </Container>
  );
}
