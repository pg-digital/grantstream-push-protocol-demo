import { getBaseUrl } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import { ComponentProps } from "react";

interface ShareImage {
  url: string;
  width: number;
  height: number;
}

type LogoMetadata = Pick<
  ComponentProps<typeof Image>,
  "src" | "alt" | "width" | "height" | "quality" | "priority"
>;

export const SHARE_IMAGE: Readonly<ShareImage> = {
  url: "/screens/grant-stream-og-image_home_1600x900.png",
  width: 1600,
  height: 900,
};

export const LOGO_METADATA: Readonly<LogoMetadata> = {
  src: "/images/grant-stream-logo_transaprent_250x226.png",
  alt: "Transparent picture of GrantStream's primary Logo",
  width: 250,
  height: 226,
  quality: 100,
  priority: true,
};

const DEFAULT_METADATA = {
  title: "GrantStream",
  description: "Funding made easy, for Web3 builders.",
  metadataBase: new URL(getBaseUrl()),
} as const;

export const APP_METADATA: Readonly<Partial<Metadata>> = {
  ...DEFAULT_METADATA,
  // Metadata API interface for generating social graph.
  openGraph: {
    ...DEFAULT_METADATA,
    images: [SHARE_IMAGE],
    siteName: "GrantStream",
  },
  twitter: {
    ...DEFAULT_METADATA,
    images: [SHARE_IMAGE.url],
    card: "summary_large_image",
  },
  // Metadata API interface for generating favicons.
  icons: {
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    icon: [
      {
        url: "/favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        rel: "icon",
      },
      {
        url: "/favicons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
        rel: "icon",
      },
    ],
  },
};
