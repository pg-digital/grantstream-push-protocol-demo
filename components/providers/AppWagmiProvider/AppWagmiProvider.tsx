"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";

interface AppWagmiProviderProps {
  children: ReactNode;
}

const wagmiConfig = createConfig({
  transports: { [mainnet.id]: http() },
  connectors: [injected()],
  chains: [mainnet],
});

const queryClient = new QueryClient();

export function AppWagmiProvider({ children }: AppWagmiProviderProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
