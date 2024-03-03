"use client";

import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { AppMetadata } from "@/constants";
import { Metadata } from "next";
import { useEffect } from "react";

enum PageMetaData {
  Title = "An error occurred",
}

interface ErrorPageProps {
  // 'digest' is the generated hash of the error that was thrown.
  error: Error & { digest?: string };

  // 'reset()' can be used to attempt to re-render this segment.
  reset: () => void;
}

export const metadata: Metadata = {
  title: `${AppMetadata.TitlePrefix} | ${PageMetaData.Title}`,
  description: AppMetadata.Description,
};

export default function ErrorPage({ error }: ErrorPageProps) {
  const hasErrorMessage = !!error?.message?.length;

  useEffect(() => {
    // Log the 'error' that triggered this to render.
    hasErrorMessage && console.error(error.message);
  }, [hasErrorMessage, error?.message]);

  return (
    <Container>
      <HeroSection title={PageMetaData.Title}>
        {AppMetadata.Description}
      </HeroSection>
    </Container>
  );
}
