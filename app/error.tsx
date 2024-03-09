"use client";

import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/ui/HeroSection";
import { APP_METADATA } from "@/constants";
import { Metadata } from "next";
import { useEffect } from "react";

interface ErrorPageProps {
  // 'digest' is the generated hash of the error that was thrown.
  error: Error & { digest?: string };

  // 'reset()' can be used to attempt to re-render this segment.
  reset: () => void;
}

const title = `${APP_METADATA.title} | An error occurred`;
export const metadata: Metadata = {
  ...APP_METADATA,
  title,
};

export default function ErrorPage({ error }: ErrorPageProps) {
  const hasErrorMessage = !!error?.message?.length;

  useEffect(() => {
    // Log the 'error' that triggered this to render.
    hasErrorMessage && console.error(error.message);
  }, [hasErrorMessage, error?.message]);

  return (
    <Container>
      <HeroSection title="An error occurred">
        {APP_METADATA.description}
      </HeroSection>
    </Container>
  );
}
