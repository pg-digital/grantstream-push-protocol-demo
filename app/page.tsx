import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroSection } from "@/components/ui/HeroSection";
import { AppMetadata, LogoMetadata, NavLinkExternal } from "@/constants";
import { cn } from "@/utils";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
      className={cn(
        "contrast-[95%] brightness-[95%]",
        `w-[${LogoMetadata.Width}px] h-[${LogoMetadata.Height}px]`
      )}
    />
  );
}

export default function HomeLandingPage() {
  return (
    <Container className="grid justify-items-center gap-8 mb-[6dvh] lg:mb-[8dvh] xl:mb-[10dvh]">
      <HeroLogoImage />

      <div className="flex flex-col w-full max-w-[380px] gap-5">
        <HeroSection title="GrantStream" className="!pb-0">
          Funding made easy, for&nbsp;Web3&nbsp;builders.
        </HeroSection>

        <Button variant="outline" className="w-full" size="lg" asChild>
          <Link href={NavLinkExternal.Calendly} target="_blank">
            <Calendar className="mr-2 h-4 w-4" /> Book a meeting
          </Link>
        </Button>
      </div>
    </Container>
  );
}
