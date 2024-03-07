import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { HeroSection } from "@/components/ui/HeroSection";
import { APP_METADATA, LOGO_METADATA, NavLinkExternal } from "@/constants";
import { cn } from "@/utils";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = `${APP_METADATA.title} | Home`;
export const metadata: Metadata = {
  ...APP_METADATA,
  title,
};

function HeroLogoImage() {
  const { alt, width, height, ...other } = LOGO_METADATA;

  return (
    <Image
      {...other}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "contrast-[95%] brightness-[95%]",
        `w-[${width}px] h-[${height}px]`
      )}
    />
  );
}

export default function HomeLandingPage() {
  return (
    <Container className="grid justify-items-center gap-8 mb-[6vh] lg:mb-[8vh] xl:mb-[10vh]">
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
