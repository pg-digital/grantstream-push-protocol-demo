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
  wallet: `0x${string}`;
  available: Available;
}
