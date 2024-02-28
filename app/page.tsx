import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { TeamMembers } from "@/components/ui/TeamMembers";
import { AppMetadata } from "@/constants";
import { Metadata } from "next";
import dynamic from "next/dynamic";

enum PageMetaData {
  Title = "Push protocol demo",
}

const BackgroundWavesNoSSR = dynamic(
  () => import("@/components/ui/BackgroundWaves"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | ${PageMetaData.Title}`,
  description: AppMetadata.Description,
};

export default function DemoPage() {
  return (
    <>
      <BackgroundWavesNoSSR />
      <Container>
        <HeroSection title={PageMetaData.Title}>
          {AppMetadata.Description}
        </HeroSection>

        <div className="flex justify-center">
          <Container size="small" padding="none">
            <TeamMembers />
          </Container>
        </div>
      </Container>
    </>
  );
}
