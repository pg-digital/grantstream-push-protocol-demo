import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { AppMetadata } from "@/constants";
import { Metadata } from "next";

enum PageMetaData {
  Title = "Page not found",
}

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | ${PageMetaData.Title}`,
  description: AppMetadata.Description,
};

export default function NotFoundPage() {
  return (
    <Container>
      <HeroSection title={PageMetaData.Title}>
        {AppMetadata.Description}
      </HeroSection>
    </Container>
  );
}
