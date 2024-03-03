interface Favicon {
  id: string;
  rel: string;
  href: string;
  sizes: string;
  type?: string;
}

export enum AppMetadata {
  TitlePrefix = "GrantStream",
  Description = "Funding made easy, for Web3 builders.",
  Image = "https://grantstream-push-protocol-demo.vercel.app/screens/grant-stream-og-image_home_1600x900.png",
}

export const LogoMetadata = {
  Src: "/images/grant-stream-logo_transaprent_250x226.png",
  Alt: "Transparent picture of GrantStream's primary Logo",
  Width: 250,
  Height: 226,
} as const;

export const AppFavions: Readonly<Favicon[]> = [
  {
    id: "link_favicon_apple-touch-icon",
    href: "/favicons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
  },
  {
    id: "link_favicon_image-png_32x32",
    href: "/favicons/favicon-32x32.png",
    type: "image/png",
    sizes: "32x32",
    rel: "icon",
  },
  {
    id: "link_favicon_image-png_16x16",
    href: "/favicons/favicon-16x16.png",
    type: "image/png",
    sizes: "16x16",
    rel: "icon",
  },
];
