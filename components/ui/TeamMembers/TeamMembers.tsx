"use client";

import { useIsServerSide } from "@/hooks";
import { cn, truncateEthAddress } from "@/utils";
import { Check, X as Cross } from "lucide-react";
import { useEnsName } from "wagmi";
import { Avatar, AvatarFallback } from "../Avatar";
import { Badge } from "../Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Card";
import { Skeleton } from "../Skeleton";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { LoadingWalletButton } from "./LoadingWalletButton";
import { teamMembers } from "./data";
import {
  MemberNameProps,
  MemberStatusProps,
  MemberWalletProps,
  TeamMember,
} from "./types";
import {
  formatAvailableTime,
  getAvatarFallback,
  isMemberAvailableNow,
} from "./utils";

function MemberStatusText({ isAvailable }: MemberStatusProps) {
  return (
    <Badge
      variant={isAvailable ? "default" : "secondary"}
      className="justify-center min-w-[85px]"
    >
      {isAvailable ? "Available" : "Offline"}
    </Badge>
  );
}

function MemmberStatusIcon({ isAvailable }: MemberStatusProps) {
  const StatusIcon = isAvailable ? Check : Cross;

  return (
    <StatusIcon
      strokeWidth={3}
      className={cn(
        "inline md:hidden align-middle h-4 w-4",
        { "ml-1 text-secondary": !isAvailable },
        { "ml-1.5 text-primary": isAvailable }
      )}
    />
  );
}

function MemberName({ name, isAvailable }: MemberNameProps) {
  return (
    <p className="text-sm font-medium">
      {name}
      <MemmberStatusIcon isAvailable={isAvailable} />
    </p>
  );
}

function MemberWallet({ address }: MemberWalletProps) {
  const { data: ensName, isLoading } = useEnsName({
    address,
  });

  const truncatedAddress = truncateEthAddress(address, {
    nSuffix: 10,
    nPrefix: 10,
  });

  if (isLoading) {
    return <Skeleton className="w-[200px] h-[14px]" />;
  }

  return (
    <p className="text-sm leading-none text-muted-foreground truncate min-w-[200px]">
      {ensName || truncatedAddress}
    </p>
  );
}

function MemberContent({ name, address, available }: TeamMember) {
  const isAvailableNow = isMemberAvailableNow(available);

  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback>{getAvatarFallback(name)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-y-[0.2rem]">
          <MemberName name={name} isAvailable={isAvailableNow} />
          <MemberWallet address={address} />
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center space-y-1.5">
        <MemberStatusText isAvailable={isAvailableNow} />
        <p className="text-xs text-muted-foreground">
          {formatAvailableTime(available)}
        </p>
      </div>
    </div>
  );
}

export function TeamMembers() {
  const { isServerSide } = useIsServerSide();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Connect with our team members for support.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {teamMembers.map((teamMember) => (
          <MemberContent key={teamMember.id} {...teamMember} />
        ))}
        {/* Only available on client-side, prevents hydration issues. */}
        {isServerSide ? <LoadingWalletButton /> : <ConnectWalletButton />}
      </CardContent>
    </Card>
  );
}
