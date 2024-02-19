"use client";

import { isModeProd } from "@/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { ReactNode } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

interface AppWagmiProviderProps {
  children: ReactNode;
}

const wagmiConfig = createConfig({
  chains: !isModeProd() ? [sepolia] : [mainnet],
  transports: {
    [sepolia.id]: http(),
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
