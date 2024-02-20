"use client";

import { Button } from "@/components/ui/Button";
import { ReactNode } from "react";
import { useAccount, useChains, useConnect, useDisconnect } from "wagmi";
import { LoadingWalletButton } from "./LoadingWalletButton";
import { StartChatButton } from "./StartChatButton";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className="grid gap-4">{children}</div>;
}

export function ConnectWalletButton() {
  const chains = useChains();
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect();
  const { isConnected, isConnecting } = useAccount();

  const onConnectClick = () => {
    connect({
      connector: connectors[0],
      chainId: chains[0]?.id,
    });
  };

  const onDisconnectClick = () => {
    disconnect();
  };

  if (isConnecting) {
    return (
      <Wrapper>
        <LoadingWalletButton />
      </Wrapper>
    );
  }

  if (!isConnected) {
    return (
      <Wrapper>
        <Button variant="default" onClick={onConnectClick}>
          Connect wallet
        </Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StartChatButton />
      <Button variant="secondary" onClick={onDisconnectClick}>
        Disconnect wallet
      </Button>
    </Wrapper>
  );
}
