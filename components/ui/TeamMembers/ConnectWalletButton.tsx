"use client";

import { Button } from "@/components/ui/Button";
import { useAccount, useChains, useConnect, useDisconnect } from "wagmi";
import { LoadingWalletButton } from "./LoadingWalletButton";

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
    return <LoadingWalletButton />;
  }

  if (!isConnected) {
    return (
      <Button variant="default" onClick={onConnectClick}>
        Connect wallet
      </Button>
    );
  }

  return (
    <Button variant="secondary" onClick={onDisconnectClick}>
      Disconnect wallet
    </Button>
  );
}
