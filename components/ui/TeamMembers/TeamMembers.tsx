"use client";

import { truncateEthAddress } from "@/utils";
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
import { teamMembers } from "./data";
import { TeamMember } from "./types";
import {
  formatAvailableTime,
  getAvatarFallback,
  isMemberAvailable,
} from "./utils";

function BadgeAvailable() {
  return (
    <Badge className="justify-center min-w-[115px]" variant="default">
      Available
    </Badge>
  );
}

function BadgeUnavailable() {
  return (
    <Badge className="justify-center min-w-[115px]" variant="secondary">
      Offline
    </Badge>
  );
}

function MemberContent({ name, wallet, available }: TeamMember) {
  const { data, isLoading } = useEnsName({ address: wallet });

  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarFallback>{getAvatarFallback(name)}</AvatarFallback>
        </Avatar>
        <div className="grid gap-y-[0.2rem]">
          <p className="text-sm font-medium">{name}</p>

          {isLoading ? (
            <Skeleton className="w-[200px] h-[14px]" />
          ) : (
            <p className="text-sm leading-none text-muted-foreground truncate min-w-[200px]">
              {data || truncateEthAddress(wallet, { nSuffix: 10, nPrefix: 10 })}
            </p>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center space-y-1.5">
        {isMemberAvailable(available) ? (
          <BadgeAvailable />
        ) : (
          <BadgeUnavailable />
        )}
        <p className="text-xs text-muted-foreground">
          {formatAvailableTime(available)}
        </p>
      </div>
    </div>
  );
}

export function TeamMembers() {
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
      </CardContent>
    </Card>
  );
}
