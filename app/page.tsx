import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { AppMetadata, LogoMetadata } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | Home`,
  description: AppMetadata.Description,
};

function HeroLogoImage() {
  return (
    <Image
      priority
      quality={100}
      alt={LogoMetadata.Alt}
      src={LogoMetadata.Src}
      width={LogoMetadata.Width}
      height={LogoMetadata.Height}
      className={`w-[${LogoMetadata.Width}px] h-[${LogoMetadata.Height}px]`}
    />
  );
}

export default function HomeLandingPage() {
  return (
    <Container className="grid justify-items-center gap-8">
      <HeroLogoImage />
      <HeroSection title="GrantStream">
        Funding made easy, for&nbsp;Web3&nbsp;builders.
      </HeroSection>
    </Container>
  );
}
