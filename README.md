# GrantStream | Push Protocol Demo

GrantStream is an AI-powered platform catering to developers and startups seeking grant funding. It addresses dissatisfaction with the opaque and time-consuming process of applying for protocol grants. **By leveraging the power of AI, GrantStream matches users with suitable grant programs based on their profiles.** It extensively trains an AI agent to understand grant programs, including approval criteria and historical discourse, and delivers tailored proposals to grant teams for final approval.

## Table of Contents

- [Brief Overview](#grantstream--push-protocol-demo)
- [Getting Started](#getting-started)
  - [Main Landing Page](#main-landing-page)
  - [Push Protocol Demo](#push-protocol-demo)
  - [Enable Theme Toggle](#enable-theme-toggle)
- [Available Scripts](#available-scripts)
  - [`npm run dev`](#npm-run-dev)
  - [`npm run build`](#npm-run-build)
  - [`npm run start`](#npm-run-start)
- [CI / CD Pipeline](#ci--cd-pipeline)
- [Find out More](#find-out-more)

## Getting Started

Install the latest `LTS` version of [Node](https://nodejs.org/en/) and its package manager (which were `v18.18.1` and `9.8.1` at the time of writing this document). Once `Node` is installed on your machine, open the terminal or command prompt at the root of the project directory, and run the following commands.

```bash
npm install
npm run dev
```

### Main Landing Page

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app run on the local development server. **The home page is the main landing page for GrantStream's MVP.** It features a clean header with links to social channels, a prominent hero section highlighting the logo with concise text, and a call to action inviting users to 'Book a meeting' with the team. Additionally, the page incorporates an animated stream (pun intended) of particles in the background, creatively generated using `WebGL`.

![Screenshot of the main landing page](/docs/screens/grant-stream_screen_landing-page_1600x804.png "Screenshot of the main landing page")

> [!NOTE]
> The **below sections of the app are in-progress.** Additional documentation will be added here as and when new features are merged into `main`.

### Push Protocol Demo

While this repository houses other pages, its primary focus lies in experimenting with [Push Protocol](https://push.org/), and to test / demo functionalities (available within `Push Protocol`) slated for inclusion in GrantStream's MVP across different milestones. To engage with the demo, visit [http://localhost:3000/push-protocol-demo](http://localhost:3000/push-protocol-demo) in your browser. The demo page mirrors the aesthetic of the landing page, featuring a 'Team Members' section where **users can connect their [MetaMask](https://metamask.io/) wallet to chat with an available team member via the `Push Chat API`.**

![Screenshot of Push protocol demo page](/docs/screens/grant-stream_screen_pp-demo-page_1600x804.png "Screenshot of Push protocol demo page")

> [!WARNING]
> The **demo page is for internal use only** and is disabled in `main`. Comment out the `redirects` configured within `next.config.mjs` to access it.

```diff
const nextConfig = {
- async redirects() {
+ /* async redirects() {
    return [
      {
        source: "/push-protocol-demo",
        destination: "/",
        permanent: false,
      },
    ];
- },
+ }, */
};
```

---

**The app header provides options to toggle between `light`, `dark` (default), and `system` themes.** However, the current logo iteration doesn't contrast well with the `light` background, so this feature has been temporarily disabled. You can manually re-enable it by uncommenting `<AppThemeToggle />` in the file `components/ui/AppNavHeader.tsx`.

![Screenshot of theme toggle in header](/docs/screens/grant-stream_screen_theme-toggle_1600x804.png "Screenshot of theme toggle in header")

```diff
- // import { AppThemeToggle } from "@/components/providers/AppThemeToggle";
+ // import { AppThemeToggle } from "@/components/providers/AppThemeToggle";

export function AppNavHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container size="full" className="flex justify-between h-[65px]">
        <nav className="flex flex-1 items-center space-x-1 justify-end">
          <CalendlyLinkButton />
          <TwitterLinkButton />
-         {/* <AppThemeToggle /> */}
+         <AppThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
```

## Available Scripts

This is a [Next.js](https://nextjs.org/) project bootstrapped with [Create React App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). At the root of the project directory, **you can execute the following commands (listed below) via a terminal or command prompt.**

### `npm run dev`

Run the `Next.js` app locally in **development mode**. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### `npm run build`

Build the `Next.js` app locally for **production usage**, with a detailed breakdown of the optimized production build.

### `npm run start`

Once built locally, start a `Next.js` **production server**. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## CI / CD Pipeline

This app is deployed using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Check out the official `Next.js` [deployment documentation](https://nextjs.org/docs/deployment) for more details.

> [!NOTE]
> The `Vercel` domain for the `main` branch is set up at https://grantstream-push-protocol-demo.vercel.app.

## Find out More

To know more about GrantStream, feel free to **reach out to us through any of the following channels:**

- [Book a Meeting](https://calendly.com/noautopilotyt/grantstream-analysis)
- [Follow us on X](https://twitter.com/TeamGrantStream)
- [Visit Website](https://www.grantstream.xyz/)
