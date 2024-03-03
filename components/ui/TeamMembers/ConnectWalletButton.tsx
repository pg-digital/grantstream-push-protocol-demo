"use client";

import { Button } from "@/components/ui/Button";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { ReactNode } from "react";
import { useAccount, useChains, useConnect, useDisconnect } from "wagmi";
import { LoadingWalletButton } from "./LoadingWalletButton";
import { StartChatButton } from "./StartChatButton";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return <div className="grid">{children}</div>;
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

  // Motion animations for '<StartChatButton />'.
  const fromAnimProps: AnimationProps["initial"] = {
    marginBottom: 0,
    opacity: 0,
    height: 0,
  };

  const toAnimProps: AnimationProps["animate"] = {
    marginBottom: "1rem",
    height: "auto",
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  };

  const exitAnimProps: AnimationProps["exit"] = {
    ...fromAnimProps,
    transition: {
      duration: 0.35,
    },
  };

  return (
    <Wrapper>
      {isConnecting && <LoadingWalletButton />}

      <AnimatePresence>
        {!isConnecting && isConnected && (
          <motion.div
            initial={fromAnimProps}
            animate={toAnimProps}
            exit={exitAnimProps}
            className="z-0"
          >
            <StartChatButton />
          </motion.div>
        )}
      </AnimatePresence>

      {!isConnecting && (
        <Button
          onClick={!isConnected ? onConnectClick : onDisconnectClick}
          variant={!isConnected ? "default" : "secondary"}
          className="z-1 w-full"
        >
          {!isConnected ? "Connect" : "Disconnect"} wallet
        </Button>
      )}
    </Wrapper>
  );
}
