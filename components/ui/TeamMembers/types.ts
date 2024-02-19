import { EthAddress } from "@/types";

export interface Time {
  hours: number;
  minutes?: number;
}

export interface Available {
  tz: string;
  endTime: Time;
  startTime: Time;
}

export interface TeamMember {
  id: number;
  name: string;
  address: EthAddress;
  available: Available;
}

export interface MemberStatusProps {
  isAvailable?: boolean;
}

export interface MemberWalletProps {
  address: TeamMember["address"];
}

export interface MemberNameProps extends MemberStatusProps {
  name: TeamMember["name"];
}
