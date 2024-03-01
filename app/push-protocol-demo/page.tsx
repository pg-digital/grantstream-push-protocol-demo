import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { TeamMembers } from "@/components/ui/TeamMembers";
import { AppMetadata } from "@/constants";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const BackgroundWavesNoSSR = dynamic(
  () => import("@/components/ui/BackgroundWaves"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | Push protocol demo`,
  description: AppMetadata.Description,
};

export default function SupportDemoPage() {
  return (
    <>
      <BackgroundWavesNoSSR />
      <Container>
        <HeroSection title="Push protocol demo">
          A simple demo for GrantStream MVP to test being able to provide user
          support using Notion&apos;s web3 messaging protocol.
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
