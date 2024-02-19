import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { TeamMembers } from "@/components/ui/TeamMembers";
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
        A simple demo for GrantStream MVP to test being able to provide user
        support using Notion&apos;s web3 messaging protocol.
      </HeroSection>

      <div className="flex justify-center">
        <div className="w-full max-w-[620px]">
          <TeamMembers />
        </div>
      </div>
    </Container>
  );
}
