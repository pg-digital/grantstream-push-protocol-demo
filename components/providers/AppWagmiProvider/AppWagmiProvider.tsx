"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet } from "@wagmi/core/chains";
import { ReactNode } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

interface AppWagmiProviderProps {
  children: ReactNode;
}

const wagmiConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [injected()],
});

const queryClient = new QueryClient();

export function AppWagmiProvider({ children }: AppWagmiProviderProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
